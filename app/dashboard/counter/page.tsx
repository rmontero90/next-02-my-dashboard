import { CartCounter } from "@/components/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Simple Counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in the Cart</span>
      <CartCounter value={10} />
    </div>
  );
}
