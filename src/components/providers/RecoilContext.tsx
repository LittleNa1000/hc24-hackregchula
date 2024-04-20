"use client";

import { defaultDocRequest, defaultRequest, requestType } from "@/utils/types";
import { RecoilRoot, atom } from "recoil";

// const localStorageEffect =
//   (key:string) =>
//   ({ setSelf:()=>void, onSet }) => {
//     const savedValue = localStorage.getItem(key);
//     if (savedValue != null) {
//       setSelf(JSON.parse(savedValue));
//     }

//     onSet((newValue:any, _:any, isReset: boolean) => {
//       isReset
//         ? localStorage.removeItem(key)
//         : localStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };

export const requestState = atom({
  key: "requestState",
  default: defaultRequest,
  effects: [],
});

export const requestDocState = atom({
  key: "requestDocState",
  default: defaultDocRequest,
  effects: [],
});

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
