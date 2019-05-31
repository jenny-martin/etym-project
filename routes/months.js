var express = require('express');
var router = express.Router();
var monthsCtrl = require('../controllers/months')

router.post('/words/show', monthsCtrl.create);

module.exports = router;