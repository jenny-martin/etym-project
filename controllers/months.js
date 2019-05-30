var Word = require('../models/word');

module.exports = {
    create
};

function create (req, res) {
    Word.findById(req.params.id, function(err, word) {
        word.months.push(req.body);
        word.save(function(err) {
            res.redirect(`/words/show`);
        });
    });
}