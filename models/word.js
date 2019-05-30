var mongoose = require('mongoose');

var monthSchema = new mongoose.Schema({
    monthOfYear: {
        type: String,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
})

var wordSchema = new mongoose.Schema({
    words: {
        type: String,
        enum: ['government', 'career', 'degree', 'avocado', 'mortgage', 'university', 'cache', 'robot', 'yule', 'careful']
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
    months: [monthSchema]
});



module.exports = mongoose.model('Word', wordSchema);