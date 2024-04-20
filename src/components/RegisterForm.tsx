"use client";

import { PrimaryButton } from "./ui/button";
import { useMemo, useState } from "react";
import { Input } from "./ui/Input";
import { redirect } from "next/navigation";

export default function RegisterForm() {
  if (localStorage.getItem("studentId")) {
    redirect("/request");
  }
  const [studentId, setStudentId] = useState<number | undefined>();
  const [password, setPassword] = useState("");
  const [citizenId, setCitizenId] = useState("");
  const isDisabled = useMemo(() => {
    return !(studentId && password && citizenId);
  }, [studentId, password, citizenId]);
  const handleSubmit = () => {
    console.log({ studentId, password, citizenId });
    if (isDisabled) return;
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
