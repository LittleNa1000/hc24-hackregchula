"use client";

import { useRecoilState } from "recoil";
import { importantDocState } from "./providers/RecoilContext";
import { Dropdown } from "./ui/Dropdown";
import { Input } from "./ui/Input";
import { provinceOptions } from "@/utils/options";
import Link from "next/link";
import { PrimaryButton } from "./ui/button";
import { useMemo } from "react";
import Image from "next/image";

export default function ImportantDocForm() {
  const [importantDoc, setImportantDoc] = useRecoilState(importantDocState);
  const isDisabled = useMemo(() => {
    if (importantDoc.method === "self")
      return !(importantDoc.email && importantDoc.tel);
    if (importantDoc.method === "delegate")
      return !(importantDoc.email && importantDoc.tel && importantDoc.file);
    if (importantDoc.method === "postal")
      return !(
        importantDoc.email &&
        importantDoc.tel &&
        importantDoc.address &&
        importantDoc.province &&
        importantDoc.zip
      );
    return true;
  }, [importantDoc]);
  return (
    <>
      <div className="flex w-full flex-col justify-start gap-3 px-5 text-black">
        <label
          htmlFor="self"
          className="flex gap-4 text-xl"
          onClick={() => setImportantDoc({ ...importantDoc, method: "self" })}
        >
          <input
            type="radio"
            id="self"
            name="method"
            value="self"
            className="h-7 w-7 accent-pink"
          />
          <p>รับด้วยตนเอง</p>
        </label>
        <label
          htmlFor="delegate"
          className="flex gap-4 text-xl"
          onClick={() =>
            setImportantDoc({ ...importantDoc, method: "delegate" })
          }
        >
          <input
            type="radio"
            id="delegate"
            name="method"
            value="delegate"
            className="h-7 w-7 accent-pink"
          />
          <p>ให้ผู้อื่นรับแทน</p>
        </label>
        <label
          htmlFor="postal"
          className="flex gap-4 text-xl"
          onClick={() => setImportantDoc({ ...importantDoc, method: "postal" })}
        >
          <input
            type="radio"
            id="postal"
            name="method"
            value="postal"
            className="h-7 w-7 accent-pink"
          />
          <p>จัดส่งทางไปรษณีย์</p>
        </label>
      </div>
      <div className="mt-8 grid w-full grid-cols-2 gap-3 gap-x-10 px-5">
        <Input
          label="เบอร์โทรศัพท์"
          type="tel"
          placeholder=""
          className="col-span-2"
          showLabel={true}
          id="tel"
          onChange={(e) => {
            setImportantDoc({
              ...importantDoc,
              tel: e.target.value,
            });
          }}
        />
        <Input
          label="Email"
          type="email"
          placeholder=""
          className="col-span-2"
          showLabel={true}
          id="email"
          onChange={(e) => {
            setImportantDoc({ ...importantDoc, email: e.target.value });
          }}
        />
        {/* Hidden instead */}
        {importantDoc.method === "delegate" && (
          <>
            <Input
              label="แนบใบฉันทะ"
              type="file"
              placeholder=""
              showLabel={true}
              className="col-span-2"
              id="file"
              onChange={(e) => {
                if (e.target.files)
                  setImportantDoc({
                    ...importantDoc,
                    file: e.target.files[0],
                  });
              }}
            />
            <label
              htmlFor="dropzone-file"
              className={`col-span-2 flex w-full flex-col items-center justify-center rounded-lg border-[1px] border-dashed bg-transparent lg:border-2 ${isDisabled ? "cursor-default opacity-60" : "cursor-pointer hover:opacity-80 active:opacity-60"}`}
            >
              <div className="flex flex-col items-center justify-center gap-2 p-3 lg:p-12">
                <div className="mt-2 flex h-[24px] items-center justify-center">
                  <Image
                    src={"/icons/upload.svg"}
                    width={24}
                    height={24}
                    alt="upload icon"
                  />

                  <span className="ml-[6px] text-sm text-slate-800 lg:text-[16px]">
                    วางไฟล์ที่นี่
                  </span>
                </div>
                <p className="mb-3 flex h-[32px] flex-wrap items-center justify-center gap-1 rounded-lg bg-slate-400 px-[15px] text-sm text-slate-50 lg:h-[40px]">
                  <span className="text-sm lg:text-[16px]">
                    กดเพื่ออัพโหลดไฟล์
                  </span>
                </p>
                <p className="text-[12px] text-slate-400">(ไฟล์ .pdf)</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                name="dropzone-file"
                accept=".pdf, .jpg, .png"
                onChange={(e) => {
                  if (e.target.files)
                    setImportantDoc({
                      ...importantDoc,
                      file: e.target.files[0],
                    });
                }}
                onClick={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = "";
                }}
                className="hidden"
              />
            </label>
          </>
        )}
        {importantDoc.method === "postal" && (
          <>
            <Input
              label="ที่อยู่"
              type="text"
              placeholder=""
              className="col-span-2"
              showLabel={true}
              id="address"
              onChange={(e) => {
                setImportantDoc({
                  ...importantDoc,
                  address: e.target.value,
                });
              }}
            />
            <Dropdown
              label="จังหวัด"
              id="province"
              showLabel={true}
              onChange={(e) => {
                setImportantDoc({ ...importantDoc, province: e.target.value });
              }}
              options={provinceOptions}
            />
            <Input
              label="รหัสไปรษณีย์"
              type="text"
              placeholder=""
              showLabel={true}
              id="zip"
              onChange={(e) => {
                setImportantDoc({
                  ...importantDoc,
                  zip: e.target.value,
                });
              }}
            />
          </>
        )}
        <Link
          className="col-span-2 mx-auto mt-5"
          href="/important-doc/checkout"
        >
          <PrimaryButton isDisabled={isDisabled}>Checkout</PrimaryButton>
        </Link>
      </div>
    </>
  );
}
