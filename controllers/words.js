var Word = require('../models/word');

module.exports = {
  index,
  new: newWord,
  create,
  show
}

function show(req, res) {
  Word.find({}, function(err, words) {
    res.render('words/show', { title: 'Your List of Words', words });
  });
}
  

function create(req, res) {
  Word.findById(req.params.id, function (err, word) {
      res.redirect(`/words/show`);
      console.log(word);
    });
}


function newWord(req, res) {
  res.render('words/new', { title: 'Add A New Word to Your List' });
}

function index(req, res) {
  Word.find({}, function (err, words) {
    res.render('words/index', {
      title: "Today's Word:", words
    });
  });
}