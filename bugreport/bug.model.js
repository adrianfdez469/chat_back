const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bugSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
    state: {type: Number, default: 0} // 0-> Reportado 10->Resuelto
});

module.exports = mongoose.model("Bug", bugSchema);