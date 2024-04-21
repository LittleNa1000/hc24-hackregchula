"use client";

import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./ui/button";
import { DownIcon, LeftIcon, SuccessIcon } from "./ui/Icon";
import Collapsible from "react-collapsible";

export default function Info() {
  const importantDocs = [
    "จท23 (หนังสือรับรองความเป็นนิสิต)",
    "จท24 (หนังสือรับรองความประพฤติ)",
    "จท25 (ใบประมวลผลการศึกษา)",
    "จท26 (หนังสือรับรองคุณวุฒิ)",
  ];
  const reqDocs = ["จท41 (คำร้องทั่วไป)", "จท44 (คำร้องขอลาป่วย)"];
  return (
    <>
      <div className="flex w-full flex-col justify-start gap-2 px-5 text-black">
        <h3 className="text-2xl font-bold text-pink">เอกสารสำคัญฯ</h3>
        {importantDocs.map((doc) => (
          <>
            <Collapsible
              trigger={
                <div className="flex justify-between">
                  {doc}
                  <DownIcon className="h-6 w-6" />
                </div>
              }
              triggerWhenOpen={
                <div className="flex justify-between">
                  {doc}
                  <LeftIcon className="h-6 w-6" />
                </div>
              }
              triggerClassName="font-bold text-lg"
              triggerOpenedClassName="font-bold text-lg"
            >
              <p className="bg-lightPink px-4 py-1">
                กรณีติดต่อขอเอกสารที่สนท. (Walk-In)
              </p>
              <p className="bg-lightPink px-4 py-1">
                กรณีติดต่อขอเอกสารผ่าน Platform
              </p>
            </Collapsible>
            <div className="mb-1 mt-2 border border-gray" />
          </>
        ))}
        <h3 className="text-2xl font-bold text-pink">เอกสารคำร้อง</h3>
        {reqDocs.map((doc) => (
          <>
            <Collapsible
              trigger={
                <div className="flex justify-between">
                  {doc}
                  <DownIcon className="h-6 w-6" />
                </div>
              }
              triggerWhenOpen={
                <div className="flex justify-between">
                  {doc}
                  <LeftIcon className="h-6 w-6" />
                </div>
              }
              triggerClassName="font-bold text-lg"
              triggerOpenedClassName="font-bold text-lg"
            >
              <p className="bg-lightPink px-4 py-1">
                เอกสารที่ต้องเตรียม: <br /> •
                ใบเสร็จรับเงินต้นฉบับ/สลิปการโอนเงิน • สำเนาบัตรนิสิต <br /> •
                สำเนาบัตรประจำตัวประชาชน/สำเนาพาสปอร์ต <br /> •
                หน้าสมุดบัญชีธนาคาร <br /> รวมเอกสารทั้งหมดเป็นไฟล์ PDF
                ส่งมาพร้อมกับ
                {doc}
              </p>
            </Collapsible>
            <div className="mb-1 mt-2 border border-gray" />
          </>
        ))}
        <Link className="col-span-2 mx-auto mt-5" href="/request">
          <PrimaryButton>กลับไปที่หน้าหลัก</PrimaryButton>
        </Link>
      </div>
    </>
  );
}
