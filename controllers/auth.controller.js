const { User } = require('../models/userModel');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('../config')
const Joi = require('joi');
const jwt = require('jsonwebtoken')

async function login(req, res) {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Sorry, Your email was not found in our system.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }

    const accessToken = generateAccessToken(user)
    return res.json({
        token:accessToken,
        user: user
    });
}

function logout(req, res) {
    return res.send('logout sukses!');
}

function generateAccessToken(user) {
    return jwt.sign(user.toJSON(), config.JWT_KEY, { expiresIn: `${config.JWT_EXPIRED}s` })
}

function validate(req) {
    const schema = Joi.object().keys({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(req);
}

module.exports = { login, logout }