"use client";
import React, { useState } from "react";
const Send = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSend = () => {
    // 处理发送逻辑
    console.log(`Sending ${amount} to ${recipient}`);
    // 这里可以调用发送函数
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
        Send
      </button>
    </div>
  );
};

export default Send;
