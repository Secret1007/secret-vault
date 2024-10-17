"use client";
import Link from "next/link";

const Wallet = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        SecretVault
      </h2>
      <Link
        className="bg-purple-500 hover:bg-purple-700 text-white  py-2 px-4 rounded text-center"
        href="/create-wallet"
      >
        创建钱包
      </Link>
      <Link
        href="/recover-wallet"
        className="bg-purple-500 hover:bg-purple-700 text-white  py-2 px-4 rounded text-center"
      >
        助记词恢复钱包
      </Link>
    </div>
  );
};

export default Wallet;
