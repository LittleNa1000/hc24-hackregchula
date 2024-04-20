import RequestDocSuccess from "@/components/RequestDocSuccess";
import { Heading } from "@/components/ui/Typography";

export default function RequestDocSuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 text-pink">
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>ทำรายการเสร็จสมบูรณ์</Heading>
        <RequestDocSuccess />
      </div>
    </main>
  );
}
