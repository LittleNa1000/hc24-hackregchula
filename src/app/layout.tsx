import LiffProvider from "@/components/providers/LiffContext";
import RecoilRootProvider from "@/components/providers/RecoilContext";
import "@/styles/globals.css";
import localFont from "next/font/local";

const chula = localFont({
  src: [
    {
      path: "../../public/fonts/ChulaCharasNewReg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ChulaCharasNewBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--chula-font",
});

export const metadata = {
  title: "New Reg Chula",
  description: "New Reg Chula by HackRegChula",
  icons: [{ rel: "icon", url: "/reg-chula.webp" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={`relative mx-auto min-h-screen w-full max-w-md overflow-hidden overflow-y-scroll bg-white font-chula text-black ${chula.variable}`}
      >
        <RecoilRootProvider>
          <LiffProvider>{children}</LiffProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
