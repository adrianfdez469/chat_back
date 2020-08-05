const UserModel = require('../models/user');

exports.Login = async (req, resp, next) => {
    try{
        const nickname = req.body.nickname;
        const socketId = req.body.socketId;
        const user = new UserModel({nickname: nickname, socketId: socketId});
        await user.save();
        
        resp.status(200).json({
            _id: user._id
        });
    }catch(err){
        console.log(Error);
        console.log(err);
        next(err);
    }
    
}

exports.bindSocketIdToUser = async (userId, socketId) => {
    const user = await UserModel.findById(userId);
    user.socketId = socketId;
    await user.save();
    return true;
}

exports.LogoutDb = async (_id) => {
    
    const exists = await UserModel.exists({_id}); 
    if(exists)
        await UserModel.deleteOne({_id});
    return true;
    
} 