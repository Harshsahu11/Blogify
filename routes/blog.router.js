const express = require("express");
const { handleBlog } = require("../controllers/blog.controller");
const upload = require("../services/storage");
const router = express.Router();


router.get('/add-new',(req,res)=>{
    return res.render("AddBlog",{
        user:req.user,
    });
})


router.post('/',upload.single("coverImage"),handleBlog);


module.exports = router;

