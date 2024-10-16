import Wallet from "@/components/Wallet";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex mt-48">
      <div className="w-1/4 mx-auto bg-white border border-purple-500 rounded-lg shadow-lg overflow-hidden">
        <Wallet />
        <div className="flex justify-center p-4 bg-purple-100">
          <Link href="/docs">not ready? go to wallet docs</Link>
        </div>
      </div>
    </div>
  );
}
