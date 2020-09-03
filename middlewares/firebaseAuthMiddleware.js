var admin = require("firebase-admin");

//var serviceAccount = require("path/to/serviceAccountKey.json");
var serviceAccount = {
    "type": "service_account",
    "project_id": "shut-up-pro",
    "private_key_id": "102b571b47e0cea2cefbc26281da5b493e2946ed",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCji7ZyIG1SsacX\nGcxgLD1qzNUPV7tCEAmxgojoexvxCdru8KI7Flkf/TiCU45m+WhxiAX483qQIWcd\nJALaqwBrtCeCki+0Ou6AmLrBXIA9vlDomDWNv2Oen09XPyT/12uu/NUiJbLGaCkk\nB8Lo3PwCvYETzkkW+o7cJ4UqL/PQvvqZzhd3rwtsWZcNfVqve/qg0PwySlPrWpa+\ndQE+RH1Iud/JtXNAEQk2nGlBLeP6QBi5AAVyiXyMh1eEOU+YgdaEo9de92ed6wxK\n7tYPEYkwIBn0Ka1/Mari0zEWK80AJ3lWRLbSAtMw4skb1TPdPO0aayjAJgL1m6hh\nDpwgiPSXAgMBAAECggEAAhW3Tj5AsS9JdzoIobcAcBjglf1fikpitwaxFFLx4a+D\nstqD/85ikgaaPM/3M/rZSP9xBPAy+hzxHh77SeNvgEVRiy0f5XG4p4JZI5BU3Un3\nPkxDUZ5Eo2Q9nsupKaP8mODM5WrgDcVwJwuKumz8+Bqj49H3t3JGBCpylZL7I3ov\nchunxoedxHCgRTYYxUUkx/anSBiBAvgyiLH9BYK08Mxs2Odg1xd8D3tKIope1Q9O\nTQ1g93bwCXg3poZt42HELdKT6644Gxlaceg0lms+bGXsiMjevei7U2AP/CUTvRre\nTrQwtDucnH6hSMrfxjV949O7kCMwmTFsMqwvQbOvKQKBgQDNwtVJf8UX1OIzEZpc\nRMlv61EnI8f3j/Lv0nNg54eD8ur4kcb1vUH0F757+Tedlil87rw2Gwn/clG/5cG6\nR9//UyY9m1o9ARtnAYHVCaB+BqCjN2beuiJmnkUyE53m97pedlE0NZ8NzeS4XF9k\nqFIauzYnnCcr4D1a+RMGB/HO7QKBgQDLejJYhHE7T8djSOQOCLx3x676/m/FsJhA\n0ESmUH0ZfbOR3SCECkjspiF93O7xWIEIBKbQI4mVSYZiG5mJqR/QK15bI/VYgzy8\nbVm3zIhP4G22QZ/8h1LHNtEg9aGlw6taVVz/zv0zbaSxA6RZLI/0L2Jn5oOaQpxI\n0I9wv0TdEwKBgFzBwDTqDIe5yF8NSHDf8Y8qneLvFm5bzkCetrSwqz6oe5Si4vZU\n4y6OpahtqMy5rOpNFTuu5MrrVj8T7El1rV0EtvB+4CcwIJJG86h+NoOZqUDq8Mzn\nTCrGnpr8jOpaMwHyhJjss08dykXyHm7aEmlKjBc/Jcl5xS8FqbXGTxPhAoGAbWMj\n7bJFrT0WU6m78E+CAmK3Dvf53q0xLKbKQR7EIhARmTjnYhSlX5NwLdm4GscZltXp\nV7vDGx6Lv/JWeEsTbzXhY93Q5+SloianNMgf/9EHKhPdjkSxm6c8hhuG6zZlyApc\nFKmSNTOcdg0fLVFnkj5nCLRDy4pDumFku5gXzUECgYAOKEQY1epU4eH7yCDoMUcK\n5Oo05AOfNLe2/pT7273OVXmaLTmkSkpPWZD1df6jcOr3EnWpfHGUJQwU2N/5J/Z5\n+RMueBjd063u6WfFOuN7u3YsJj/OT6N2GWliHU166LJC2eb4zG7CeqsxIHcrIoSl\nmexlmIVw70XFLn8i3C+Xxw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-l7qxu@shut-up-pro.iam.gserviceaccount.com",
    "client_id": "112386174152473228098",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-l7qxu%40shut-up-pro.iam.gserviceaccount.com"
  }




/*process.env.NODE_ENV === 'production' 
    ? {

    } 
    : require(process.env.GOOGLE_APPLICATION_CREDENTIALS);*/
//console.log(serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shut-up-pro.firebaseio.com"
});


const getUserIdFromToken = async (idToken) => {
    
    if(!idToken){
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        error.message = 'Por favor inicie sesión.';
        throw error;
    }
    
    try {
        decodedToken = await (admin.auth()).verifyIdToken(idToken);
        // let uid = decodedToken.uid;
    } catch(err) {
        err.statusCode = 401;
        err.message = 'Ha ocurrido un error interno. Error en el token';
        throw err;
    }

    return decodedToken.uid;
    
}

exports.isAuthMiddleware = (req, resp, next) => {

    try{

        
        const idToken = req.get('Authorization');
        /*
        //const {idToken}= req.body;
        console.log(idToken);
        
        req.userId = await getUserIdFromToken(idToken);
        next();*/

        if(idToken){
            admin.auth().verifyIdToken(idToken)
                .then(() => {
                    next()
                }).catch((err) => {
                    console.log(err);
                    resp.status(403).send('Unauthorized')
                });
        }else{
            console.log('No authorization header');
            
        }


    } catch (err){
        next(err);
    }
}

