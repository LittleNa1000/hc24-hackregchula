"use client";

export default function DocInProgress() {
  return (
    <>
      <h2 className="w-full text-[28px] font-bold">สถานะเอกสารที่ขอไปแล้ว</h2>
      <div className="flex w-full flex-col gap-5 text-[28px]">
        <div className="bg-lightPink flex justify-between rounded-xl px-4 py-3">
          <h4 className="font-bold">จท23</h4>
          <p>กำลังจัดส่ง</p>
        </div>
      </div>
    </>
  );
}
