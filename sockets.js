let io;
const LoginController = require('./login/login.controller');
module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer);
        io.on('connection', socket => {
            socket.on('new user', (params) => {
                socket._id = params._id;
                LoginController.bindSocketIdToUser(params._id, socket.id);
                socket.broadcast.emit('new user', {...params, socketId: socket.id});
            });

            socket.on('message', ({from, toUserId, toSocketId, msg}) => {
                // las 2 variantes funcionana
                //socketAll[toUserId].emit('message');
                io.to(toSocketId).emit('message',{msg, _id: socket._id});
                
            });

            socket.on('disconnect', async ({_id}) => {
                
                await LoginController.LogoutDb(socket._id);
                socket.broadcast.emit('user disconnect', {_id: socket._id});
                //delete socketAll[socket.id];
            });
        });
        
        return io;
    },
    getIO: () => {
        if(!io){
            throw new Error('Socket.io not initialized!');
        }
        return io;
    }
}



