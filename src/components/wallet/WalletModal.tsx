import LoginBox from "@/components/wallet/LoginBox";
import CreatWalletBox from "./CreateWalletBox";

const WalletModal = ({
  isOpen,
  closeModal,
  hasWallet,
}: {
  isOpen: boolean;
  closeModal: () => void;
  hasWallet: boolean;
}) => {
  if (!isOpen) return null; // 如果 modal 没有打开则不渲染

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className=" bg-purple-400 text-white px-2   hover:bg-purple-600 focus:outline-none rounded-full"
          >
            x
          </button>
        </div>
        {hasWallet ? (
          <div>
            {/* 登录界面内容 */}
            <LoginBox />
          </div>
        ) : (
          <div>
            {/* Wallet界面 */}
            <CreatWalletBox />
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletModal;
