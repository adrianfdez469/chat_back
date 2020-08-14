const {validationResult} = require('express-validator');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const helper = require('../helpers/helpers');
const UserModel = require('./userModel');
const {send, emailTemplates} = require('../helpers/sendmail');

exports.signUp = async (req, resp, next) => {
    try{
        
        const errors = validationResult(req);
        helper.checkValidationResults(errors);

        const {firstName, lastName, email, password, hostname, language = 'en'} = req.body;
       
        const exist = await UserModel.findOne({email: email});
        helper.checkIfExist(exist, "EXISTS");

        const hashPass = await bcrypt.hash(password, 12);
        
        const user = new UserModel({
            nickname: firstName,
            firstName: firstName,
            lastName: lastName || '',
            email: email,
            password: hashPass,
            active: false,
            language: language === 'es'?'es':'en',
            avatarUrl: null
        });

        await user.save();
        const privateKey = config.get('jwtSecrete');
        const token = jwt.sign({
            userId: user._id.toString(),
            email: email
        }, privateKey);



        // Envio un correo con la url siguiente:
        // dominioApp/users/activate/user.id/activationToken
        //const link = `${req.get('host')}/activateuser/${user._id}/${activationToken}`;
        const link = `${hostname}/activateuser/${token}/${firstName}`;
        
        const tempId = language === 'es'? emailTemplates["SIGNUP-ES"] : emailTemplates["SIGNUP-EN"];
        const paramsObj = {
            "name": firstName,
            "link": link.replace("http://", "").replace("https://") // PONER EL LINK SIN EL HTTPS
        }
        send(email, paramsObj, tempId);

        return resp.status(201).json({
            msg:'Check email to activate account'
        });

    } catch(err){
        console.log(err);
        return next(err);
    }
}


exports.activateUser = async (req, resp, next) => {
    try{
        const {token, language, gender, nickname, avatar} = req.body;
        
        const decodedToken = jwt.verify(token, config.get('jwtSecrete'));
        console.log(decodedToken);
        if(!decodedToken){
            const error = new Error("Invalid token");
            error.statusCode = 403;
            throw error;
        }

        const user = await UserModel.findById(decodedToken.userId);
        if(!user){
            const error = new Error("Error");
            error.statusCode = 404;
            throw error;
        }

        if(decodedToken.email !== user.email){
            const error = new Error("Invalid token");
            error.statusCode = 403;
            throw error;
        }

        const base64Data = avatar.replace(/^data:image\/png;base64,/, "");
        let imageUrl = `/images/avatar-${user._id}.png`;

        fs.writeFileSync(path.join(__dirname, '..','public', 'images', `avatar-${user._id}.png`), base64Data, 'base64', function(err) {
            if(err) imageUrl = null;
        });

        user.active = true;
        user.language = language;
        user.nickname = nickname;
        user.gender = gender;
        user.avatarUrl = imageUrl;
        await user.save();

        resp.status(200).json({
            msg: "User activated"
        });
        
    } catch(err){
        next(err);
    }
    
    
}

exports.forgotPassword = async (req, resp, next) => {
    try {
        const errors = validationResult(req);
        helper.checkValidationResults(errors);

        const {email, hostname, language = 'en'} = req.body;

        // Verificar que exista el correo
        const user = await UserModel.findOne({email: email});
        if(!user){
            const error = new Error("No user with that email was found");
            error.statusCode = 404;
            throw error;
        }
        // Generar un hash con url que al pinchar redireccione una pagina para cambiar el pass

        const privateKey = config.get('jwtSecrete');
        const token = jwt.sign({
            email: email,
            userId: user._id.toString()
        },privateKey, {
            expiresIn: '3h'
        });


        const link = `${hostname}/changepass/${token}`;
        const tempId = language === 'es'? emailTemplates["RESETPASS-ES"] : emailTemplates["RESETPASS-EN"];
        const paramsObj = {
            "link": link.replace("http://", "").replace("https://") // PONER EL LINK SIN EL HTTPS
        }
        send(email, paramsObj, tempId);

        return resp.status(201).json({
            msg:'Check email to reset password'
        });

    } catch(err) {
        next(err);
    }
}

exports.resetPassword = async (req, resp,next) => {
    try {
        
        const errors = validationResult(req);
        helper.checkValidationResults(errors);

        const {token, password} = req.body;
        
        const decodedToken = jwt.verify(token, config.get('jwtSecrete'));
        
        if(!decodedToken){
            const error = new Error("Invalid token");
            error.statusCode = 403;
            throw error;
        }
        
        const user = await UserModel.findById(decodedToken.userId);
        if(!user){
            const error = new Error("Error");
            error.statusCode = 404;
            throw error;
        }

        if(decodedToken.email !== user.email){
            const error = new Error("Invalid token");
            error.statusCode = 403;
            throw error;
        }

        const hashPass = await bcrypt.hash(password, 12);
        user.password = hashPass;
        await user.save();

        resp.status(200).json({
            msg: "Password changed"
        });
        
    } catch (err) {
        next(err);
    }
}


exports.login = async (req, resp, next) => {
    try{
        const errors = validationResult(req);
        helper.checkValidationResults(errors);

        const {email, password} = req.body;
        const user = await UserModel.findOne({email: email});

        if(!user){
            const error = new Error("Not authorized");
            error.statusCode = 403;
            throw error;
        }

        const isEqualPass = bcrypt.compareSync(password, user.password);
        if(!isEqualPass){
            const error = new Error("Not authorized");
            error.statusCode = 403;
            throw error;
        }
        
        
        const jwt_token_expiry = new Date(new Date().getTime() +  (config.get('jwt_token_expires') * 60 * 1000));
        const jwt_token = jwt.sign({
            userId: user._id,
            expitationdate: jwt_token_expiry
        }, config.get('jwtSecrete'), 
        {expiresIn: config.get('jwt_token_expires') * 60}); // Dura 10 minutos        
        
        const refresh_token  = bcrypt.genSaltSync();
        const refresh_token_expires = new Date(new Date().getTime() +  (config.get('refresh_token_expires') * 60 * 1000));

        user.refresh_token = refresh_token;
        user.refresh_token_expires = refresh_token_expires;
        await user.save();

        resp.cookie('refresh_token', refresh_token, {
            maxAge: config.get('refresh_token_expires') * 60 * 1000, // convert from minute to milliseconds
            httpOnly: true,
            secure: false,
            domian: req.headers.host,
            path: '/users/refresh_token'
        });

        resp.status(200).json({
            token: jwt_token,
            token_expiry: jwt_token_expiry,
            _id: user._id.toString(),
            nickname: user.nickname,
            firstName: user.firstname,
            lastname: user.lastname,
            email: user.email,
            gender: user.gender,
            language: user.language,
            avatarUrl: user.avatarUrl
        });

    }catch(err){
        next(err);
    }
}


/*
exports.getConectedUsers = async (req, resp, next) => {
    const users = await UserModel.find({})
    resp.status(200).json({data: users});
}
*/
