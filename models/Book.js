// defining the schema
const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    pages:{
        type:String,
        required:true
    },
    publishedDate:{
        type:Date,
        default:Date.now
    },
    
})


module.exports = mongoose.model('books',bookSchema)

