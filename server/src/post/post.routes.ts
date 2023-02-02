import express from "express"
import { createPost } from "./post.controllers"

const router = express.Router()

router.post("/", createPost)

export default router