"use client";
import useHdNodeStore from "@/store";
import { useState } from "react";

const Transaction = () => {
  const [privateKey, setPrivateKey] = useState("");
  const hdNode = useHdNodeStore((state) => state.hdNode);
  if (!hdNode) {
    return <div>请先创建钱包</div>;
  } else {
    const wallet = hdNode.derivePath("0");
    setPrivateKey(wallet.privateKey);
  }

  return <div>Transaction:{privateKey}</div>;
};

export default Transaction;
