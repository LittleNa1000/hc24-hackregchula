import ImportantDocForm from "@/components/ImportantDocForm";
import { Heading } from "@/components/ui/Typography";

export default function ImportantDoc() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 text-pink">
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>วิธีการรับเอกสาร</Heading>
        <ImportantDocForm />
      </div>
    </main>
  );
}
