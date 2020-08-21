const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false,
        required: true
    },
    language: String,
    gender: String,
    avatarUrl: String,
    waitingNewPass: {
        type: Boolean,
        default: false
    },
    refresh_token: String,
    refresh_token_expires: Date,
    socketId: String,
    contacts: [{
        contactId: {type: Schema.Types.ObjectId, required: true, ref: "User"},
        friendShipStatus: {
            type: Number, default: 0
        }
    }],
    blackList: [
        {contactId: {type: Schema.Types.ObjectId, required: true, ref: "User"}}
    ]
});



module.exports = mongoose.model("User", userSchema);

