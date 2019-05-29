var express = require('express');
var router = express.Router();
var wordsCtrl = require('../controllers/words');


router.get('/', wordsCtrl.index); 
router.get('/new', wordsCtrl.new);
router.post('/', wordsCtrl.create);

module.exports = router;


