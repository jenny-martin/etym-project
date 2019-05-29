var mongoose = require('mongoose');

var monthSchema = new mongoose.Schema({
    month: {
        type: String,
        enum: ['Jan', 'Feb', 'Mar']
    }
})

var wordSchema = new mongoose.Schema({
    todaysWord: {
        type: String,
        enum: ['Word1', 'Word2', 'Word3']
    },
    origin: {
        type: String,
    },
    userMeaning: {
        type: String,
    },
    posOrNegAssoc: {
        type: Boolean,
    },
    month: [monthSchema]
});

module.exports = mongoose.model('Word', wordSchema);