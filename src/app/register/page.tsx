import RegisterForm from "@/components/RegisterForm";
import { WorldIcon } from "@/components/ui/Icon";
import { Heading } from "@/components/ui/Typography";
import Image from "next/image";

export default function Request() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 text-pink">
      <div className="container mb-9 flex items-center justify-between px-5">
        <Image
          src="/reg-chula-large.webp"
          alt="reg chula"
          width={225}
          height={65}
        />
        <WorldIcon className="h-12 w-12" />
      </div>
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>REG CHULA</Heading>
        <RegisterForm />
      </div>
    </main>
  );
}
