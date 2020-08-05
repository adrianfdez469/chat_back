const express = require('express');

const LoginController = require('./login.controller');

const router = express.Router();

router.use('/', LoginController.Login);

module.exports = router;