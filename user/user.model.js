const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String
    },
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
    language: String,
    gender: String,
    avatarUrl: String,
    oauthAvatarUrl: String,
    contacts: [{
        contactId: {type: String, required: true, ref: "User"},
        _id: String,
        friendShipStatus: {
            type: Number, default: 0
        }
    }],
    blackList: [
        {contactId: {type: String, required: true, ref: "User"}, _id: String}
    ],
    rating: {
        design: {type: Number, default: 0},
        performance: {type: Number, default: 0},
        usability: {type: Number, default: 0},
        average: {type: Number, default: 0},
        comment: {type: String, default: ""}
    },



    // Deprecados
    /*waitingNewPass: {
        type: Boolean,
        default: false
    },
    refresh_token: String,
    refresh_token_expires: Date,
    socketId: String,
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false,
        required: true
    },*/
}, {
    _id: false
});



module.exports = mongoose.model("User", userSchema);

