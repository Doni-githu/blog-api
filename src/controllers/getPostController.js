import Post from "../models/post.js"

export default async function(req, res) {
    const id = req.params.id
    const post = await Post.findById(id).lean()
    res.status(200).json(post)
}
