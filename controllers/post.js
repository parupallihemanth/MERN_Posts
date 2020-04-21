const Posts = require('../modals/post');


exports.getAllPosts = async( req, res) =>{
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    await Posts.find()
    .sort([[ sortBy, "desc"]])
    .exec( (err, posts) => {
        
        if(err){
            return res.status(400).json({
                error : "No posts found"
            })
        }
        
        return res.status(200).json(posts)

    })
    

}

exports.getPostById = async( req, res) =>{
    await Posts.findById( req. params.id).exec( (err, post) =>{
        if(err){
            return res.status(400).json({
                error : "No post found"
            })
        }
        return res.status(200).json(post)
    })
}

exports.createAPost = async( req, res) =>{
    
    await Posts.create( req.body ,(err, post) =>{
        if(err){
            // console.log(err)
            return res.status(400).json({
                error : "unable to create post"
            })
        }
        return res.status(200).json(post)
    })
}