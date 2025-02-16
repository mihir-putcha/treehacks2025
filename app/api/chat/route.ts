import { getWellnessServiceResponse } from "@/lib/wellness-service"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        {
          error: "Invalid request format",
          details: "Messages array is required",
        },
        { status: 400 },
      )
    }

    const latestMessage = messages[messages.length - 1].content

    if (!latestMessage) {
      return NextResponse.json(
        {
          error: "Invalid message format",
          details: "Message content is required",
        },
        { status: 400 },
      )
    }

    console.log("Processing chat request with message:", latestMessage)

    const responseText = await getWellnessServiceResponse(latestMessage)

    console.log("Chat response generated:", responseText)

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error in chat route:", error)
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 },
    )
  }
}

