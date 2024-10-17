import { Wallet, HDNodeWallet } from "ethers";
// import 
// import useLocalStorageState from 'use-local-storage-state'


/**
 * 生成助记词并创建 HDNode
 */
const createHDNodeFromRandomMnemonic = () => {
  // 创建一个随机钱包并提取助记词
  const wallet = Wallet.createRandom();
  const mnemonic = wallet.mnemonic;

  if (!mnemonic) {
    console.error("未生成助记词");
    return {};
  }

  const phrase = mnemonic.phrase;
  const hdNode = HDNodeWallet.fromMnemonic(mnemonic);

  console.log("生成的助记词:", phrase);
  return { phrase, hdNode };
};

/**
 * 从 HDNode 派生新的钱包
 */
const deriveWalletFromHDNode = (hdNode: HDNodeWallet, index: number = 0) => {
  if (!hdNode) {
    console.error("HDNode 无效");
    return null;
  }

  // 基于给定的索引派生新的钱包
  const wallet = hdNode.derivePath(`${index}`);
  console.log(`派生路径 m/44'/60'/0'/0/${index} 的钱包地址:`, wallet.address);

  return wallet;
};

/**
 * Creates a wallet from a given mnemonic phrase.
 * 
 * @param {string} phrase - The mnemonic phrase to create the wallet from.
 * @returns {Wallet} The created wallet.
 */
const recoverWalletFromPhrase = (phrase?: string) => {
  try {
    if (!phrase) {
      console.error("请输入助记词");
      return;
    }
    // 使用助记词创建钱包
    const walletFromMnemonic = Wallet.fromPhrase(phrase);
    console.log("地址:", walletFromMnemonic.address);
  } catch (error) {
    console.error(error);
  }
};

// const cryptPassword = (password: string) => {
//   return password;
// }

export { createHDNodeFromRandomMnemonic, deriveWalletFromHDNode, recoverWalletFromPhrase }