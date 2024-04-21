"use server";

import { env } from "@/env";
import { FlexContainer, messagingApi } from "@line/bot-sdk";

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
    .catch((e: string) => {
      console.log(e);
      return null;
    });
  return sentMessages;
};

export const replyFlex = async (
  replyToken: string,
  flex: FlexContainer,
  altText: string,
) => {
  const sentMessages = await client
    .replyMessage({
      replyToken,
      messages: [
        {
          type: "flex",
          altText: altText,
          contents: flex,
        },
      ],
    })
    .catch((e: string) => {
      console.log(e);
      return null;
    });
  return sentMessages;
};

export const sentFlex = async (
  lineUid: string,
  flex: FlexContainer,
  altText: string,
) => {
  const sentMessages = await client
    .pushMessage({
      to: lineUid,
      messages: [{ type: "flex", altText, contents: flex }],
    })
    .catch((e: string) => {
      console.log(e);
      return null;
    });
  return sentMessages;
};
