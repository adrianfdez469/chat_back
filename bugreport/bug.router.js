const express = require('express');
const router = express.Router();
const BugController = require('./bugg.controller');
const BugValidator = [descriptionValidator] = require('./bug.validator');
const isAuthMiddleware = require('../middlewares/isAuth');

router.post('/saveBugReport', isAuthMiddleware.isAuthMiddleware, BugValidator, BugController.saveBugReport);

module.exports = router;