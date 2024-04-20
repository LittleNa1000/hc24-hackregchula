"use client";

import { Dropdown } from "./ui/Dropdown";
import Link from "next/link";
import { PrimaryButton } from "./ui/button";
import {
  statusOptions,
  typeOptions,
  requestDocOptions,
  importantDocOptions,
} from "@/utils/types";
import { useRecoilState } from "recoil";
import { requestState } from "./providers/RecoilContext";
import { useMemo } from "react";
import Select from "node_modules/react-select/dist/declarations/src/Select";

export default function DocRequest() {
  const [request, setRequest] = useRecoilState(requestState);
  const isDisabled = useMemo(
    () => !(request.status && request.type && request.doc),
    [request],
  );

  return (
    <>
      <div className="my-2 flex w-full flex-col gap-3">
        <Dropdown
          label="สถานภาพนิสิต"
          id="status"
          onChange={(e) => {
            setRequest({ ...request, status: e.target.value });
          }}
          options={statusOptions}
        />
        <Dropdown
          label="ประเภทเอกสารที่ต้องการขอ"
          id="type"
          onChange={(e) => {
            setRequest({ ...request, type: e.target.value });
          }}
          options={typeOptions}
        />
        <Dropdown
          isMulti={true}
          showLabel={true}
          label="เลือกเอกสารที่ต้องการ"
          id="doc"
          onChange={(e) => {
            setRequest({ ...request, doc: e.target.value });
          }}
          options={
            request.type === "important"
              ? importantDocOptions
              : requestDocOptions
          }
        />
        <Link href="/info" className="ml-auto text-xl text-[#B0B0B0] underline">
          ข้อมูลเพิ่มเติม
        </Link>
        <Link
          className="mx-auto"
          href={
            request.type === "important" ? "/important-doc" : "/request-doc"
          }
        >
          <PrimaryButton isDisabled={isDisabled}>Proceed</PrimaryButton>
        </Link>
      </div>
    </>
  );
}
