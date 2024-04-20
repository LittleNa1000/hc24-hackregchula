import RegisterForm from "@/components/RegisterForm";
import { Heading } from "@/components/ui/Typography";

export default function Request() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 text-pink">
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>REG CHULA</Heading>
        <RegisterForm />
      </div>
    </main>
  );
}
