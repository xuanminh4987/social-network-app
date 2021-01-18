const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/'
mongoose.connect(url + 'SNE-NewGen', {useNewUrlParser: true, useUnifiedTopology: true})

module.exports.Posts = mongoose.model('posts', {
    author: String,
    content: String,
    time: String,
    reaction: {
        like: Number,
        haha: Number,
        cry: Number,
        love: Number
    }
})