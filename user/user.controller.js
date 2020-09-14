/*const {validationResult} = require('express-validator');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
*/

const helper = require('../helpers/helpers');
const UserModel = require('./user.model');
const MessageModel = require('../message/message.model');
const {send, emailTemplates} = require('../helpers/sendmail');

/* 
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
            email: email,
            random: new Date().getTime()
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
        return next(err);
    }
}


exports.activateUser = async (req, resp, next) => {
    try{
        const {token, language, gender, nickname, avatar, isUserInvited, password} = req.body;
        
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

        if(decodedToken.email !== user.email){
            const error = new Error("Invalid token");
            error.statusCode = 403;
            throw error;
        }

        if(avatar){
            // Este código comentareado era la forma en la que se guardaban los avatares en el sistema de ficheros
            user.avatarUrl = avatar;
        }

        user.active = true;
        user.language = language;
        user.nickname = nickname;
        user.gender = gender;
        if(isUserInvited){
            const hashPass = await bcrypt.hash(password, 12);
            user.password = hashPass;
        }
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
            userId: user._id.toString(),
            random: new Date().getTime(),
            resetPass: true
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

        if(decodedToken.resetPass){
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
            expitationdate: jwt_token_expiry,
            random: new Date().getTime()
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

        if(user.active === false){
            const error = new Error("User not active");
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
            token,
            refresh_token
        } = req.body; 
    
        const docodedToken = jwt.verify(token.split(' ')[1], config.get('jwtSecret') );
        const userId = docodedToken.userId;


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
            expitationdate: jwt_token_expiry,
            random: new Date().getTime()
        }, config.get('jwtSecret'), 
        {expiresIn: config.get('jwt_token_expires') * 60});    
        
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

*/
const friendShipStatusOptions = {
    1: "ACEPTED",
    2: "REQUESTED",
    3: "ASKED",
    4: "DECLINED",
    5: "BLOCKED",
    6: "DELETED"
}

/*
    1- ACEPTED -> Eliminar, Bloquear
    2- REQUESTED -> Decline, Bolquear
    3- ASKED -> Aceptar, Decline, bloquear
    4- DECLINED -> Decline, Bloquear
    5- Blocked -> Eliminar
    
*/

exports.searchFirends = async (req, resp, next) => {
    try {
        const {user_id:userId} = req.firebaseUser;

        const specificFriend = req.body.friendId;

        //const user = await (await UserModel.findById(userId)).populate('contacts.contactId','email nickname avatarUrl gender').execPopulate();
        
        const user = await UserModel.findById(userId);
        
        if(user && user.contacts && user.contacts.length > 0){
            await user.populate('contacts.contactId','email nickname avatarUrl gender').execPopulate();
            const friends = user.contacts
                    .map(contact => {
                        return {
                            friendShipStatusCode: friendShipStatusOptions[contact.friendShipStatus],
                            friendShipStatus: contact.friendShipStatus,
                            contactId: contact._id,
                            nickname: contact.contactId.nickname,
                            email: contact.contactId.email,
                            avatarUrl: contact.contactId.avatarUrl,
                            gender: contact.contactId.gender
                        };
                    });
    
            resp.status(200).json({
                friends: friends
            })
        }else{
            resp.status(200).json({
                friends: []
            })
        }
        

    } catch (error) {
        next(error);
    }
}

exports.getContactData = async (req, resp, next) => {
    try {
        
        const {user_id:userId} = req.firebaseUser;

        const user = await UserModel.findById(userId);
        if(user && user.contacts && user.contacts.length > 0){

            
            const contactsWithMsg = user.contacts.reduce( async (acum, contact) => {
                const PromiseCant = MessageModel.countDocuments(
                    {
                        userDestiny: userId, 
                        userOrigin: contact._id,
                        readed: false
                    }
                );

                const PrimiseLastMessage = MessageModel.findOne({
                    userDestiny: userId, 
                    userOrigin: contact._id
                }, {}, {
                    sort: {datetime: -1}
                });

                const data = await Promise.all([PromiseCant, PrimiseLastMessage])
                
                acum = await acum;
                if(data[1] !== null){
                    acum[contact._id.toString()] = {cantidad: data[0], lastMessage: data[1].content, datetime: data[1].datetime}
                }
                return acum;
            }, {});

            const data = await contactsWithMsg;
            
            resp.status(200).json({
                contactsData:  data
            });
        }else{
            resp.status(200).json({
                contactsData:  {}
            });
        }

    } catch (error) {
        next(error);
    }
}

