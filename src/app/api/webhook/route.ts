import { replyText } from "@/server/line";
import {
  EventMessage,
  WebhookEvent,
  UnsendEvent,
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
  const event = body.events[0];
  if (event.type !== "message") {
    return new NextResponse("Not a message event");
  }
  await replyText(event.replyToken, "หวัดดีจ้า");
  const res = new NextResponse("POST request to webhook");
  return res;
}
