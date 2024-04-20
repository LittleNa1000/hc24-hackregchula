import { env } from "@/env";
import { messagingApi } from "@line/bot-sdk";
import { ErrorResponse } from "node_modules/@line/bot-sdk/dist/cjs/manage-audience/api";

const client = new messagingApi.MessagingApiClient({
  channelAccessToken: env.LINE_CHANNEL_ACCESS_TOKEN,
});

export const replyText = async (replyToken: string, text: string) => {
  const sentMessages = await client
    .replyMessage({
      replyToken,
      messages: [
        {
          type: "text",
          text,
        },
      ],
    })
    .catch((e: ErrorResponse) => {
      console.log(e.details);
      return null;
    });
  return sentMessages;
};
