import React, { useState, useEffect } from "react";
import { Wallet, JsonRpcProvider, ethers } from "ethers";

const UNISWAP_V3_ROUTER_ADDRESS = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Uniswap V3 Router on Sepolia
const tokenOptions = [
  {
    name: "ETH",
    address: "0x0000000000000000000000000000000000000000",
    decimals: 18,
  }, // Sepolia WETH 地址
  {
    name: "USDT",
    address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    decimals: 6,
  }, // Sepolia USDT 地址
  {
    name: "ChainLink",
    address: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    decimals: 18,
  }, // Sepolia DAI 地址
  // 更多代币...
];

const erc20Abi = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
];
// 账户的私钥和地址
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const infuraProvider = process.env.NEXT_PUBLIC_INFURA_URL;

const provider = new JsonRpcProvider(infuraProvider);

const SwapV3 = () => {
  const [tokenIn, setTokenIn] = useState("");
  const [tokenOut, setTokenOut] = useState("");
  const [amountIn, setAmountIn] = useState("");
  const [balance, setBalance] = useState("");
  const [message, setMessage] = useState(""); // 新增状态以存储消息
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tokenIn) {
      getBalance(tokenIn);
    }
  }, [tokenIn]);

  if (!privateKey) {
    return "Please set your private key in the .env file";
  }

  const signer = new Wallet(privateKey, provider);

  // 获取用户代币或ETH的余额
  const getBalance = async (tokenAddress: string) => {
    const address = await signer.getAddress();

    if (tokenAddress === "0x0000000000000000000000000000000000000000") {
      // 获取 ETH 余额
      const ethBalance = await provider.getBalance(address);
      setBalance(ethers.formatEther(ethBalance));
    } else {
      // 获取 ERC-20 代币余额
      const tokenContract = new ethers.Contract(
        tokenAddress,
        erc20Abi,
        provider
      );
      const balance = await tokenContract.balanceOf(address);
      const tokenDecimals = await tokenContract.decimals(); // 获取代币的小数位数
      setBalance(ethers.formatUnits(balance, tokenDecimals));
    }
  };

  const handleSwap = async () => {
    try {
      if (!tokenIn || !tokenOut || !amountIn) {
        console.error("Please select tokens and enter an amount");
        return;
      }

      setLoading(true);

      const amountInWei = ethers.parseUnits(amountIn.toString(), 18); // 假设代币精度为18

      const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

      // Uniswap V3 Router 合约
      const uniswapV3Router = new ethers.Contract(
        UNISWAP_V3_ROUTER_ADDRESS,
        [
          "function exactInputSingle(tuple(address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)",
        ],
        signer
      );

      const tx = await uniswapV3Router.exactInputSingle({
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        fee: 3000, // 手续费等级 (0.3%)
        recipient: await signer.getAddress(), // 你的账户地址
        deadline: deadline,
        amountIn: amountInWei,
        amountOutMinimum: 0, // 设置为0，表示不进行滑点保护
        sqrtPriceLimitX96: 0, // 没有限制
      });

      const receipt = await tx.wait();
      console.log(`Transaction successful: ${receipt.hash}`);

      setLoading(false);
      setMessage("交换成功！"); // 更新消息状态
    } catch (error) {
      console.error("Swap failed", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Swap with Uniswap V3</h2>

      {/* From Token Dropdown */}
      <select
        value={tokenIn}
        onChange={(e) => setTokenIn(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-2 w-full"
      >
        <option value="">Select Token to Swap From</option>
        {tokenOptions.map((token) => (
          <option key={token.address} value={token.address}>
            {token.name}
          </option>
        ))}
      </select>

      {/* 显示用户的余额 */}
      {tokenIn && (
        <div className="mb-4">
          <span className="text-sm text-gray-600">Balance: {balance}</span>
        </div>
      )}

      {/* To Token Dropdown */}
      <select
        value={tokenOut}
        onChange={(e) => setTokenOut(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-2 w-full"
      >
        <option value="">Select Token to Swap To</option>
        {tokenOptions.map((token) => (
          <option key={token.address} value={token.address}>
            {token.name}
          </option>
        ))}
      </select>

      {/* Amount Input */}
      <input
        type="text"
        placeholder="Amount to Swap"
        value={amountIn}
        onChange={(e) => setAmountIn(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-2 w-full"
      />
      {message && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}
      <button
        onClick={handleSwap}
        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
      >
        {loading ? "Swaping..." : "Swap"}
      </button>
    </div>
  );
};

export default SwapV3;
