import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: Schema.Types.Array, required: true },
}, { timestamps: true })

const Post = model("Post", PostSchema)
export default Post