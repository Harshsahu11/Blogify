const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverImage:{
        type:String
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required:true
    },
},{timestamps:true});


const Blog = new mongoose.model("blog",blogSchema);

module.exports = Blog;