"use client";

import { Dropdown } from "./ui/Dropdown";
import Link from "next/link";
import { PrimaryButton } from "./ui/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { requestDocState, requestState } from "./providers/RecoilContext";
import { useMemo } from "react";
import { Input } from "./ui/Input";
import { facultyOptions, semesterOptions } from "@/utils/options";

export default function RequestDocSubmit() {
  const request = useRecoilValue(requestState);
  const [requestDoc, setRequestDoc] = useRecoilState(requestDocState);
  const isDisabled = useMemo(() => {
    return Object.values(requestDoc).some(
      (value) => value === null || value === "",
    );
  }, [requestDoc]);

  return (
    <>
      <div className="my-2 flex w-full flex-col gap-3">
        <div className="mb-2 rounded-3xl bg-pink px-3 pb-1 pt-2 text-xl text-white">
          <span className=" underline">ประเภทคำร้อง</span>: {request.doc}
          คำร้องขอถอนรายวิชาหลังกำหนด
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Dropdown
            label="คำนำหน้า"
            id="title"
            showLabel={true}
            className="col-span-1"
            onChange={(e) => {
              setRequestDoc({ ...requestDoc, title: e.target.value });
            }}
            options={[
              { value: "นาย", label: "นาย" },
              { value: "นาง", label: "นาง" },
              { value: "นางสาว", label: "นางสาว" },
            ]}
          />
          <Input
            label="ชื่อ"
            type="text"
            placeholder=""
            showLabel={true}
            id="firstName"
            className="col-span-1 col-start-1"
            onChange={(e) => {
              setRequestDoc({ ...requestDoc, firstName: e.target.value });
            }}
          />
          <Input
            label="นามสกุล"
            type="text"
            placeholder=""
            showLabel={true}
            id="lastName"
            onChange={(e) => {
              setRequestDoc({ ...requestDoc, lastName: e.target.value });
            }}
          />
          <Dropdown
            label="ภาคการศึกษา"
            id="semester"
            showLabel={true}
            onChange={(e) => {
              setRequestDoc({ ...requestDoc, semester: e.target.value });
            }}
            options={semesterOptions}
          />
          <Dropdown
            label="ระบบการศึกษา"
            id="educationType"
            showLabel={true}
            onChange={(e) => {
              setRequestDoc({ ...requestDoc, educationType: e.target.value });
            }}
            options={[
              { value: "semester", label: "ทวีภาค" },
              { value: "trimester", label: "ไตรภาค" },
            ]}
          />
          <Dropdown
            label="คณะ"
            id="faculty"
            showLabel={true}
            className="col-span-2"
            onChange={(e) => {
              setRequestDoc({ ...requestDoc, faculty: e.target.value });
            }}
            options={facultyOptions}
          />
          <Input
            label="ภาควิชา/สาขาวิชา"
            type="text"
            placeholder=""
            showLabel={true}
            id="department"
            onChange={(e) => {
              setRequestDoc({ ...requestDoc, department: e.target.value });
            }}
          />
          <Input
            label="GPAX"
            type="number"
            placeholder=""
            showLabel={true}
            id="gpax"
            onChange={(e) => {
              setRequestDoc({
                ...requestDoc,
                gpax: parseFloat(e.target.value),
              });
            }}
          />
          <Dropdown
            label="สถานภาพนิสิต"
            id="status"
            showLabel={true}
            onChange={(e) => {}}
            isDisabled={true}
            options={[
              { value: request.status ?? "", label: request.status ?? "" },
            ]}
          />
          <Input
            label="เบอร์โทรศัพท์"
            type="tel"
            placeholder=""
            showLabel={true}
            id="tel"
            onChange={(e) => {
              setRequestDoc({
                ...requestDoc,
                tel: e.target.value,
              });
            }}
          />
        </div>
        <Link className="mx-auto" href="/request-doc/submit">
          <PrimaryButton isDisabled={isDisabled}>Proceed</PrimaryButton>
        </Link>
      </div>
    </>
  );
}
