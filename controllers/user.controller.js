const { User, validate } = require('../models/userModel');
const _ = require('lodash');
const bcrypt = require('bcrypt');

async function register(req, res) {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        const salt = await bcrypt.genSalt(10);
        user = new User(_.pick(req.body, ['name', 'email', 'password']));
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        return res.status(200).json(_.pick(user, ['name', 'email']));
    }
}

module.exports = { register }