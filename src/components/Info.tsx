"use client";

import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./ui/button";
import { DownIcon, LeftIcon, SuccessIcon } from "./ui/Icon";
import Collapsible from "react-collapsible";

export default function Info() {
  return (
    <>
      <div className="flex w-full flex-col justify-start gap-2 px-5 text-black">
        <h3 className="text-2xl font-bold text-pink">เอกสารสำคัญ</h3>
        <Collapsible
          trigger={
            <div className="flex justify-between">
              จท23 (หนังสือรับรองความเป็นนิสิต) <DownIcon className="h-6 w-6" />
            </div>
          }
          triggerWhenOpen={
            <div className="flex justify-between">
              จท23 (หนังสือรับรองความเป็นนิสิต) <LeftIcon className="h-6 w-6" />
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
        <div className="border-gray mb-1 mt-2 border" />
        <ul className="grid list-disc gap-5 text-xl">
          <li>
            สามารถติดต่อขอรับเอกสารได้หลังจากสำนักงานการทะเบียนได้รับการชำระเงินแล้ว
            1 วันทำการ
          </li>
          <li>
            หากไม่ติดต่อขอรับเอกสารภายใน 60 วันนับจากวันที่ออกให้
            คำร้องและเอกสารดังกล่าว จะถูกยกเลิก
          </li>
        </ul>
        <div className="border-gray mb-1 mt-2 border" />
        <Link className="col-span-2 mx-auto mt-5" href="/request">
          <PrimaryButton>กลับไปที่หน้าหลัก</PrimaryButton>
        </Link>
        <SecondaryButton>ส่งข้อเสนอแนะ</SecondaryButton>
      </div>
    </>
  );
}
