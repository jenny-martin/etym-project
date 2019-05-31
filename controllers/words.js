var Word = require('../models/word');

module.exports = {
  index,
  new: newWord,
  create,
  show
}

function show(req, res) {
  Word.find({}, function (err, words) {
    res.render('words/show', { title: 'Your List of Words', words });
  });
}


function create(req, res) {
  var word = new Word(req.body);
  word.save();
  req.body.posOrNegAssoc = !!req.body.posOrNegAssoc;
  req.body.months = req.body.months.replace();
  
  console.log(word);
  res.redirect('/words/show');
};


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