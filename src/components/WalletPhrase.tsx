"use client";
import { HDNodeWallet } from "ethers";

const WalletPhrase = ({
  phraseWords,
  hdNode,
  setPassword,
  onWalletPrivateKeyGenerated,
}: {
  phraseWords: string[];
  hdNode: HDNodeWallet | undefined;
  setPassword: (value: boolean) => void;
  onWalletPrivateKeyGenerated: (value: string) => void;
}) => {
  const handleConfirmMnemonic = () => {
    if (hdNode) {
      const wallet = hdNode.derivePath("0");
      onWalletPrivateKeyGenerated(wallet.privateKey);
      setPassword(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        Your Wallet Phrase:
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {phraseWords.map((word, index) => (
          <div
            key={index}
            className="bg-purple-100 text-purple-700 font-semibold py-2 px-4 rounded-lg"
          >
            {index + 1}. {word}
          </div>
        ))}
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white  py-2 px-4 rounded text-center mt-4"
        onClick={() => handleConfirmMnemonic()}
      >
        我记牢了
      </button>
    </div>
  );
};

export default WalletPhrase;
