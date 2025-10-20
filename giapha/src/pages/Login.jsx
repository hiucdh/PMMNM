import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const data = { email, password };
            const res = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (res.ok && result.token) {
                localStorage.setItem("token", result.token);
                alert("Đăng nhập thành công!");
                navigate('/');
            } else {
                alert(result.message || "Đăng nhập thất bại!");
            }
        } catch (err) {
            console.error(err);
            alert("Đã xảy ra lỗi khi kết nối!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl transform transition duration-500 hover:scale-[1.01]">
                <h2 className="text-3xl font-extrabold text-center text-gray-800">
                    Đăng Nhập
                </h2>
                <p className="text-center text-gray-500 text-sm">
                    Vui lòng nhập thông tin của bạn
                </p>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
                        placeholder="Nhập email của bạn"
                    />
                </div>

                {/* Mật khẩu */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
                        placeholder="Nhập mật khẩu"
                    />
                </div>

                {/* Nút đăng nhập */}
                <div>
                    <button
                        onClick={handleSubmit}
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200 ease-in-out"
                    >
                        Đăng Nhập
                    </button>
                </div>

                {/* Quên mật khẩu / đăng ký */}
                <div className="text-sm text-center text-gray-600">
                    <p className="mt-2">
                        Chưa có tài khoản?{" "}
                        <Link to='/register' className="font-medium text-indigo-600 hover:text-indigo-500 transition">Đăng kí ngay</Link>
                        {/*className="font-medium text-indigo-600 hover:text-indigo-500 transition*/}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
