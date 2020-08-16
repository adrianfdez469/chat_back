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
        const privateKey = config.get('jwtSecret');
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
        
        const decodedToken = jwt.verify(token, config.get('jwtSecret'));
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

        


        const privateKey = config.get('jwtSecret');
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
        user.waitingNewPass = true;
        await user.save();

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
        
        const decodedToken = jwt.verify(token, config.get('jwtSecret'));
        
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

        if(user.waitingNewPass === false){
            const error = new Error("You can only use this link once");
            error.statusCode = 403;
            throw error;
        }

        if(decodedToken.email !== user.email){
            const error = new Error("Invalid token");
            error.statusCode = 403;
            throw error;
        }

        const hashPass = await bcrypt.hash(password, 12);
        user.password = hashPass;
        user.waitingNewPass = false;
        await user.save();

        resp.status(200).json({
            msg: "Password changed"
        });
        
    } catch (err) {
        next(err);
    }
}

const getLoginData = user => {
    try{
    
        const jwt_token_expiry = new Date(new Date().getTime() +  (config.get('jwt_token_expires') * 60 * 1000));
        const jwt_token = 'Bearer ' +  jwt.sign({
            userId: user._id,
            expitationdate: jwt_token_expiry
        }, config.get('jwtSecret'), 
        {expiresIn: config.get('jwt_token_expires') * 60}); // Dura 10 minutos   
        
        return {
            token: jwt_token,
            token_expires: jwt_token_expiry,
            _id: user._id.toString(),
            nickname: user.nickname,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            language: user.language,
            avatarUrl: user.avatarUrl
        };
    }
    catch(err){
        throw err;
    }
    
}

exports.loginByToken = async (req, resp, next) => {
    try{
        const {token} = req.body;
        const realToken = token.split(' ')[1];
        const decodedToken = jwt.verify(realToken, config.get('jwtSecret'));
        console.log(decodedToken);
        if(!decodedToken){
            const error = new Error("Invalid token");
            error.statusCode = 403;
            throw error;
        }
        const userId = decodedToken.userId;
        const user = await UserModel.findById(userId);
        const loginData = getLoginData(user);

        resp.status(200).json(loginData);

    }
    catch(err){
        throw err;
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
        
         // Dura 10 minutos        
        
        const refresh_token  = bcrypt.genSaltSync();
        const refresh_token_expires = new Date(new Date().getTime() +  (config.get('refresh_token_expires') * 60 * 1000));

        user.refresh_token = refresh_token;
        user.refresh_token_expires = refresh_token_expires;
        await user.save();

        const loginData = getLoginData(user);
        loginData.refresh_token = refresh_token;
        loginData.refresh_token_expires = refresh_token_expires;

        resp.status(200).json(loginData);

    }catch(err){
        next(err);
    }
}

exports.logout = async (req, resp, next) => {
    try {
        const userId = req.userId;
        
        if(!userId){
            const error = new Error('Not authorized');
            error.statusCode = 403;
            throw error;
        }

        const user = UserModel.findById(userId);
        if(!user){
            const error = new Error('Not authorized');
            error.statusCode = 403;
            throw error;
        }

        user.refresh_token = null;
        user.refresh_token_expires = null;
        await user.save();

        resp.status(200).json({});

    } catch (err) {
        next(err);
    }
}

exports.refreshToken = async (req, resp, next) => {
  
    try{

        const {
            expiredToken,
            refresh_token
        } = req.body; 
    
        const decodedExpiredToken = jwt.decode(expiredToken.split(' ')[1]);
        console.log(decodedExpiredToken);
        const userId = decodedExpiredToken.userId;

        const user = await UserModel.findById(userId);
        if(user.refresh_token !== refresh_token){
            const error = new Error('Invalid refresh token');
            error.statusCode = 403;
            throw error;
        }

        const refresh_token_expires = user.refresh_token_expires;
        if(new Date(refresh_token_expires).getTime() < new Date().getTime()){
            const error = new Error('Invalid refresh token1');
            error.statusCode = 403;
            throw error;
        }

        const jwt_token_expiry = new Date(new Date().getTime() +  (config.get('jwt_token_expires') * 60 * 1000));
        const jwt_token = 'Bearer ' + jwt.sign({
            userId: user._id,
            expitationdate: jwt_token_expiry
        }, config.get('jwtSecret'), 
        {expiresIn: config.get('jwt_token_expires') * 60}); // Dura 10 minutos        
        
        const refreshToken  = bcrypt.genSaltSync();
        const refresh_token_exp = new Date(new Date().getTime() +  (config.get('refresh_token_expires') * 60 * 1000));

        user.refresh_token = refreshToken;
        user.refresh_token_expires = refresh_token_exp;
        await user.save();

        resp.status(200).json({
            new_token: jwt_token, 
            new_refresh_token: refreshToken, 
            new_token_expires: jwt_token_expiry, 
            new_refresh_token_expires: refresh_token_exp
        });


    }catch(err){
        next(err);
    }
}


