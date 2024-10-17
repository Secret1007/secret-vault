"use client";
import { useEffect, useState } from "react";
import { createHDNodeFromRandomMnemonic } from "@/utils/wallet";
import WalletPhrase from "@/components/WalletPhrase";
import WalletPassord from "@/components/WalletPassord";

const CreatWalletPage = () => {
  const [phrase, setPhrase] = useState(""); // 使用 setPhrase 更新状态
  const [password, setPassword] = useState(false); // 用于存储密码的状态
  const [privateKey, setPrivateKey] = useState(""); // 用于存储私钥的状态

  const handleReturnClick = () => {
    setPassword(false); // 清空密码输入框
  };

  useEffect(() => {
    // 自动执行的函数
    try {
      const { phrase = "" } = createHDNodeFromRandomMnemonic(); // 调用函数并获取助记词
      setPhrase(phrase); // 使用 setPhrase 更新状态
    } catch (error) {
      console.error("Error creating wallet:", error);
    }
  }, []); // 空依赖数组，确保只在组件挂载时执行
  // 将 phrase 字符串转换为数组
  const phraseWords = phrase ? phrase.trim().split(/\s+/) : [];

  // 接收从子组件传递回来的钱包地址
  const handleWalletPrivateKey = (prikey: string) => {
    setPrivateKey(prikey);
  };

  return (
    <div className="">
      {phrase ? (
        // 如果有助记词，显示助记词部分
        <div className="flex justify-center items-center h-screen bg-gray-100">
          {!password ? (
            <div className="flex flex-col items-center border border-purple-500 rounded-lg shadow-lg overflow-hidden p-8">
              <WalletPhrase
                phraseWords={phraseWords}
                setPassword={setPassword}
                onWalletPrivateKeyGenerated={handleWalletPrivateKey}
              />
            </div>
          ) : (
            <WalletPassord
              handleReturnClick={handleReturnClick}
              privateKey={privateKey}
            />
          )}
        </div>
      ) : (
        // 如果没有助记词，显示 "Creating Wallet..."
        <div className="text-xl font-semibold text-purple-700">
          Creating Wallet...
        </div>
      )}
    </div>
  );
};

export default CreatWalletPage;
