"use client";
import React from "react";

const Receive = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Receive</h2>
      <p>
        Your address: <span className="font-semibold">0xYourAddressHere</span>
      </p>
      <p>Share this address with others to receive funds.</p>
    </div>
  );
};

export default Receive;
