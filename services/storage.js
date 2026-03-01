const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    const uploadPath = path.resolve(`./public/uploads/`);
    cb(null, uploadPath);
  },

  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName); 
  },
});

const upload = multer({ storage });

module.exports = upload;