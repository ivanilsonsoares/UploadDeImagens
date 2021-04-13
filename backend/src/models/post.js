const mongoose = require('mongoose')

const PostShema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt:{
        type: Date,
        default: Date.now
    }
},{
    toJSON:{
        virtuals: true,
    }
});

PostShema.virtual('url_imagem').get(function(){
    return `http://localhost:3000/files/${this.key}`
})

module.exports = mongoose.model("Post",PostShema);