import "@/styles/globals.css";
import localFont from "next/font/local";

const chula = localFont({
  src: [
    {
      path: "../../public/fonts/CHULALONGKORNReg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CHULALONGKORNBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--chula-font",
});

export const metadata = {
  title: "New Reg Chula",
  description: "New Reg Chula by HackRegChula",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={`font-chula relative mx-auto min-h-screen w-full max-w-md overflow-hidden overscroll-none ${chula.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
