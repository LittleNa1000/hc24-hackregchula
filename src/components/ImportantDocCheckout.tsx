"use client";

import { useRecoilState } from "recoil";
import { importantDocState } from "./providers/RecoilContext";
import { Dropdown } from "./ui/Dropdown";
import { Input } from "./ui/Input";
import Link from "next/link";
import { PrimaryButton } from "./ui/button";
import { useMemo, useState } from "react";
import generatePayload from "promptpay-qr";
import { env } from "@/env";
import QRCode from "react-qr-code";
import { sentFlex } from "@/server/line";
import { confirmationFlex } from "@/flex-messages/confirmation";

export default function ImportantDocCheckout() {
  const [importantDoc, setImportantDoc] = useRecoilState(importantDocState);
  const [success, setSuccess] = useState(false);
  const isDisabled = useMemo(() => {
    if (success) return false;
    if (importantDoc.paymentMethod === "credit")
      return !(
        importantDoc.creditCardNumber &&
        importantDoc.creditCardExpire &&
        importantDoc.creditCardCVV
      );
    return true;
  }, [importantDoc, success]);
  const payload = useMemo(
    () =>
      generatePayload(env.NEXT_PUBLIC_RECIPIENT_NUMBER || "", {
        amount: 360,
      }),
    [],
  );
  const sent = async () => {
    if (typeof window !== "undefined") {
      const lineUid = localStorage.getItem("lineUid");

      if (lineUid) await sentFlex(lineUid, confirmationFlex, "confirmation");
    }
  };
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
        <div className="mb-1 mt-2 border border-gray" />
        <h5 className="text-right text-lg text-gray">Total: ฿360</h5>
        <h5 className="text-right text-lg text-gray">Mailing fee: ฿360</h5>
        <h5 className="text-right text-2xl font-bold text-pink">
          Grand Total: ฿360
        </h5>
      </div>
      <div className="mt-8 grid w-full grid-cols-2 gap-3 gap-x-10 px-5">
        <Dropdown
          label="วิธีชำระเงิน"
          id="paymentMethod"
          className="col-span-2"
          isDisabled={success}
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
              type="date"
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
            <Input
              label="รหัส CVV"
              type="text"
              placeholder=""
              showLabel={true}
              id="creditCardCVV"
              onChange={(e) => {
                setImportantDoc({
                  ...importantDoc,
                  creditCardCVV: e.target.value,
                });
              }}
            />
          </>
        )}
        {importantDoc.paymentMethod === "promptpay" && (
          <>
            <QRCode
              onClick={() => {
                setSuccess(true);
              }}
              value={payload}
              id="qr"
              className="col-span-2 m-auto h-[75%] w-[75%]"
            />
          </>
        )}
      </div>
      <Link className="col-span-2 mx-auto mt-5" href="/important-doc/success">
        <PrimaryButton isDisabled={isDisabled} onClick={sent}>
          {importantDoc.paymentMethod === "credit"
            ? "จ่ายเงิน"
            : "จ่ายเงินสำเร็จ"}
        </PrimaryButton>
      </Link>
    </>
  );
}
