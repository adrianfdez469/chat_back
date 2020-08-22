const express = require('express');
const router = express.Router();
const MessageController = require('./message.controller');
const isAuthMiddleware = require('../middlewares/isAuth');

//router.post('/getAllMessages', isAuthMiddleware.isAuthMiddleware, MessageController.getMessages);
router.post('/getMessagesByContact', isAuthMiddleware.isAuthMiddleware, MessageController.getMessagesByContact);

module.exports = router;