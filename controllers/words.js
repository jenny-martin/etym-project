var Word = require('../models/word');

module.exports = { 
    index,   
}

function index(req, res) {
    Word.find({}, function(err, words) {
        res.render('./words/list', {
            title: 'All Words', words
        });
    });
}