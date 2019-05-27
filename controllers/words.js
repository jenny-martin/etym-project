var Word = require('../models/word');


module.exports = {
    index
};

function index(req, res) {
      res.render('/index', words);
    };
