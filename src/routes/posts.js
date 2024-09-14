import { Router } from "express";
import {
    addPostController,
    deletePostController,
    getAllPostsController,
    getPostController,
    updatePostController
} from "../controllers/index.js";

const router = Router()


router.get("/", getAllPostsController)
router.post("/", addPostController)
router.get("/:id", getPostController)
router.put("/:id", updatePostController)
router.delete('/:id', deletePostController)

export default router