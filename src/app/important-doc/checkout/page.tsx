import ImportantDocCheckout from "@/components/ImportantDocCheckout";
import { Heading } from "@/components/ui/Typography";

export default function ImportantDocCheckoutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 text-pink">
      <div className="container flex flex-col items-center justify-center gap-4 px-5">
        <Heading>ชำระเงิน</Heading>
        <ImportantDocCheckout />
      </div>
    </main>
  );
}
