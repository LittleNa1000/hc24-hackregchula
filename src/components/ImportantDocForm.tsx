"use client";

import { useRecoilState } from "recoil";
import { importantDocState } from "./providers/RecoilContext";
import { Dropdown } from "./ui/Dropdown";
import { FileInput, Input } from "./ui/Input";
import { provinceOptions } from "@/utils/options";
import Link from "next/link";
import { PrimaryButton } from "./ui/button";
import { useMemo } from "react";
import Image from "next/image";
import { UploadIcon } from "./ui/Icon";

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
          <FileInput
            label="อัพโหลดใบมอบฉันทะ"
            download
            onChange={(e) => {
              if (e.target.files)
                setImportantDoc({
                  ...importantDoc,
                  file: e.target.files[0],
                });
            }}
          />
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
