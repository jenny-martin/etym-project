
var express = require('express');
var router = express.Router();
var wordsCtrl = require('../controllers/words')

/* GET users */
router.get('/', wordsCtrl.index);



module.exports = router;
