
const admin = require('../firebase.admin');

const getUserFromToken = async (idToken) => {
    
    if(!idToken){
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        error.message = 'Por favor inicie sesión.';
        throw error;
    }
    let decodedToken;
    try {
        decodedToken = await (admin.auth()).verifyIdToken(idToken);
        //console.log(decodedToken);

        // let uid = decodedToken.uid;
    } catch(err) {
        err.statusCode = 401;
        if(err.code === 'auth/id-token-expired'){
            err.message = "Token expired";    
            throw err;
        }
        err.message = 'Ha ocurrido un error interno. Error en el token';
        throw err;
    }

    return decodedToken;
    
}

exports.getUserIdFromToken = async token => {
   const firebaseUser = await getUserFromToken(token);
   return firebaseUser.user_id;
}

exports.isAuthMiddleware = async (req, resp, next) => {
    try{
        const idToken = req.get('Authorization');
        req.firebaseUser = await getUserFromToken(idToken);
        next();
    } catch (err){
        next(err);
    }
}

