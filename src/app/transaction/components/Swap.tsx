"use client";
import { useState } from "react";

const Swap = () => {
  const [amountIn, setAmountIn] = useState("");
  const [amountOut, setAmountOut] = useState("");

  const handleSwap = () => {
    // 处理交换逻辑
    console.log(`Swapping ${amountIn} for ${amountOut}`);
    // 这里可以调用交换函数
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Swap</h2>
      <input
        type="text"
        placeholder="Amount to Swap"
        value={amountIn}
        onChange={(e) => setAmountIn(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Expected Amount"
        value={amountOut}
        onChange={(e) => setAmountOut(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4 w-full"
      />
      <button
        onClick={handleSwap}
        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
      >
        Swap
      </button>
    </div>
  );
};

export default Swap;
