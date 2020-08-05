
const UserModel = require('../models/user');


exports.getConectedUsers = async (req, resp, next) => {
    const users = await UserModel.find({})
    resp.status(200).json({data: users});
}

