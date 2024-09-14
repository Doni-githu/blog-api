import Post from "../models/post.js"

export default async function(req, res) {
    const {category, content, title, tags} = req.body
    const oldPost = await Post.findById(req.params.id)
    if(!oldPost){
        return res.status(404).json({message: "Your blog was not found"})
    }

    const post = {
        category: category ? category : oldPost.category,
        content: content ? content : oldPost.content,
        title: title ? title : oldPost.title,
        tags: tags ? tags : oldPost.tags 
    }

    const result = await Post.findByIdAndUpdate(req.params.id, post, {new: true})
    res.status(200).json(result)
}