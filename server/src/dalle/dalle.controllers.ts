import { Request, Response } from "express"
import { Configuration, OpenAIApi } from "openai"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function generateImage(res: Response, req: Request) {
  try {
    const { prompt } = req.body

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    })

    const image = aiResponse.data.data[0].b64_json

    res.status(200).json({ photo: image })
  } catch (err: any) {
    console.log("Error while generating image: ", err)
    
    res.status(500).send(err?.response.data.error.message)
  }
}