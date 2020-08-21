const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    datetime: {type: Date, required: true, default: new Date()},
    readed: {type: Boolean, default: false},
    content: {type: String},
    userOrigin: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userDestiny: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model("Message", messageSchema);
       
       