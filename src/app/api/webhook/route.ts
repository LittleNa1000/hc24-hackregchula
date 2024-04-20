import { handleEvent } from "@/server/event";
import { replyText } from "@/server/line";
import {
  EventMessage,
  WebhookEvent,
  MessageEvent,
  WebhookRequestBody,
} from "@line/bot-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse("GET request to webhook");
}

export async function POST(request: NextRequest) {
  const body: WebhookRequestBody = (await request.json()) as WebhookRequestBody;
  if (!body.events[0]) {
    return new NextResponse("No events");
  }
  body.events.forEach(async (event: WebhookEvent) => {
    if (event.type === "message") {
      await handleEvent(event);
    }
  });
  return new NextResponse("POST request to webhook");
}
