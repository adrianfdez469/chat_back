const  { body } = require('express-validator');

const descriptionValidator = body('description')
                .trim()
                .isString()
                .notEmpty({ignore_whitespace: true});



module.exports = [descriptionValidator];