const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/'
mongoose.connect(url + 'SNE-NewGen', {useNewUrlParser: true, useUnifiedTopology: true})

module.exports.Users = mongoose.model('users', {
    fname: String,
    lname: String,
    email: String,
    password: String,
    birthDay: String,
    gender: String,
    avatar: String
})