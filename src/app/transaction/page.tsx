"use client";
import React, { useState } from "react";
import Send from "./components/Send";
import Receive from "./components/Receive";
import Swap from "./components/Swap";
import Bridge from "./components/Bridge";

const TransactionPage = () => {
  const [activeTab, setActiveTab] = useState("send"); // 当前激活的选项卡

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold my-6">Transaction Page</h1>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("send")}
          className={`py-2 px-4 rounded ${
            activeTab === "send" ? "bg-purple-700 text-white" : "bg-gray-300"
          }`}
        >
          Send
        </button>
        <button
          onClick={() => setActiveTab("receive")}
          className={`py-2 px-4 rounded ${
            activeTab === "receive" ? "bg-purple-700 text-white" : "bg-gray-300"
          }`}
        >
          Receive
        </button>
        <button
          onClick={() => setActiveTab("swap")}
          className={`py-2 px-4 rounded ${
            activeTab === "swap" ? "bg-purple-700 text-white" : "bg-gray-300"
          }`}
        >
          Swap
        </button>
        <button
          onClick={() => setActiveTab("bridge")}
          className={`py-2 px-4 rounded ${
            activeTab === "bridge" ? "bg-purple-700 text-white" : "bg-gray-300"
          }`}
        >
          Bridge
        </button>
      </div>
      {/* 根据当前激活的选项卡显示不同的组件 */}
      {activeTab === "send" && <Send />}
      {activeTab === "receive" && <Receive />}
      {activeTab === "swap" && <Swap />}
      {activeTab === "bridge" && <Bridge />}
    </div>
  );
};

export default TransactionPage;
