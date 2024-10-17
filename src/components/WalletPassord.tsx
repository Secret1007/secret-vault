import { encryptAndStorePrivateKey } from "@/utils/crypto";
import React, { useState } from "react";

const SetPasswordCard = ({
  privateKey,
  handleReturnClick,
}: {
  privateKey: string;
  handleReturnClick: () => void;
}) => {
  const [password, setPassword] = useState(""); // 用于存储密码的状态
  const [error, setError] = useState(""); // 用于显示错误信息
  const [isPasswordSet, setIsPasswordSet] = useState(false); // 判断密码是否已设置

  const handleLoginClick = () => {
    if (!password) {
      setError("Password cannot be empty");
      return;
    }
    // 模拟登录逻辑
    console.log("Logging in with password:", password, privateKey);
    encryptAndStorePrivateKey(privateKey, password);
    setIsPasswordSet(true); // 设置密码已完成
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {isPasswordSet ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple-700 mb-4">
              Welcome to the App!
            </h1>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
              Set Your Password
            </h2>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(""); // 清空错误
                }}
              />
              {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleLoginClick}
                className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              >
                Login
              </button>
              <button
                onClick={handleReturnClick}
                className="bg-gray-100 text-gray-400 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              >
                Return
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SetPasswordCard;
