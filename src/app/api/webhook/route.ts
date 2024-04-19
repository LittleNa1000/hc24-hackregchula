import { replyText } from "@/services/line";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse("GET request to webhook");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  await replyText(body.events[0].replyToken, "หวัดดีจ้า");
  const res = new NextResponse("POST request to webhook");
  return res;
}
