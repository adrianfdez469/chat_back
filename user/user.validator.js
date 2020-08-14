const  { body } = require('express-validator');

const nombreValidator = body('firstName')
                .trim()
                .isString()
                .isLength({max:20, min:2});

const emailValidator = body('email')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                .normalizeEmail();

const passwordValidator = body('password')
                .isLength({min:8});

module.exports = [nombreValidator, emailValidator, passwordValidator];