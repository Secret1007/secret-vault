"use client";
import { useState } from "react";

const Bridge = () => {
  const [amount, setAmount] = useState("");
  const [chain, setChain] = useState("");

  const handleBridge = () => {
    // 处理桥接逻辑
    console.log(`Bridging ${amount} to ${chain}`);
    // 这里可以调用桥接函数
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bridge</h2>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Target Chain"
        value={chain}
        onChange={(e) => setChain(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4 w-full"
      />
      <button
        onClick={handleBridge}
        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
      >
        Bridge
      </button>
    </div>
  );
};

export default Bridge;
