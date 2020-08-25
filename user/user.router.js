const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');
const UserValidator = [nombreValidator, emailValidator, passwordValidator] = require('./user.validator');
const isAuthMiddleware = require('../middlewares/isAuth');

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



//router.get('/user',UserController.getConectedUsers);

module.exports = router;