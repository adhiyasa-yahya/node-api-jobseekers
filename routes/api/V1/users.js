const express = require('express');
const { register } = require("../../../controllers/user.controller");
const router = express.Router();

router.get('/', async function(req, res) {
  res.send("hello iam under the water, please help me!!")
});

router.post('/register', register)

module.exports = router;
