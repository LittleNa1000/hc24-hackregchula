import { FlexContainer } from "@line/bot-sdk";

export const documentStatusFlex: FlexContainer = {
  type: "carousel",
  contents: [
    {
      type: "bubble",
      size: "micro",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "กำลังจัดส่ง",
            color: "#ffffff",
            align: "start",
            size: "md",
            gravity: "center",
          },
          {
            type: "text",
            text: "CR23 ฉบับภาษาอังกฤษ",
            color: "#ffffff",
            align: "start",
            size: "xs",
            gravity: "center",
            margin: "lg",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "filler",
                  },
                ],
                width: "70%",
                backgroundColor: "#0D8186",
                height: "6px",
              },
            ],
            backgroundColor: "#9FD8E36E",
            height: "6px",
            margin: "sm",
          },
        ],
        backgroundColor: "#27ACB2",
        paddingTop: "19px",
        paddingAll: "12px",
        paddingBottom: "16px",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "สถานที่จัดส่ง",
          },
          {
            type: "separator",
          },
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "26 Soi Charoenkrung 40, Bangrak, Bangkok",
                color: "#8C8C8C",
                size: "sm",
                wrap: true,
              },
            ],
            flex: 1,
          },
        ],
        spacing: "md",
        paddingAll: "12px",
      },
      styles: {
        footer: {
          separator: false,
        },
      },
    },
    {
      type: "bubble",
      size: "micro",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "เอกสารพร้อมแล้ว",
            color: "#ffffff",
            align: "start",
            size: "md",
            gravity: "center",
          },
          {
            type: "text",
            text: "CR24 ฉบับภาษาอังกฤษ",
            color: "#ffffff",
            align: "start",
            size: "xs",
            gravity: "center",
            margin: "lg",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "filler",
                  },
                ],
                width: "100%",
                backgroundColor: "#327d0f",
                height: "6px",
              },
            ],
            backgroundColor: "#FAD2A76E",
            height: "6px",
            margin: "sm",
          },
        ],
        backgroundColor: "#1e450c",
        paddingTop: "19px",
        paddingAll: "12px",
        paddingBottom: "16px",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "สถานที่จัดส่ง",
          },
          {
            type: "separator",
          },
          {
            type: "text",
            text: "มารับด้วยตัวเอง",
            color: "#8C8C8C",
            size: "sm",
            wrap: true,
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "ดูเวลาเปิด-ปิด",
              uri: "http://linecorp.com/",
            },
            style: "secondary",
          },
        ],
        spacing: "md",
        paddingAll: "12px",
      },
      styles: {
        footer: {
          separator: false,
        },
      },
    },
  ],
};
