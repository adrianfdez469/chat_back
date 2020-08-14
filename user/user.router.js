const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');
const UserValidator = [nombreValidator, emailValidator, passwordValidator] = require('./user.validator');

router.post('/signup', UserValidator, UserController.signUp);
router.post('/activate', UserController.activateUser);
router.post('/forgot',emailValidator, UserController.forgotPassword);
router.post('/resetpassword', UserController.resetPassword);
router.post('/login', [emailValidator, passwordValidator],UserController.login);
//router.get('/user',UserController.getConectedUsers);

module.exports = router;