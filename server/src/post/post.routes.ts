import express from "express"
import { createPost, getAllPosts } from "./post.controllers"

const router = express.Router()

router.post("/", createPost)
router.get("/", getAllPosts)

export default router