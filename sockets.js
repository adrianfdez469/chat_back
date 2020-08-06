let io;
const LoginController = require('./login/login.controller');
module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer);
        io.on('connection', socket => {

            socket.on('new user', (params) => {
                
                socket.nickname = params.nickname;
                socket.broadcast.emit('new user', {...params, socketId: socket.id});
                
                io.clients((error, clients) => {
                    if(error) throw error;
                    const dataClients = clients
                        .map(client => {
                            const {nickname: nick, id:socketId} = io.of('/').connected[client]
                            return {nick, socketId};
                        });
                    io.to(socket.id).emit('new user', dataClients);
                })
            });

            socket.on('message', ({from, toUserId, toSocketId, msg}) => {
                io.to(toSocketId).emit('message',{msg, socketId: socket.id});
                
            });

            socket.on('disconnect', async ({_id}) => {
                
                //await LoginController.LogoutDb(socket._id);
                socket.broadcast.emit('user disconnect', {socketId: socket.id});
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



