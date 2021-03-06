const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    datetime: {type: Date, required: true},
    readed: {type: Boolean, default: false},
    content: {type: String},
    userOrigin: {type: String, ref: 'User', required: true},
    userDestiny: {type: String, ref: 'User', required: true}
});

module.exports = mongoose.model("Message", messageSchema);
       
       