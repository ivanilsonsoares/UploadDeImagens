const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

routes.post("/post", multer(multerConfig).single('file'), (req,res) =>{
    console.log(req.file);
    return res.send({hello : "Wold"});
});

module.exports = routes;