const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');
const UserValidator = [nombreValidator, emailValidator, passwordValidator] = require('./user.validator');
const isAuthMiddleware = require('../middlewares/isAuth');
const isAuthMiddlewareV2 = require('../middlewares/firebaseAuthMiddleware');

router.post('/test', isAuthMiddlewareV2.isAuthMiddleware, (req, resp, next) => {

    try {
        
        const {userId} = req;
        const {name} = req.body;

        console.log('Todo bien');
        console.log(userId);
        console.log(name);
        

    } catch (error) {
        console.log(err);
        next(err);
    }
});

router.post('/signup', UserValidator, UserController.signUp);
router.post('/activate', UserController.activateUser);
router.post('/forgot',emailValidator, UserController.forgotPassword);
router.post('/resetpassword', UserController.resetPassword);
router.post('/login', [emailValidator, passwordValidator],UserController.login);
router.post('/loginWithToken', UserController.loginByToken);
router.post('/refreshtoken', UserController.refreshToken);
router.post('/logout', isAuthMiddleware.isAuthMiddleware, UserController.refreshToken);


router.post('/searchFirends', isAuthMiddleware.isAuthMiddleware, UserController.searchFirends);
router.post('/getContactData', isAuthMiddleware.isAuthMiddleware, UserController.getContactData);
router.post('/getFriendById', isAuthMiddleware.isAuthMiddleware, UserController.getFriendById);
router.post('/searchContact', isAuthMiddleware.isAuthMiddleware, UserController.searchContact);
router.post('/sendFriendRequest', isAuthMiddleware.isAuthMiddleware, UserController.sendFriendRequest);
router.post('/acceptFriendRequest', isAuthMiddleware.isAuthMiddleware, UserController.acceptFriendRequest);
router.post('/declineFriendRequest', isAuthMiddleware.isAuthMiddleware, UserController.declineFriendRequest);
router.post('/deleteContact', isAuthMiddleware.isAuthMiddleware, UserController.deleteContact);
router.post('/blockUser', isAuthMiddleware.isAuthMiddleware, UserController.blockUser);

router.post('/changeUserLanguage', isAuthMiddleware.isAuthMiddleware, UserController.changeUserLanguage);
router.post('/changePassword', isAuthMiddleware.isAuthMiddleware, UserController.changePassword);
router.post('/changeAvatar', isAuthMiddleware.isAuthMiddleware, UserController.changeAvatar);
router.post('/editprofile', isAuthMiddleware.isAuthMiddleware, [nombreValidator, emailValidator], UserController.editprofile);

router.post('/shareapp', isAuthMiddleware.isAuthMiddleware, [nombreValidator, emailValidator], UserController.shareapp);
router.post('/getUserFeedback', isAuthMiddleware.isAuthMiddleware, UserController.getUserFeedback);
router.post('/saveFeedback', isAuthMiddleware.isAuthMiddleware, UserController.saveFeedback);



//router.get('/user',UserController.getConectedUsers);

module.exports = router;