import { env } from "@/env";
import { messagingApi } from "@line/bot-sdk";

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
    .then((sentMessages) => sentMessages)
    .catch((e) => {
      console.log(e.originalError.response.data.message);
      return null;
    });
  return sentMessages;
};
