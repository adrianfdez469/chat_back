const express = require('express');
const router = express.Router();
const MessageController = require('./message.controller');
const isAuthMiddlewareV2 = require('../middlewares/firebaseAuthMiddleware');

//router.post('/getAllMessages', isAuthMiddleware.isAuthMiddleware, MessageController.getMessages);
router.post('/getMessagesByContact', isAuthMiddlewareV2.isAuthMiddleware, MessageController.getMessagesByContact);

module.exports = router;