const friendShipStatusOptions = {
    1: "ACEPTED",
    2: "REQUESTED",
    3: "ASKED",
    4: "DECLINED",
    5: "BLOCKED"
}

exports.searchFirends = async (req, resp, next) => {
    try {
        const userId = req.userId;

        const user = await (await UserModel.findById(userId)).populate('contacts.contactId','email nickname avatarUrl').execPopulate();
        console.log(user.contacts);
        
        const friends = user.contacts.map(contact => {
            return {
                friendShipStatusCode: friendShipStatusOptions[contact.friendShipStatus],
                friendShipStatus: contact.friendShipStatus,
                contactId: contact._id,
                nickname: contact.contactId.nickname,
                email: contact.contactId.email,
                avatarUrl: contact.contactId.avatarUrl
            };
        })
        

        resp.status(200).json({
            friends: friends
        })

    } catch (error) {
        next(error);
    }
}

exports.searchContact = async (req, resp, next) => {
    try {
        
        const userId = req.userId;
        const {stringPattern, start, limit} = req.body;
        console.log(stringPattern);
        const users = await UserModel
            .find({
                $and: [
                    {email: {"$regex": stringPattern, "$options": "i"}},
                    {active: true},
                    {$nor: [
                        {_id: userId}
                    ]}
                ]
            })
            .limit(limit)
            .skip(start)
            .sort({email: 1});
        
        
        const currentUser = await UserModel.findById(userId);
        
        const respObj = users
            // Quitando los que estan en mi lista de contactos
            .filter(user => {
                return currentUser.contacts.findIndex(cta => cta._id.toString() === user._id.toString()) < 0;
            })
            .map(user => {
                return {
                    userId:user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    nickname: user.nickname,
                    avatarUrl: user.avatarUrl
                };
            });
            //console.log(respObj);
            
        resp.status(200).json({
            users: respObj
        });

    } catch (error) {
        next(error);
    }
}

exports.sendFriendRequest = async (req, resp, next) => {
    try {
        const senderId = req.userId;
        const {userId} = req.body;


        const userRequested  = await UserModel.findById(userId);
        if(!userRequested){
            const error = new Error('User doest exist');
            error.statusMessage = 404;
            throw error;
        }

        userRequested.contacts.push({
            _id: senderId,
            contactId: senderId,
            friendShipStatus: 3
        });
        await userRequested.save();
        
        const userSender = await UserModel.findById(senderId);
        userSender.contacts.push({
            _id: userId,
            contactId: userId,
            friendShipStatus: 2
        });
        await userSender.save();


        

        resp.status(200).json({
            friend: {
                friendShipStatusCode: friendShipStatusOptions[2],
                friendShipStatus: 2,
                contactId: userId,
                nickname: userRequested.nickname,
                email: userRequested.email,
                avatarUrl: userRequested.avatarUrl
            }
        });


    } catch (error) {
        next(error);
    }
}

exports.acceptFriendRequest = async (req, resp, next) => {
    try {
        const {userId} = req;
        const {acceptedUserId} = req.body;

        const acceptedUser = await UserModel.findById(acceptedUserId);
        if(!acceptedUser){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        acceptedUser.contacts.id(userId).friendShipStatus = 1;
        await acceptedUser.contacts.id(userId).save();

        const user = await UserModel.findById(userId);
        user.contacts.id(acceptedUserId).friendShipStatus = 1;
        await user.save();

        resp.status(200).json({});


    } catch (error) {
        next(error);
    }
}

exports.declineFriendRequest = async (req, resp, next) => {
    try {
        const {userId} = req;
        const {declinedUserId} = req.body;

        const declinedUser = await UserModel.findById(declinedUserId);
        if(!declinedUser){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        declinedUser.contacts.id(userId).friendShipStatus = 4; //Declined
        await declinedUser.contacts.id(userId).save();

        const user = await UserModel.findById(userId);
        await user.contacts.id(declinedUserId).remove();
        

        resp.status(200).json({});


    } catch (error) {
        next(error);
    }
}


exports.blockUser = async (req, resp, next) => {
    try {
        
        throw new Error('Not implemented!');

    } catch (error) {
        next(error);
    }
}


exports.deleteContact = async (req, resp, next) => {
    try {
        
        throw new Error('Not implemented!');

    } catch (error) {
        next(error);
    }
}
/*
exports.getConectedUsers = async (req, resp, next) => {
    const users = await UserModel.find({})
    resp.status(200).json({data: users});
}
*/
