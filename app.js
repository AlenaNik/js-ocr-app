const express = require('express');
const app =  express();
const fs = require("fs");
const multer = require('multer');
const { TesseractWorker } = require('tesseract.js');
const worker = new TesseractWorker();


//Storage

const storage = multer.diskStorage({
    destination: (req,res,callback) => {
        callback(null, "./uploads");
    },
    filename: (req,res,callback) => {
        callback(null, req.file);
    }
});

const upload = multer({storage: storage}).single('avatar');
app.set('view engine', "ejs");


const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
