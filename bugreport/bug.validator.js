const  { body, param } = require('express-validator');

const descriptionValidator = body('description')
                //.trim()
                //.isString()
                .notEmpty();



module.exports = [descriptionValidator];