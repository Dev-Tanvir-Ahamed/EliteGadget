import { Laptop } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <Laptop className="h-6 w-6" />
      <span className="hidden font-bold sm:inline-block">EliteGadgets</span>
    </Link>
  );
}
