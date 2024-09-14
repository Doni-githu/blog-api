import express from "express"
import posts from "./routes/posts.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/posts", posts)


const startApp = () => {
    const port = process.env.PORT || 8000
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(`MongoDB did't connect 'cause ${err}`))
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`)
    })
}

startApp()