const express = require('express');
const router = express.Router();
const infoController = require('../../controllers/info-controller')

router.all('/info',infoController.info)

module.exports = router