const { Posts } = require('../models/posts.model')

module.exports.getPosts = (req, res) => {
    Posts.find({}, (err, result) => {
        return res.json({posts: result})
    })
}

module.exports.postPost = (req, res) => {
    const {...postInfo} = req.body
    const post = new Posts(postInfo)
    post.save((err, result) => {
        if(err) throw err
        else{
            return res.json({status: 200})
        }
    })
}