const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');
const UserValidator = [nombreValidator, emailValidator, passwordValidator] = require('./user.validator');
const isAuthMiddlewareV2 = require('../middlewares/firebaseAuthMiddleware');

//router.post('/signup', UserValidator, UserController.signUp);
//router.post('/activate', UserController.activateUser);
//router.post('/forgot',emailValidator, UserController.forgotPassword);
//router.post('/resetpassword', UserController.resetPassword);
//router.post('/login', [emailValidator, passwordValidator],UserController.login);

//router.post('/loginWithToken', UserController.loginByToken);
//router.post('/refreshtoken', UserController.refreshToken);
//router.post('/logout', isAuthMiddlewareV2.isAuthMiddleware, UserController.refreshToken);


router.post('/searchFirends', isAuthMiddlewareV2.isAuthMiddleware, UserController.searchFirends); // V2
router.post('/getContactData', isAuthMiddlewareV2.isAuthMiddleware, UserController.getContactData);
router.post('/getFriendById', isAuthMiddlewareV2.isAuthMiddleware, UserController.getFriendById);
router.post('/searchContact', isAuthMiddlewareV2.isAuthMiddleware, UserController.searchContact);
router.post('/sendFriendRequest', isAuthMiddlewareV2.isAuthMiddleware, UserController.sendFriendRequest);
router.post('/acceptFriendRequest', isAuthMiddlewareV2.isAuthMiddleware, UserController.acceptFriendRequest);
router.post('/declineFriendRequest', isAuthMiddlewareV2.isAuthMiddleware, UserController.declineFriendRequest);
router.post('/deleteContact', isAuthMiddlewareV2.isAuthMiddleware, UserController.deleteContact);
router.post('/blockUser', isAuthMiddlewareV2.isAuthMiddleware, UserController.blockUser);

router.post('/changeUserLanguage', isAuthMiddlewareV2.isAuthMiddleware, UserController.changeUserLanguage);
//router.post('/changePassword', isAuthMiddlewareV2.isAuthMiddleware, UserController.changePassword);
router.post('/changeAvatar', isAuthMiddlewareV2.isAuthMiddleware, UserController.changeAvatar); // V2
router.post('/editprofile', isAuthMiddlewareV2.isAuthMiddleware, UserController.editprofile);

//router.post('/shareapp', isAuthMiddlewareV2.isAuthMiddleware, [nombreValidator, emailValidator], UserController.shareapp);
router.post('/getUserFeedback', isAuthMiddlewareV2.isAuthMiddleware, UserController.getUserFeedback);
router.post('/saveFeedback', isAuthMiddlewareV2.isAuthMiddleware, UserController.saveFeedback);

// -------------------------------------- CON AUTENTICACION DESDE FIREBASE ------------------------------------------ //
router.post('/getUserData', isAuthMiddlewareV2.isAuthMiddleware, UserController.getUserData); // V2


router.post('/', (req, resp, next) => {

    
    console.log("URL NOT MIGRATED");
    next(new Error('API-URL not ready yet for ' + req.path));
});

//router.get('/user',UserController.getConectedUsers);

module.exports = router;