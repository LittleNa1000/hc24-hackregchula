"use client";

import { PrimaryButton } from "./ui/button";
import { useMemo, useState } from "react";
import { Input } from "./ui/Input";
import { redirect } from "next/navigation";
import { useLiff } from "./providers/LiffContext";

export default function RegisterForm() {
  if (typeof window !== "undefined" && localStorage.getItem("studentId")) {
    redirect("/request");
  }
  const [studentId, setStudentId] = useState<number | undefined>();
  const [password, setPassword] = useState("");
  const [citizenId, setCitizenId] = useState("");
  const liff = useLiff();
  const isDisabled = useMemo(() => {
    return !(studentId && password && citizenId);
  }, [studentId, password, citizenId]);
  const handleSubmit = async () => {
    console.log({ studentId, password, citizenId });

    const profile = await liff?.getProfile().catch((error) => {
      console.error(error);
    });
    if (isDisabled || !profile) return;
    localStorage.setItem("lineUid", profile.userId);
    localStorage.setItem("studentId", studentId!.toString());
  };
  return (
    <>
      <form action={handleSubmit} className="my-2 flex w-full flex-col gap-3">
        <div className="flex flex-col gap-8">
          <Input
            label="Student ID"
            type="number"
            placeholder="Student ID"
            id="studentId"
            onChange={(e) => {
              setStudentId(parseInt(e.target.value));
            }}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input
            label="Identification No."
            type="text"
            placeholder="Identification No."
            id="citizenId"
            onChange={(e) => {
              setCitizenId(e.target.value);
            }}
          />
        </div>
        <PrimaryButton isDisabled={isDisabled} className="mx-auto mt-12">
          Register
        </PrimaryButton>
      </form>
    </>
  );
}
