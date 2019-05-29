var express = require('express');
var router = express.Router();
var wordsCtrl = require('../controllers/words');


router.get('/list', wordsCtrl.index); 



module.exports = router;