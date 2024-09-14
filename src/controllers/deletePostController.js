import Post from "../models/post.js";

export default async function (req, res) {
    try {
        await Post.findByIdAndDelete(req.params.id, {new: true})
        res.status(204).json({message: "blog was successfully deleted"})
    } catch (error) {
        res.status(404).json({message: "Your blog was not found"})
    }
}