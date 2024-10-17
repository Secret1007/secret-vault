"use client";

import Wallet from "@/components/Wallet";
import Link from "next/link";
import { useEffect, useState } from "react";
import Login from "@/app/login/page";
export default function Home() {
  const [hasWallet, setHasWallet] = useState(true);

  useEffect(() => {
    // 只在客户端执行：检查 localStorage 中是否有钱包地址
    if (typeof window !== "undefined") {
      const storedEncryptedPrivateKey = localStorage.getItem(
        "encryptedPrivateKey"
      );
      if (!storedEncryptedPrivateKey) {
        setHasWallet(false); // 已有钱包地址
      }
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      {hasWallet ? (
        <Login /> // 登录界面
      ) : (
        <div className="w-1/4 mx-auto bg-white border border-purple-500 rounded-lg shadow-lg overflow-hidden">
          <Wallet />
          <div className="flex justify-center p-4 bg-purple-100">
            <Link href="/docs">not ready? go to wallet docs</Link>
          </div>
        </div>
      )}
    </div>
  );
}
