import { EventMessage, MessageEvent } from "@line/bot-sdk";
import { replyFlex, replyText } from "./line";
import { documentStatusFlex } from "@/flex-messages/document-status";

export async function handleEvent(event: MessageEvent) {
  const message = event.message;
  if (message.type === "text" && message.text === "สถานะเอกสาร") {
    await replyFlex(event.replyToken, documentStatusFlex, "สถานะเอกสาร");
  }
}
