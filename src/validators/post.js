import Joi from "joi"


const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string().required()),
})
export default postSchema