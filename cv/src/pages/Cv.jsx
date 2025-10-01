import React from "react";
import anh from "../assets/anh.jpg"
const Cv = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full p-8">

                <div className="flex items-center gap-6 border-b pb-6">
                    <img
                        src={anh}
                        alt="avatar"
                        className="w-32 h-32 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Nguyễn Văn A</h1>
                        <p className="text-gray-500">Frontend Developer</p>
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                            <p>📧 22t1020607@husc.edu.vn</p>
                            <p>📞 0123 456 789</p>
                            <p>📍 Huế, Việt Nam</p>
                        </div>
                    </div>
                </div>

                {/* Nội dung chính */}
                <div className="mt-6 space-y-6">

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            🎯 Mục tiêu nghề nghiệp
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Tôi mong muốn trở thành một lập trình viên Frontend chuyên nghiệp,
                            có thể xây dựng các ứng dụng web hiện đại, tối ưu trải nghiệm người dùng
                            và góp phần phát triển công ty.
                        </p>
                    </section>


                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            💼 Kinh nghiệm làm việc
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>
                                <p className="font-medium">Công ty ABC (2022 - nay)</p>
                                <p>- Vị trí: Frontend Developer</p>
                                <p>- Tham gia phát triển hệ thống quản lý khách hàng bằng React.</p>
                            </li>
                            <li>
                                <p className="font-medium">Công ty XYZ (2020 - 2022)</p>
                                <p>- Vị trí: Intern Developer</p>
                                <p>- Hỗ trợ bảo trì website và tối ưu giao diện.</p>
                            </li>
                        </ul>
                    </section>

                    {/* Kỹ năng */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            🛠️ Kỹ năng
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                HTML / CSS / JS
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                                ReactJS
                            </span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                                TailwindCSS
                            </span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">
                                Git / Github
                            </span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">
                                Node.js (basic)
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cv;
