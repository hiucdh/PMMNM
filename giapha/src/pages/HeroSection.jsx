import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 lg:w-5/12 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Kết <span className="text-blue-600">Nối</span> <br className="hidden sm:inline" />
                        các thế hệ gia đình
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Dễ dàng tạo, quản lý và khám phá sơ đồ cây gia phả của bạn. Lưu giữ truyền thống và di sản gia đình qua nhiều đời.
                    </p>

                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <button className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                            <Link to="/familytree">Bắt Đầu Ngay</Link>
                        </button>
                        <button className="px-6 py-3 text-lg font-semibold text-blue-600 bg-white border border-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition duration-300">
                            <Link to="/about">Tìm Hiểu Thêm</Link>
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-5/12 flex justify-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11 20V7.5L3 13.5V6H13V4H3C1.89543 4 1 4.89543 1 6V13.5C1 14.6046 1.89543 15.5 3 15.5H5V20H11ZM17 22H15V17H12V15H20V17H17V22Z" />
                        </svg>
                        <span className="absolute text-sm font-medium text-gray-500 mt-28">Sơ đồ Gia phả</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;