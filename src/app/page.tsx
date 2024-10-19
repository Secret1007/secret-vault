"use client";

import { useEffect, useState } from "react";
import LoginBox from "@/components/wallet/LoginBox";
import CreateWalletBox from "@/components/wallet/CreateWalletBox";

export default function Home() {
  const [hasWallet, setHasWallet] = useState(true);
  // const [isModalOpen, setIsModalOpen] = useState(false);

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
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div className="flex justify-center items-center h-screen">
      {hasWallet ? (
        <LoginBox /> // 登录界面
      ) : (
        <div className="w-1/4 mx-auto bg-white border border-purple-500 rounded-lg shadow-lg overflow-hidden">
          <CreateWalletBox />
        </div>
      )}
    </div>
    // <div>
    //   {/* Navbar 部分 */}
    //   <Navbar toggleModal={toggleModal} />

    //   {/* Content 部分 */}
    //   <main className="p-8">
    //     <h2 className="text-3xl font-bold mb-6">Transaction Content</h2>
    //     <p>这里是交易页面的内容...</p>
    //     {/* 你可以在这里添加交易相关的内容 */}
    //   </main>

    //   {/* Modal 弹出框 */}
    //   <WalletModal
    //     isOpen={isModalOpen}
    //     closeModal={closeModal}
    //     hasWallet={hasWallet}
    //   />
    // </div>
  );
}
