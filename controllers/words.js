var Word = require('../models/word');

module.exports = { 
    index,   
    new: newWord,
    create,
    show
}

function show(req, res) {
  Word.findById(req.params.id, function(err, word) {
    res.render('./words/show', { title: 'Your Word List', word });
  });
}

function create(req, res) {
    var word = new Word(req.body);
    word.save(function(err) {
      if (err) return res.redirect('./words');
      res.render('./words/show');
    });
  }

function newWord(req, res) {
    res.render('./words/show/new', { title: 'Add A New Word to Your List', words });
  }

function index(req, res) {
    Word.find({}, function(err, words) {
        res.render('./words/index', {
            title: "Today's Word:", words
        });
    });
}