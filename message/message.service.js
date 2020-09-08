const MessageModel = require('./message.model');
const getUserIdFromToken = require('../middlewares/firebaseAuthMiddleware').getUserIdFromToken;

const ObjectId = require('mongoose').Types.ObjectId;

exports.sendMessage = async (content, userOriginId, userDestinyId, token) => {
    try {
        const userIdFromToken = await getUserIdFromToken(token);
        if(userOriginId.toString() !== userIdFromToken.toString()){
            throw Error(`El idusuario del token (${userIdFromToken}) no coincide con el que se recive por parametros (${userOriginId})`);
        }

        const message = new MessageModel({
            content: content, 
            userOrigin: userOriginId,
            userDestiny: userDestinyId,
            datetime: new Date()
        });

        await message.save();

        return message;
        
    } catch (error) {
        console.log(error);
        return false;
    }
}

exports.markMessageAsReaded = async (userId, contactId, token) => {
    try {
        
        if(!userId || !contactId || !token){
            return false;
        }

        const userIdFromToken = await getUserIdFromToken(token);
        if(userId !== userIdFromToken.toString()){
            throw Error(`El idusuario del token (${userIdFromToken}) no coincide con el que se recive por parametros (${userOriginId})`);
        }

        await MessageModel.updateMany({
            userOrigin: contactId,
            userDestiny: userId,
            readed: false
        }, {
            readed: true
        });

        return true;
         
    } catch (error) {
        console.log(error);
        return false;
    }
}

