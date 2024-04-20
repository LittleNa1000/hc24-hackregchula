"use client";
import { env } from "@/env";
import { Liff } from "@line/liff";
import { createContext, useContext, useEffect, useState } from "react";

interface LiffContextProps {
  liff: Liff | null;
}

export const LiffContext = createContext<LiffContextProps>({
  liff: null,
});

export default function LiffProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  useEffect(() => {
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ liffId: env.NEXT_PUBLIC_LIFF_ID })
          .then(() => {
            console.log("LIFF init succeeded.");
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      })
      .catch((error: Error) => {
        console.log("LIFF import failed.");
      });
  }, []);

  if (liffError) {
    return (
      <div className="grid h-screen w-full place-content-center bg-white text-center">
        <p className="text-4xl font-bold text-neutral-900">LIFF Error😭</p>
        <p className="text-xs text-neutral-500">{liffError}</p>
      </div>
    );
  }

  return (
    <LiffContext.Provider
      value={{
        liff: liffObject,
      }}
    >
      {children}
    </LiffContext.Provider>
  );
}

export const useLiff = () => {
  const context = useContext(LiffContext);
  if (context === undefined) {
    throw new Error("useLiff must be used within a LiffProvider");
  }
  return context.liff;
};
