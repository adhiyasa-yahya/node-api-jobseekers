const mongoose = require("mongoose")
const userSchema = require("../schema/userSchema")
const Joi = require('joi');

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().min(5).max(500).required(),
        password: Joi.string().min(8).max(1024).required(),
    })
    return schema.validate(user)
}

exports.User = User;
exports.validate = validateUser;