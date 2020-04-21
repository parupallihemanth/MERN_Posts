const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxlength : 64
    },

    description : {
        type: String,
        required : true,
        maxlength : 2000
    },

    author : {
        type : String,
        required : true,
        maxlength : 64
    },

    
}, { timestamps : true})


module.exports = mongoose.model('Posts', postSchema);