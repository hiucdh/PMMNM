import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const data = { username, email, password };
            const res = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (res.ok) {
                alert("Đăng ký thành công!");
                navigate("/login");
            } else {
                alert(result.message || "Đăng ký thất bại!");
            }
        } catch (err) {
            console.error(err);
            alert("Đã xảy ra lỗi khi kết nối!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Khung form */}
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-[1.01]">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
                    Đăng Ký Tài Khoản
                </h2>
                <p className="text-center text-gray-500 text-sm mb-6">
                    Nhập thông tin của bạn để tạo tài khoản mới
                </p>

                {/* Username */}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Tên người dùng
                    </label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                        placeholder="Nhập tên của bạn"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                        placeholder="Nhập email của bạn"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                        placeholder="Nhập mật khẩu"
                    />
                </div>

                {/* Nút đăng ký */}
                <button
                    onClick={handleSubmit}
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200 ease-in-out"
                >
                    Đăng Ký
                </button>

                {/* Link đăng nhập */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Đã có tài khoản?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        className="text-indigo-600 hover:text-indigo-500 font-medium transition"
                    >
                        Đăng nhập ngay
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
