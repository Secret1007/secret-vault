import { networks } from "../config/networks"; // 假设之前配置了不同链的 RPC URL

export function connectToChain(chain: string) {
  const network = networks[chain];
  if (!network) {
    throw new Error(`Network ${chain} not supported`);
  }
  return network || "ethereum";

}
