"use client";
import React, { useState } from "react";
import { ethers } from "ethers";

// 账户的私钥和地址
const senderPrivateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const infuraProvider = process.env.NEXT_PUBLIC_INFURA_URL;

const provider = new ethers.JsonRpcProvider(infuraProvider);

const Send = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState(""); // 新增状态以存储消息
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!senderPrivateKey) {
      console.error("No private key found in environment variables.");
      return;
    }
    setLoading(true);
    // 创建一个钱包对象
    const wallet = new ethers.Wallet(senderPrivateKey, provider);

    // 转账交易参数
    const tx = {
      to: recipient,
      value: ethers.parseEther(amount), // 转账的以太币数量
    };

    try {
      // 发送交易
      const transactionResponse = await wallet.sendTransaction(tx);
      console.log("Transaction hash:", transactionResponse.hash);

      // 等待交易确认
      const receipt = await transactionResponse.wait();
      console.log("Transaction confirmed!", receipt);
      setLoading(false);
      setMessage("发送成功！"); // 更新消息状态
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Send</h2>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4 w-full"
      />
      <button
        onClick={handleSend}
        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {message && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}
    </div>
  );
};

export default Send;
