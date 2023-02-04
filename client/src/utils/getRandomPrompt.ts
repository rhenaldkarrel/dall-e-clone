import { surpriseMePrompts } from "../constants/surpriseMePrompts"

export function getRandomPrompt(prompt: TPostData["prompt"]): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  if (randomPrompt === prompt) return getRandomPrompt(prompt)

  return randomPrompt
}