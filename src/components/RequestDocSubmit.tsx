"use client";

import Link from "next/link";
import { PrimaryButton } from "./ui/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { requestDocState, requestState } from "./providers/RecoilContext";
import { useMemo, useState } from "react";
import { FileInput } from "./ui/Input";
import { documentMap } from "@/utils/options";

export default function RequestDocSubmit() {
  const request = useRecoilValue(requestState);
  const [requestDoc, setRequestDoc] = useRecoilState(requestDocState);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const isDisabled = useMemo(() => {
    return !(requestDoc.file && isConfirmed);
  }, [requestDoc, isConfirmed]);

  return (
    <>
      <div className="my-2 flex w-full flex-col gap-4">
        <div className="mb-2 rounded-3xl bg-pink px-3 pb-1 pt-2 text-xl text-white">
          <span className="underline">ประเภทคำร้อง</span>:
          {documentMap[request.doc ?? "CR23"]?.name}
        </div>
        <h3 className="text-2xl font-bold text-black">ขั้นตอนในการส่ง:</h3>
        <ul className="flex list-decimal flex-col gap-2 px-6 text-xl text-black">
          <li>ดาวน์โหลดเอกสาร</li>
          <div className="px-5">
            <Link href="/documents/CR41-template.pdf">
              <FileInput label="ดาวน์โหลดเอกสาร" download />
            </Link>
          </div>
          <li>ตรวจสอบเอกสารว่ามีข้อผิดพลาดหรือไม่</li>
          <li>เซ็นชื่อ</li>
          <li>อัพโหลดเอกสาร</li>
        </ul>
        <div className="mb-6 px-11">
          <FileInput
            label="อัพโหลดเอกสาร"
            onChange={(e) => {
              if (e.target.files)
                setRequestDoc({
                  ...requestDoc,
                  file: e.target.files[0],
                });
            }}
          />
        </div>
        <div className="mx-auto flex justify-center gap-6">
          <input
            type="checkbox"
            id="confirm"
            name="confirm"
            className="h-6 w-6 accent-pink"
            onClick={(e) => {
              setIsConfirmed(!isConfirmed);
            }}
          />
          <label htmlFor="confirm" className="text-xl font-bold text-black">
            ยืนยันว่าข้อมูลถูกต้อง
          </label>
        </div>
        <Link className="mx-auto" href="/request-doc/success">
          <PrimaryButton isDisabled={isDisabled}>Submit</PrimaryButton>
        </Link>
      </div>
    </>
  );
}
