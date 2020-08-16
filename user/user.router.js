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
router.post('/logout', isAuthMiddleware.isAuth, UserController.refreshToken);


router.post('/searchFirends', isAuthMiddleware.isAuth, UserController.searchFirends);
router.post('/searchContact', isAuthMiddleware.isAuth, UserController.searchContact);
router.post('/sendFriendRequest', isAuthMiddleware.isAuth, UserController.sendFriendRequest);
router.post('/acceptFriendRequest', isAuthMiddleware.isAuth, UserController.acceptFriendRequest);
router.post('/declineFriendRequest', isAuthMiddleware.isAuth, UserController.declineFriendRequest);
router.post('/blockUser', isAuthMiddleware.isAuth, UserController.blockUser);
router.post('/deleteContact', isAuthMiddleware.isAuth, UserController.deleteContact);



//router.get('/user',UserController.getConectedUsers);

module.exports = router;