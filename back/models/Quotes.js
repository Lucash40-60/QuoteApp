const mongoose = require('mongoose'); 

//Schema => régles de stockages dans la bdd
// Pas d'id, mongo le fait automatqiuement
const QuoteSchema = new mongoose.Schema({
    // content: {
    //     type: String, 
    //     required: true
    // }
    content: String, 
    author: String
}); 

module.exports = mongoose.model('Quote', QuoteSchema); 