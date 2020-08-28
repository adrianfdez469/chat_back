const {validationResult} = require('express-validator');
const BugModel = require('./bug,model');
const UserModel = require('../user/user.model');
const helper = require('../helpers/helpers');

exports.saveBugReport = async (req, resp, next) => {
    try {

        const errors = validationResult(req);
        helper.checkValidationResults(errors);

        const {userId} = req;
        const {description} = req.params;

        const user = await UserModel.findById(userId);
        if(!user){
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        const bugReport = new BugModel({
            userId: userId,
            description: description,
            datetime: new Date(),
            state: 0
        });

        await bugReport.save();

        resp.status(200).json({});

    } catch (error) {
        next(error);
    }
}