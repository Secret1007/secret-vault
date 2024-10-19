import React, { useState } from "react";
import { useRouter } from "next/navigation"; // 用于页面跳转
import { decryptPrivateKeyFromStorage } from "@/utils/crypto";

// 模拟解密函数

const Login = () => {
  const [password, setPassword] = useState(""); // 存储输入的密码
  const [error, setError] = useState(""); // 用于显示错误信息
  const router = useRouter(); // 用于页面跳转

  const handleLogin = () => {
    if (!password) {
      setError("Password cannot be empty");
      return;
    }

    // 调用解密函数
    const isAuthenticated = decryptPrivateKeyFromStorage(password);

    if (isAuthenticated) {
      // 解密成功，跳转到交易页面
      router.push("/transaction");
    } else {
      // 解密失败，显示错误
      window.alert("Invalid password");
    }
  };

  return (
    <div className="flex justify-center items-center h-full flex-1">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          Login
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
              setError(""); // 清空错误信息
            }}
          />
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
        <button
          onClick={handleLogin}
          className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
