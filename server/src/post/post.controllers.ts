import * as dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary"

import Post from "./post.model"
import { Request, Response } from "express"

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function createPost(req: Request, res: Response) {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.prompt ||
    !req.body.photo
  ) {
    return res.status(400).json({
      success: false,
      message: "Please enter the form correctly!",
    })
  }

  try {
    const {
      name,
      prompt,
      photo,
    } = req.body

    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    })

    res.status(201).json({ 
      success: true,
      data: newPost,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    })
  }
}

export async function getAllPosts(req: Request, res: Response) {
  try {
    const posts = await Post.find({})

    res.status(200).json({
      success: true,
      data: posts,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    })
  }
}