exports.getFriendById = async (req, resp, next) => {
    try {
        const {user_id:userId} = req.firebaseUser;
        const {friendId} = req.body;

        const user = await UserModel.findById(userId);
        const idx = user.contacts.findIndex(contact => contact._id.toString() === friendId);
        if(idx < 0){
            const error = new Error('No contact found');
            error.statusCode = 404;
            throw error;
        }
        await user.populate(`contacts.${idx}.contactId`,'email nickname avatarUrl').execPopulate();
        
        const friend = { 
            friendShipStatus: user.contacts[idx].friendShipStatus, 
            friendShipStatusCode: friendShipStatusOptions[user.contacts[idx].friendShipStatus],
            contactId: user.contacts[idx]._id, 
            nickname: user.contacts[idx].contactId.nickname,
            email: user.contacts[idx].contactId.email,
            avatarUrl: user.contacts[idx].contactId.avatarUrl
        };
        
        
        resp.status(200).json({
            "friend": friend
        })
        

    } catch (error) {
        next(error);
    }
}

exports.searchContact = async (req, resp, next) => {
    try {
        
        const {user_id:userId} = req.firebaseUser;
        const {stringPattern, start, limit} = req.body;
        const users = await UserModel
            .find({
                $and: [
                    {email: {"$regex": stringPattern, "$options": "i"}},
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
            // Quitando los que tengo en la lista negra
            .filter(user => {
                return currentUser.blackList.findIndex(cta => cta._id.toString() === user._id.toString()) < 0;
            })
            .map(user => {
                const obj = {
                    userId:user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    nickname: user.nickname,
                    avatarUrl: user.avatarUrl,
                    gender: user.gender                  
                };
                // Para saber si este posible contacto esta bloqueando al usuario
                const idx = user.blackList.findIndex(bloked => bloked._id.toString() === userId);
                if(idx >= 0)
                    obj.blockinguser = true;
                else
                    obj.blockinguser = false;
                return obj;
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
        
        const {user_id:senderId} = req.firebaseUser;
        const {userId} = req.body;


        const userRequested  = await UserModel.findById(userId);
        if(!userRequested){
            const error = new Error('User doest exist');
            error.statusMessage = 404;
            throw error;
        }


        const idx = userRequested.contacts.findIndex(contact => contact._id === senderId);
        if(idx >= 0){
            userRequested.contacts[idx].friendShipStatus = 3;
        }else{
            userRequested.contacts.push({
                _id: senderId,
                contactId: senderId,
                friendShipStatus: 3
            });
        }

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
                avatarUrl: userRequested.avatarUrl,
                gender: userRequested.gender
            }
        });


    } catch (error) {
        next(error);
    }
}

// Ver que hacer si te bloquea antes de aceptar la solicitud (Probar por la app)
exports.acceptFriendRequest = async (req, resp, next) => {
    try {
        
        const {user_id:userId} = req.firebaseUser;
        const {acceptedUserId} = req.body;

        const acceptedUser = await UserModel.findById(acceptedUserId);
        if(!acceptedUser){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        
        const acIdx = acceptedUser.contacts.findIndex(contact => contact._id.toString() === userId.toString());
        if(acIdx < 0){
            const error = new Error('Contacto no encontrado');
            error.statusCode = 404;
            throw error;
        }
        acceptedUser.contacts[acIdx].friendShipStatus = 1;


        const user = await UserModel.findById(userId);
        
        const ucIdx = user.contacts.findIndex(contact => contact._id.toString() === acceptedUserId.toString())
        if(ucIdx < 0){
            const error = new Error('Contacto no encontrado');
            error.statusCode = 404;
            throw error;
        }
        user.contacts[ucIdx].friendShipStatus = 1;

        await acceptedUser.save();
        await user.save();
        
        resp.status(200).json({
            friend: {
                friendShipStatusCode: friendShipStatusOptions[1],
                friendShipStatus: 1,
                contactId: acceptedUserId,
                nickname: acceptedUser.nickname,
                email: acceptedUser.email,
                avatarUrl: acceptedUser.avatarUrl
            }
        });


    } catch (error) {
        next(error);
    }
}

/*
    2- REQUESTED -> Decline, Bolquear
    3- ASKED -> Aceptar, Decline, bloquear
    
*/
exports.declineFriendRequest = async (req, resp, next) => {
    try {
        
        const {user_id:userId} = req.firebaseUser;
        const {declinedUserId} = req.body;

        const declinedUser = await UserModel.findById(declinedUserId);
        if(!declinedUser){
            const error = new Error('Contact not found');
            error.statusCode = 404;
            throw error;
        }
        const declined_user_ctact_index = declinedUser.contacts.findIndex(contact => contact._id.toString() === userId);
        if(declined_user_ctact_index < 0){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        

        const user = await UserModel.findById(userId);
        if(!user){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        const user_ctact_index = user.contacts.findIndex(contact => contact._id === declinedUserId);

        //Situacion 1: user->envio solicitud, y estando esta en espera la cancela        
        if(user.contacts[user_ctact_index].friendShipStatus === 2 && declinedUser.contacts[declined_user_ctact_index].friendShipStatus === 3){
            // Borrar contactos de los dos usuarios
            await UserModel.findByIdAndUpdate(userId, {
                $pull:{
                    contacts: {_id: declinedUserId}
                }
            });
            await UserModel.findByIdAndUpdate(declinedUserId, {
                $pull:{
                    contacts: {_id:userId}
                }
            });

            return resp.status(200).json({
                "action": "DELETED"   
            });
        } 

        //Situacion 2: user-> recibio la solicitud, y la cancela sin aceptarla
        if(user.contacts[user_ctact_index].friendShipStatus === 3 && declinedUser.contacts[declined_user_ctact_index].friendShipStatus === 2){
            // Del usuario que recibio la solicitud borro el contacto del que se la envio, y del usuario que encio la solicitud cambio el estado a DECLINED
            await UserModel.findByIdAndUpdate(userId, {
                $pull:{
                    contacts: {_id: declinedUserId}
                }
            });
            declinedUser.contacts[declined_user_ctact_index].friendShipStatus = 4;
            await declinedUser.save();

            return resp.status(200).json({
                "action": "DELETED" 
            });
        }

    } catch (error) {
        next(error);
    }
}


exports.deleteContact = async (req, resp, next) => {
    try {
        const {user_id:userId} = req.firebaseUser;
        const {deletedUserId} = req.body;

        if(!deletedUserId){
            const error = new Error('No user found');
            error.statusCode = 404;
            throw error;
        }

        const user = await UserModel.findByIdAndUpdate(userId, {
            $pull:{
                contacts: {_id: deletedUserId}
            }
        });
        if(!user){
            const error = new Error('No user found');
            error.statusCode = 404;
            throw error;
        }

        const deletedUser = await UserModel.findById(deletedUserId);
        const index = deletedUser.contacts.findIndex(contact => contact._id.toString() === userId.toString());
        if(index >= 0 && deletedUser.contacts[index].friendShipStatus === 1){
            deletedUser.contacts[index].friendShipStatus = 6; //DELETED
            await deletedUser.save();
        }

        resp.status(200).json({
            "action": "DELETED"
        });

    } catch (error) {
        next(error);
    }
}

/*
    1- ACEPTED -> Eliminar, Bloquear
    2- REQUESTED -> Decline, Bolquear
    3- ASKED -> Aceptar, Decline, bloquear
    4- DECLINED -> Decline, Bloquear ----
*/
exports.blockUser = async (req, resp, next) => {
    try {
        const {user_id:userId} = req.firebaseUser;
        const {blokedUserId} = req.body;

        const user = await UserModel.findByIdAndUpdate(userId, {
            $pull:{
                contacts: {_id: blokedUserId}
            },
            $push: {
                blackList: {_id: blokedUserId, contactId: blokedUserId}
            }
        });
        if(!user){
            const error = new Error('User not found');
            error.statusCode(404);
            throw error;
        }

        const blokedUser = await UserModel.findById(blokedUserId);
        if(!blokedUser){
            const error = new Error('Bloked user not found');
            error.statusCode(404);
            throw error;
        }
        const bloquer_index = blokedUser.contacts.findIndex(contact => contact._id.toString() === userId);
        if(bloquer_index >= 0){
            blokedUser.contacts[bloquer_index].friendShipStatus = 5; //BLOQUED
            await blokedUser.save();
        }

        resp.status(200).json({
            "action": "BLOKED"
        });


    } catch (error) {
        next(error);
    }
}

exports.changeUserLanguage = async (req, resp, next) => {
    try {
        const {user_id:userId} = req.firebaseUser;
        const {lang} = req.body;

        const user = await UserModel.findByIdAndUpdate(userId, {language: lang})

        if(!user){
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        resp.status(200).json({});

    } catch (error) {
        next(error);
    }
}

/*
exports.changePassword = async (req, resp, next) => {
    try {
        const {userId} = req;
        const {oldPassword, password} = req.body;
        
        const user = await UserModel.findById(userId);
        if(!user){
            const error = new Error("Error: User not found");
            error.statusCode = 404;
            throw error;
        }

        if(!bcrypt.compareSync(oldPassword, user.password)){
            const error = new Error("Wrong Current Pass ");
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
}*/

exports.changeAvatar = async (req, resp, next) => {
    try {
        //const {userId} = req;
        const {firebaseUser} = req;
        const {avatar} = req.body;

        const user = await UserModel.findById(firebaseUser.user_id);
        if(!user){
            const error = new Error("Error: User not found");
            error.statusCode = 404;
            throw error;
        }

        // Este código comentareado era la forma en la que se guardaban los avatares en el sistema de ficheros
        /*
        fs.unlink(path.join(__dirname, '..', `public${user.avatarUrl}`), () => {});

        const avatarName = `avatar_${userId}_${new Date().getTime()}.png`;
        const base64Data = avatar.replace(/^data:image\/png;base64,/, "");
        let imageUrl = `/images/${avatarName}`;

        fs.writeFileSync(path.join(__dirname, '..','public', 'images', avatarName), base64Data, 'base64', function(err) {
            if(err) imageUrl = null;
        });

        user.avatarUrl = imageUrl;
        */
       
        if(/^data:image\/png;base64,/.test(avatar) || /^http/.test(avatar))
            user.avatarUrl = avatar;

        
        
        await user.save();

        resp.status(200).json({
            //avatarUrl: imageUrl
            avatarUrl: user.avatarUrl
        });
        
    } catch (err) {
        next(err);
    }
}


exports.editprofile = async (req, resp, next) => {
    try{
        const {user_id:userId} = req.firebaseUser;

        const {firstName, lastName, email, nickname, gender} = req.body;
       
        const exist = await UserModel.findOne({
            $and: [
                {email: email},
                {$nor: [
                    {_id: userId}
                ]}
            ]
            
        });
        helper.checkIfExist(exist, "EXISTS");

        const user = await UserModel.findById(userId);
        if(!user){
            const error = new Error("Error: User not found");
            error.statusCode = 404;
            throw error;
        }

        user.nickname = nickname;
        user.firstName = firstName;
        user.lastName = lastName || '';
        user.email = email;
        user.gender = gender;
        
        await user.save();

        return resp.status(201).json({
            msg:'User edited'
        });

    } catch(err){
        return next(err);
    }
}
/*
exports.shareapp = async (req, resp, next) => {
    try{
        const {userId} = req;
        const errors = validationResult(req);
        helper.checkValidationResults(errors);

        const { firstName, email, language, hostname } = req.body;
       
        const exist = await UserModel.findOne({
            $and: [
                {email: email}
            ]
        });
        helper.checkIfExist(exist, "EXISTS");

        const user = await UserModel.findById(userId);
        if(!user){
            const error = new Error("Error: User not found");
            error.statusCode = 404;
            throw error;
        } 
        

        const dinamicPass = bcrypt.genSaltSync();
        const newUser = new UserModel({
            nickname: firstName,
            firstName: firstName,
            lastName: '',
            email: email,
            password: dinamicPass, // Password aleatorio
            active: false,
            language: null,
            avatarUrl: null,
            contacts: [
                {
                    _id: userId,
                    contactId: userId,
                    friendShipStatus: 3
                }
            ]
        });
        await newUser.save();

        user.contacts.push({
            _id: newUser._id,
            contactId: newUser._id,
            friendShipStatus: 2
        });
        await user.save();

        const privateKey = config.get('jwtSecret');
        const token = jwt.sign({
            userId: newUser._id.toString(),
            email: email,
            random: new Date().getTime()
        }, privateKey);



        // Envio un correo con la url siguiente:
        const link = `${hostname}/activateuser/${token}/${firstName}/invited`;
        
        const senderName = user.firstName + (user.lastName !== '' ? ' '+user.lastName : '');
        const tempId = language === 'es'? emailTemplates["SHAREAPP-ES"] : emailTemplates["SHAREAPP-EN"];
        const paramsObj = {
            "name": firstName,
            "sender": senderName,
            "senderEmail": user.email,
            "link": link.replace("http://", "").replace("https://") // PONER EL LINK SIN EL HTTPS/HTTPS
        }
        send(email, paramsObj, tempId);

        return resp.status(201).json({
            friend: {
                friendShipStatusCode: friendShipStatusOptions[2],
                friendShipStatus: 2,
                contactId: newUser._id,
                nickname: newUser.nickname,
                email: newUser.email,
                avatarUrl: newUser.avatarUrl
            }
        });

    } catch(err){
        return next(err);
    }
}*/

exports.getUserFeedback = async (req, resp, next) => {
    try{
        const {user_id:userId} = req.firebaseUser;
        
        const user = await UserModel.findById(userId);
        if(!user){
            const error = new Error("Error: User not found");
            error.statusCode = 404;
            throw error;
        }

        return resp.status(200).json({
            rating: user.rating
        });

    } catch(err){
        return next(err);
    }
}

exports.saveFeedback = async (req, resp, next) => {
    try{
        const {user_id:userId} = req.firebaseUser;
        const { designRating, performaceRating, usabilityRating, comment } = req.body;

        let cant = 0;
        let sum = 0;
        let average = 0;
        
        if(designRating > 0){
            cant++;
            average += designRating;
        }
        
        if(performaceRating > 0){
            cant++;
            average += performaceRating;
        }
        
        if(usabilityRating > 0){
            cant++;
            average += usabilityRating;
        }

        if(average > 0){
            average /= cant;   
        }

        const user = await UserModel.findByIdAndUpdate(userId, {
            rating: {
                design: designRating || 0,
                performance: performaceRating || 0,
                usability: usabilityRating || 0,
                average: average,
                comment: comment || ""
            }
        });
        if(!user){
            const error = new Error("Error: User not found");
            error.statusCode = 404;
            throw error;
        }
        

        return resp.status(200).json({});

    } catch(err){
        return next(err);
    }
}

exports.getUserData = async (req, resp, next) => {

    try {
        
        const {firebaseUser} = req;
        const {language} = req.body;
        //console.log(firebaseUser);
        
        // Buscar si el usuario existe en nuestra BD
        // Si no existe guardar datos como user_id, correo, picture, nombre
        
        const user = await UserModel.findById(firebaseUser.user_id);

        if(!user){

            // Realizar validacion de que no exista el mismo correo
            const userEmail = await UserModel.findOne({email: firebaseUser.email});
            if(userEmail){
                const err = new Error('EXISTE UN USUARIO CON EL MISMO EMAIL PERO ID DIFERENTE');
                console.log('User in DB: ');
                console.log(userEmail);
                console.log('Firebase user: ');
                console.log(firebaseUser);
                throw err;
            }

            const nameArray = (firebaseUser.name) ? firebaseUser.name.split(' ') : ['', ''];
            const newUser = new UserModel({
                _id: firebaseUser.user_id,
                nickname: firebaseUser.name ? firebaseUser.name : '',
                firstName: nameArray[0],
                lastName: nameArray.filter((it, idx) => idx > 0).join(' '),
                email: firebaseUser.email ? firebaseUser.email : '',
                active: !!firebaseUser.email_verified,
                language: language,
                avatarUrl: firebaseUser.picture && firebaseUser.picture,
                oauthAvatarUrl: firebaseUser.picture && firebaseUser.picture
            });
            await newUser.save();
            resp.status(201).json({
                user: {
                    _id: newUser._id.toString(),
                    nickname: newUser.nickname,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    email: newUser.email,
                    gender: newUser.gender,
                    language: newUser.language,
                    avatarUrl: newUser.avatarUrl
                }
            });
        }else{
            let respUserObj = {};
            if(firebaseUser.name){
                const nameArray = (firebaseUser.name) ? firebaseUser.name.split(' ') : ['', ''];
                if(!user.firstName || user.firstName === '' || user.firstName !== nameArray[0]){
                    user.firstName = nameArray[0];
                }
                const lastNames = nameArray.filter((it, idx) => idx > 0).join(' ');
                if(!user.lastName || user.lastName === '' || user.lastName !== lastNames ){
                    user.lastName = lastNames;
                }
            }
                                    
            if(firebaseUser.picture && user.oauthAvatarUrl !== firebaseUser.picture){
                user.oauthAvatarUrl = firebaseUser.picture;
                respUserObj.avatarChanged = true;
                respUserObj.oauthAvatarUrl =  firebaseUser.picture;
            }
            if(user.isModified()){
                await user.save();
            }

            respUserObj = {...respUserObj, 
                _id: user._id.toString(),
                nickname: user.nickname,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                gender: user.gender,
                language: user.language,
                avatarUrl: user.avatarUrl
            }

            resp.status(200).json({
                user: respUserObj
            });
        }
        

    } catch (err) {
        console.log(err);
        next(err);
    }
}