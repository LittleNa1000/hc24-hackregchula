import RequestDocSubmit from "@/components/RequestDocSubmit";
import { Heading } from "@/components/ui/Typography";

export default function RequestDoc() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 text-pink">
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>ส่งเอกสารคำร้อง</Heading>
        <RequestDocSubmit />
      </div>
    </main>
  );
}
