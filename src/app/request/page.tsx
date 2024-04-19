import DocInProgress from "@/components/DocInProgress";
import DocRequest from "@/components/DocRequest";
import { Heading } from "@/components/Typography";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-pink flex min-h-screen flex-col items-center pt-14">
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>ขอเอกสาร</Heading>
        <DocRequest />
        <DocInProgress />
      </div>
    </main>
  );
}
