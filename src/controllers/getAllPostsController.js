import Post from "../models/post.js";
import { filterPosts } from "../utils/index.js";

export default async function (req, res) {
    const posts = await Post.find().lean() 
    if(req.query.term){
        const term = req.query.term
        const filteredPosts = filterPosts(posts, term)
        return res.status(200).json(filteredPosts) 
    }
    res.status(200).json(posts)
}