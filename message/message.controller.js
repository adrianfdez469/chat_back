const MessageModel = require('./message.model');

exports.getMessagesByContact = async (req, resp, next) => {
    try {
        const {user_id:userId} = req.firebaseUser;

        const {contactId} = req.body;
        
        const messages = await MessageModel.find({
            $or: [
                {userOrigin: userId, userDestiny: contactId},
                {userOrigin: contactId, userDestiny: userId}
            ]
        });


        resp.status(200).json({
            conversation: messages
        });

    } catch (error) {
        next(error);
    }
}