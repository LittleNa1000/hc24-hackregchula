import { FlexContainer } from "@line/bot-sdk";

export const confirmationFlex: FlexContainer = {
  type: "bubble",
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "ยืนยันคำร้อง",
        weight: "bold",
        color: "#1DB446",
        size: "md",
      },
      {
        type: "box",
        layout: "vertical",
        margin: "md",
        spacing: "sm",
        contents: [
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "CR23 ฉบับภาษาไทย x2",
                size: "sm",
                color: "#555555",
                flex: 0,
              },
              {
                type: "text",
                text: "150 THB",
                size: "sm",
                color: "#111111",
                align: "end",
              },
            ],
          },
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "CR25 ฉบับภาษาไทย x2",
                size: "sm",
                color: "#555555",
                flex: 0,
              },
              {
                type: "text",
                text: "150 THB",
                size: "sm",
                color: "#111111",
                align: "end",
              },
            ],
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "box",
            layout: "horizontal",
            margin: "md",
            contents: [
              {
                type: "text",
                text: "รวม",
                size: "sm",
                color: "#555555",
              },
              {
                type: "text",
                text: "300 THB",
                size: "sm",
                color: "#111111",
                align: "end",
              },
            ],
          },
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "ค่าจัดส่ง",
                size: "sm",
                color: "#555555",
              },
              {
                type: "text",
                text: "120 THB",
                size: "sm",
                color: "#111111",
                align: "end",
              },
            ],
          },
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "ค่าธรรมเนียม",
                size: "sm",
                color: "#555555",
              },
              {
                type: "text",
                text: "50 THB",
                size: "sm",
                color: "#111111",
                align: "end",
              },
            ],
          },
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "รวมทั้งสิ้น",
                size: "sm",
                color: "#555555",
              },
              {
                type: "text",
                text: "470 THB",
                size: "sm",
                color: "#111111",
                align: "end",
              },
            ],
          },
        ],
      },
      {
        type: "separator",
        margin: "xxl",
      },
      {
        type: "box",
        layout: "vertical",
        margin: "md",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: "ชำระเงิน",
              uri: "http://linecorp.com/",
            },
            style: "primary",
            color: "#bb78eb",
            height: "sm",
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "ยกเลิกคำร้อง",
              uri: "http://linecorp.com/",
            },
            style: "secondary",
            height: "sm",
          },
        ],
        spacing: "lg",
      },
    ],
  },
  styles: {
    footer: {
      separator: true,
    },
  },
};
