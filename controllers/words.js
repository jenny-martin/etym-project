var Word = require('../models/word');

module.exports = { 
    index,   
    new: newWord,
    create,
}

function create(req, res) {
    var word = new Word(req.body);
    word.save(function(err) {
      if (err) return res.redirect('./words/index');
      res.redirect(`/words/${word._id}`);
    });
  }

function newWord(req, res) {
    res.render('./words/new', { title: 'Add A New Word to Your List' });
    res.redirect('./words')
  }

function index(req, res) {
    Word.find({}, function(err, words) {
        res.render('./words', {
            title: 'All Words', words
        });
    });
}