const express = require('express');
const authJwt = require("../../../middleware/authJwt");
const {  getJobPost, getOne } = require('../../../controllers/job.controller');
const router = express.Router();

router.post("/all", getJobPost)
router.get("/detail/:id", getOne)

module.exports = router;
