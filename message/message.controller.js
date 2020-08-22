const MessageModel = require('./messageModel');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getMessagesByContact = async (req, resp, next) => {
    try {
        const {userId} = req;
        const {contactId} = req.body;
        
        const messages = await MessageModel.find({
            $or: [
                {userOrigin: ObjectId(userId), userDestiny: ObjectId(contactId)},
                {userOrigin: ObjectId(contactId), userDestiny: ObjectId(userId)}
            ]
        });


        resp.status(200).json({
            conversation: messages
        });

    } catch (error) {
        next(error);
    }
}