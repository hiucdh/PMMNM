import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingEmail = await user.findOne({ email });
        if (existingEmail) return res.status(400).json({ message: "Email đã được sử dụng" });
        const existingUsername = await user.findOne({ username });
        if (existingUsername) return res.status(400).json({ message: "Tên đăng nhập đã được sử dụng" });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new user({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "Đăng ký thành công" });
    } catch (error) {
        res.status(500).json({ message: 'error' });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "Email hoặc mật khẩu không đúng" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(404).json({ message: "Email hoặc mật khẩu không đúng" });
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        res.status(200).json({ message: "Đăng nhập thành công", token, user: existingUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error' });
    }
}
