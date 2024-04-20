import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./ui/button";
import { SuccessIcon } from "./ui/Icon";

export default function RequestDocSuccess() {
  return (
    <>
      <div className="flex w-full flex-col justify-start gap-3 px-5 text-black">
        <SuccessIcon className="mx-auto h-[150px] w-[150px]" />
        <div className="border-gray mb-1 mt-2 border" />
        <h3 className="text-3xl font-bold text-pink">
          ขั้นตอนหลังจากทำรายการเสร็จ (รับด้วยตัวเอง)
        </h3>
        <ul className="grid list-disc gap-5 text-xl">
          <li>สามารถติดต่อขอรับเอกสารได้หลังจาก 1 วันทำการ</li>
          <li>
            หากไม่ติดต่อขอรับเอกสารภายใน 60 วันนับจากวันที่ออกให้
            คำร้องและเอกสารดังกล่าวจะถูกยกเลิก
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
