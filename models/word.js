var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var wordSchema = new mongoose.Schema({
    todaysWord: {
        type: String,
    }, 
    origin: String,
});

// var userWordSchema = new Schema({
//     userMeaning: {
//         type: String,
//     },
//     postiveAssoc: {
//         type: Boolean,
//     },
//     negAssoc: {
//         type: Boolean,
//     },
//     month: {
//         type: Date,
//     },
//     timestamps: true
// });



module.exports = mongoose.model('Word', wordSchema);