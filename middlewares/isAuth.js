const jwt = require('jsonwebtoken');
const config = require('config');


const getUserIdFromToken = bearerToken => {
    let decodedToken;

    const token = bearerToken.split(' ')[1];
    if(!token){
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        error.message = 'Por favor inicie sesión.';
        throw error;
    }

    try {
        decodedToken = jwt.verify(token, config.get('jwtSecret'));
    } catch(err) {
        err.statusCode = 401;
        err.message = 'Ha ocurrido un error interno';
        throw err;
    }

    if(!decodedToken){
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        throw error;
    }

    return decodedToken.userId
}
exports.getUserIdFromToken = getUserIdFromToken;
exports.isAuthMiddleware = (req, resp, next) => {
    try{

        const authHeader = req.get('Authorization');

        req.userId = getUserIdFromToken(authHeader);
        
        next();
    } catch (err){
        next(err);
    }
}
