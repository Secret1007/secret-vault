"use client";
import { Mnemonic } from "ethers";
import { HDNodeWallet } from "ethers";
import { useState } from "react";
import { useRouter } from "next/navigation"; // 用于页面跳转

const RecoverWalletPage = () => {
  // 创建一个12个助记词的数组，每个助记词为空字符串
  const [mnemonics, setMnemonics] = useState(Array(12).fill(""));

  const router = useRouter(); // 用于页面跳转

  // 输入框变动时更新相应的助记词
  const handleChange = (index: number, value: string) => {
    const newMnemonics = [...mnemonics];
    newMnemonics[index] = value.trim(); // 移除多余空格
    setMnemonics(newMnemonics);
  };

  // 导入钱包逻辑
  const handleImportWallet = () => {
    const allFilled = mnemonics.every((word) => word !== ""); // 检查是否填满
    if (allFilled) {
      // 执行导入钱包逻辑，可以将助记词传递给相应的处理函数
      console.log("导入钱包助记词:", mnemonics);
      // 在这里执行导入钱包的具体逻辑

      console.log("恢复钱包时输入的助记词", mnemonics.join(" "));
      // 创建 Mnemonic 对象
      const mnemonic = Mnemonic.fromPhrase(mnemonics.join(" "));

      console.log("恢复钱包时创建的 Mnemonic 对象", mnemonic);
      // 用助记词恢复钱包
      const recoveredWallet =
        HDNodeWallet.fromMnemonic(mnemonic).derivePath("0");
      console.log("恢复的钱包地址:", recoveredWallet.address);
      // 解密成功，跳转到交易页面
      router.push("/transaction");
    } else {
      alert("请输入完整的12个助记词");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          Import Wallet
        </h2>
        {/* 助记词输入区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {mnemonics.map((word, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Word ${index + 1}`}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={word}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        {/* 导入钱包按钮 */}
        <button
          onClick={handleImportWallet}
          className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full"
        >
          导入钱包
        </button>
      </div>
    </div>
  );
};

export default RecoverWalletPage;
