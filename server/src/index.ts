import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./config/db"

import dalleRoutes from "./dalle/dalle.routes"
import postRoutes from "./post/post.routes"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: "50mb" }))
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/dalle", dalleRoutes)

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E")
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () => console.log("Server has started on port 8080..."))
  } catch(err) {
    console.log("Error happened when starting the server: ", err)
  }
}

startServer()