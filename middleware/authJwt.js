const jwt = require('jsonwebtoken')
const config = require('../config')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res.status(401).send({
            message: "Unauthorized!"
        });
    }

    jwt.verify(token, config.JWT_KEY, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = { authenticateToken }