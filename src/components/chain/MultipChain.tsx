// pages/index.tsx
import { networks } from "@/config/networks";
// import { connectToChain } from "@/utils/connectChain";
import { useState } from "react";

const MultipChain: React.FC = () => {
  const [network, setNetwork] = useState<string>("ethereum");

  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
      <h1 className="text-xl font-semibold text-purple-700 mb-4">
        Multi-Chain Wallet
      </h1>
      <select
        onChange={(e) => setNetwork(e.target.value)}
        value={network}
        className="block w-full bg-purple-100 border border-purple-300 text-purple-700 py-2 px-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {Object.keys(networks).map((key) => (
          <option key={key} value={key}>
            {networks[key].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultipChain;
