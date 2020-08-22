const MessageModel = require('./messageModel');
const getUserIdFromToken = require('../middlewares/isAuth').getUserIdFromToken;
const ObjectId = require('mongoose').Types.ObjectId;

exports.sendMessage = async (content, userOriginId, userDestinyId, token) => {
    try {
        const userIdFromToken = getUserIdFromToken(token);
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

exports.markMessageAsReaded = async (userOriginId, userDestinyId, token) => {
    try {
        const userIdFromToken = getUserIdFromToken(token);
        if(userOriginId.toString() !== userIdFromToken.toString()){
            throw Error(`El idusuario del token (${userIdFromToken}) no coincide con el que se recive por parametros (${userOriginId})`);
        }

        const messages = await MessageModel.find({
            userOrigin: ObjectId(userDestinyId),
            userDestiny: ObjectId(userOriginId),
            readed: false
        });

        for (let index = 0; index < messages.length; index++) {
            messages[index].readed = true;
        }
        await messages.save();

        return true;
         
    } catch (error) {
        console.log(error);
        return false;
    }
}

