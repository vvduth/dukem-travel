import { FINAL_PROMPT, SYSTEM_PROMPT } from "@/constants/prompts";
import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";



export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: NextRequest) {
  const { messages, isFinal } = await request.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      response_format: {
        type: "json_object",
      },
      messages: [{ role: "system", content: isFinal ? FINAL_PROMPT : SYSTEM_PROMPT }, ...messages],
    });
    console.log("completion", completion.choices[0].message);
    const message = completion.choices[0].message;
    return NextResponse.json(JSON.parse(message.content ?? ""));
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
