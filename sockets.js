let io;
const getUserIdFromToken = require('./middlewares/firebaseAuthMiddleware').getUserIdFromToken;


const messageService = require('./message/message.service');

const validateSocketEvent = async (token, senderId) => {
    try {

        const userIdToken = await getUserIdFromToken(token);
        if(userIdToken !== senderId){
            throw Error(`El idusuario del token (${userIdToken}) no coincide con el que se recive por parametros (${senderId})`);
        }else{
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

const disconnected = [];

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer);
        io.on('connection', socket => {

            socket.on('new user', (params) => {

                socket.userId = params.userId;
                socket.broadcast.emit('new user', {...params, socketId: socket.id});
                const index = disconnected.findIndex(id => id === socket.id);
                if(index >= 0) disconnected.splice(index, 1);


                io.clients((error, clients) => {
                    if(error) throw error;
                    const dataClients = clients
                        .filter(client => client !== socket.id)
                        .filter(client => {
                            const idx = disconnected.findIndex(id => id === client);
                            if(idx >= 0) return false;
                            return true;
                        })
                        .map(client => {
                            const {userId: userId, id:socketId} = io.of('/').connected[client]
                            return {userId, socketId};
                        });
                    io.to(socket.id).emit('new user', dataClients);
                })
            });
            
            socket.on('disconnect', async (params) => {
                socket.broadcast.emit('user disconnect', {socketId: socket.id});
                const index = disconnected.findIndex(id => id === socket.id);
                if(index >= 0)
                    disconnected.splice(index, 1);
            });
            socket.on('logout', async (params) => {
                socket.broadcast.emit('user disconnect', {socketId: socket.id});
                disconnected.push(socket.id);
            });
            

            socket.on('request friendship',async ({userIdRequester, userIdRequested, token}) => {
                
                const isValid = await validateSocketEvent(token, userIdRequester);
                
                if(isValid){
                    socket.broadcast.emit('requested friendship', {userIdRequester, userIdRequested, socketIdRequester: socket.id});     
                    
                    
                    io.clients((error, clients) => {
                        if(error) throw error;
                        const dataClients = clients
                            .filter(client => client !== socket.id)
                            .map(client => {
                                const {userId: userId, id:socketId} = io.of('/').connected[client]
                                return {userId, socketId};
                            });
                        io.to(socket.id).emit('new user', dataClients);
                    });
                }

            });

            socket.on('decline friendship', ({declinerId, declinedId, socketIdDeclined, token}) => {
                const isValid = validateSocketEvent(token, declinerId);
                if(isValid){
                    io.to(socketIdDeclined).emit('declined friendship', {declinerId, declinedId, socketIdDecliner: socket.id, socketIdDeclined});                
                }
            });
            
            socket.on('accept friendship', ({accepterId, requesterId, socketIdRequester, token}) => {
                const isValid = validateSocketEvent(token, accepterId);
                if(isValid){
                    io.to(socketIdRequester).emit('accepted friendship', {accepterId, socketIdAccepter: socket.id});
                }
            });

            socket.on('delete contact', ({deleterId, socketIdDeleted, token}) => {
                const isValid = validateSocketEvent(token, deleterId);
                if(isValid){
                    io.to(socketIdDeleted).emit('deleted contact', {deleterId, socketIdDeleter: socket.id});
                }
            });

            socket.on('block contact', ({blokerId, socketIdBloked, token}) => {
                const isValid = validateSocketEvent(token, blokerId);
                if(isValid){
                    io.to(socketIdBloked).emit('blocked contact', {blokerId, socketIdBloked: socket.id});
                }
            });

             socket.on('send message', async ({content, userOriginId, userDestinyId, toSocketId,token, consecutive}) => {
                const message = await messageService.sendMessage(content, userOriginId, userDestinyId, token);
                if(message){
                    io.to(toSocketId).emit('recived message',{
                        content: content, 
                        userOriginId: userOriginId,
                        socketIdSender: socket.id,
                        messageId: message._id,
                        datetime: message.datetime
                    });  

                    io.to(socket.id).emit('saved message', {
                        contactId: userDestinyId,
                        soketIdContact: socket.id,
                        messageId: message._id,
                        datetime: message.datetime,
                        consecutive: consecutive
                    });
                }
            });

            socket.on('read messages', async ({userId, contactId, notifyTo, token}) => {
                const isValid = await messageService.markMessageAsReaded(userId, contactId, token);
                if(isValid){
                    
                    io.to(notifyTo).emit('readed messages', {
                        contactId: userId
                    });
                }
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



