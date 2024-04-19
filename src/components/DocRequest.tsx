"use client";

import { Select } from "./Select";

const statusOptions = [
  { value: "student", label: "นิสิตปัจจุบัน" },
  { value: "alumni", label: "ศิษย์เก่า" },
];

const typeOptions = [
  { value: "important", label: "เอกสารสำคัญ" },
  { value: "request", label: "เอกสารคำร้อง" },
];

export default function DocRequest() {
  return (
    <>
      <div className="my-2 flex w-full flex-col gap-3">
        <Select
          label="สถานภาพนิสิต"
          id="status"
          onChange={() => {}}
          options={statusOptions}
        />
        <Select
          label="ประเภทเอกสารที่ต้องการขอ"
          id="type"
          onChange={() => {}}
          options={typeOptions}
        />
        <Select
          label="สถานภาพนิสิต"
          id="status"
          onChange={() => {}}
          options={statusOptions}
        />
      </div>
    </>
  );
}
