import Info from "@/components/Info";
import { Heading } from "@/components/ui/Typography";

export default function InfoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 text-pink">
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>ข้อมูลเอกสาร</Heading>
        <Info />
      </div>
    </main>
  );
}
