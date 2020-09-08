const express = require('express');
const router = express.Router();
const BugController = require('./bug.controller');
const BugValidator = require('./bug.validator');
const isAuthMiddleware = require('../middlewares/firebaseAuthMiddleware');

router.post('/saveBugReport', isAuthMiddleware.isAuthMiddleware, BugValidator, BugController.saveBugReport);

module.exports = router;