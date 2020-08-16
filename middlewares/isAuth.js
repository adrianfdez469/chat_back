const jwt = require('jsonwebtoken');
const config = require('config');

exports.isAuth = (req, resp, next) => {
    try{

        const authHeader = req.get('Authorization');
    
        const token = authHeader.split(' ')[1];
        if(!token){
            const error = new Error('Not authenticated!');
            error.statusCode = 401;
            error.message = 'Por favor inicie sesión.';
            throw error;
        }
        
        let decodedToken;
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
        
        req.userId = decodedToken.userId;
        
        next();
    } catch (err){
        next(err);
    }
}
