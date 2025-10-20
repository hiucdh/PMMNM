import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
            <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 transition duration-300 hover:shadow-2xl">
                {/* Hình ảnh minh họa */}
                <div className="flex-1">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="About us"
                        className="rounded-xl shadow-lg object-cover w-full h-80 md:h-96"
                    />
                </div>

                {/* Nội dung giới thiệu */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        Về Chúng Tôi
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Chúng tôi là một đội ngũ đam mê công nghệ, sáng tạo và tận tâm với
                        việc mang lại những giải pháp web hiện đại và hiệu quả. Mục tiêu của
                        chúng tôi là giúp người dùng trải nghiệm công nghệ một cách dễ dàng
                        và thú vị nhất.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-600">
                                🎯 Sứ mệnh
                            </h3>
                            <p className="text-gray-600">
                                Mang đến những sản phẩm chất lượng, trực quan và thân thiện với
                                người dùng, góp phần cải thiện trải nghiệm số cho mọi người.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-600">
                                🌱 Tầm nhìn
                            </h3>
                            <p className="text-gray-600">
                                Trở thành đơn vị tiên phong trong lĩnh vực phát triển ứng dụng
                                web tại Việt Nam, hướng tới tiêu chuẩn quốc tế.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-600">
                                🤝 Đội ngũ
                            </h3>
                            <p className="text-gray-600">
                                Gồm những lập trình viên trẻ trung, sáng tạo, luôn sẵn sàng học
                                hỏi và không ngừng đổi mới để mang lại giá trị tốt nhất.
                            </p>
                        </div>
                    </div>

                    <button
                        className="mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 hover:shadow-lg transition duration-200"
                    >
                        Liên hệ với chúng tôi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
