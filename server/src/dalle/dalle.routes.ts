import express from "express"
import { generateImage } from "./dalle.controllers"

const router = express.Router()

router.post("/", generateImage)

export default router