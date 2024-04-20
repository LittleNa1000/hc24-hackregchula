"use client";

import { useRecoilState } from "recoil";
import { importantDocState } from "./providers/RecoilContext";
import { Dropdown } from "./ui/Dropdown";
import { Input } from "./ui/Input";
import { provinceOptions } from "@/utils/options";
import Link from "next/link";
import { PrimaryButton } from "./ui/button";
import { useMemo } from "react";

export default function ImportantDocCheckout() {
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
      <div className="flex w-full flex-col justify-start gap-1 px-5 text-black">
        <h3 className="text-3xl">Order Summary</h3>
        <div className="flex justify-between text-2xl">
          <h4 className="font-bold">CR23</h4>
          {/* <div className="flex flex-grow overflow-hidden">
            ....................................................
          </div> */}
          <p>฿120</p>
        </div>
        <div className="mb-1 mt-2 border border-[#B0B0B0]" />
        <h5 className="text-right text-lg text-[#B0B0B0]">Total: ฿360</h5>
        <h5 className="text-right text-lg text-[#B0B0B0]">Mailing fee: ฿360</h5>
        <h5 className="text-right text-2xl font-bold text-pink">
          Grand Total: ฿360
        </h5>
      </div>
      <div className="mt-8 grid w-full grid-cols-2 gap-3 gap-x-10 px-5">
        <Dropdown
          label="วิธีชำระเงิน"
          id="paymentMethod"
          onChange={(e) => {
            setImportantDoc({ ...importantDoc, paymentMethod: e.target.value });
          }}
          options={[
            { value: "credit", label: "Credit or Debit Card" },
            { value: "promptpay", label: "Promptpay" },
          ]}
        />
        {/* Hidden instead */}
        {importantDoc.paymentMethod === "credit" && (
          <>
            <Input
              label="หมายเลขบัตร"
              type="text"
              placeholder=""
              className="col-span-2"
              showLabel={true}
              id="creditCardNumber"
              onChange={(e) => {
                setImportantDoc({
                  ...importantDoc,
                  creditCardNumber: e.target.value,
                });
              }}
            />
            <Input
              label="วันหมดอายุ"
              type="text"
              placeholder=""
              showLabel={true}
              id="creditCardExpire"
              onChange={(e) => {
                setImportantDoc({
                  ...importantDoc,
                  creditCardExpire: e.target.value,
                });
              }}
            />
          </>
        )}
      </div>
      <Link
        className="absolute bottom-[50px] mx-auto"
        href="/important-doc/checkout"
      >
        <PrimaryButton isDisabled={isDisabled}>Checkout</PrimaryButton>
      </Link>
    </>
  );
}
