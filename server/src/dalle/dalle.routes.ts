import express from "express"
import * as dotenv from "dotenv"
import { generateImage } from "./dalle.controllers"

dotenv.config()

const router = express.Router()

router.post("/", generateImage)

export default router