import Post from "../models/post.js"
import postSchema from "../validators/post.js"

export default async function(req, res) {
    const data = req.body
    const err = postSchema.validate(req.body).error
    if(err) {
        res.status(404).json({message: err.message})
        return
    }
    const result = await Post.create(data)
    res.status(201).json(result)
}