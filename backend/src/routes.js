const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

const PostModel = require('./models/post')

routes.post("/post", multer(multerConfig).single('file'), async (req,res) =>{
    const { originalname: name, size, filename:key, location: url = ""} = req.file;
    const post = await PostModel.create({
        name,
        size,
        key,
        url,
    });
    return res.send(post);
});


module.exports = routes;