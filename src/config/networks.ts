// config/networks.ts
export interface NetworkConfig {
  name: string;
  chainId: number;
  rpcUrl: string;
}

export const networks: Record<string, NetworkConfig> = {
  ethereum: {
    name: "Ethereum",
    chainId: 1, // Mainnet
    rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
  },
  bsc: {
    name: "Binance Smart Chain",
    chainId: 56, // BSC Mainnet
    rpcUrl: "https://bsc-dataseed.binance.org/"
  },
  polygon: {
    name: "Polygon",
    chainId: 137, // Polygon Mainnet
    rpcUrl: "https://polygon-rpc.com/"
  }
};
