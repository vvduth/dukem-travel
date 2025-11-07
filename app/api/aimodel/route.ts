import { FINAL_PROMPT, SYSTEM_PROMPT } from "@/constants/prompts";
import { NextRequest, NextResponse } from "next/server";
import { aj } from "@/lib/arcjet"
import { auth, currentUser } from "@clerk/nextjs/server";
import { openai } from "@/lib/openai";
import { AxiosError } from "axios";


export async function POST(request: NextRequest) {
  const { messages, isFinal } = await request.json();
  const user = await currentUser();
  const {has} = await auth()

  // testing, assume all have premium access
  const hasPremiumAccess = has({plan: "monthly"}) || has({plan: "free_user"})
  
  const decision = await aj.protect(request, {
    userId: user?.primaryEmailAddress?.emailAddress ?? "",
    requested: isFinal ? 5 : 1,
  }); // Deduct 5 tokens from the bucket

  //@ts-ignore
  if (decision?.reason?.remaining == 0 && !hasPremiumAccess) {
    return NextResponse.json(
      { error: "You have reached your daily limit. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini",
      response_format: {
        type: "json_object",
      },
      messages: [
        { role: "system", content: isFinal ? FINAL_PROMPT : SYSTEM_PROMPT },
        ...messages,
      ],
    });
    //console.log("completion", completion.choices[0].message);
    const message = completion.choices[0].message;
    return NextResponse.json(JSON.parse(message.content ?? ""));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Axios error response:", error.response?.data);
    }
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
