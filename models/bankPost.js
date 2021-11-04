const mongoose = require('mongoose');



// SCHEMA
const Schema = mongoose.Schema;
const BankPostSchema = new Schema({
    name: String,
    date: {
        type: String,
        default: Date.now()
    }
}); 

// Model 
const BankPost = mongoose.model('BankPost', BankPostSchema);

module.exports = BankPost;