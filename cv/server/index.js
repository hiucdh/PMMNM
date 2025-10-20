import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cv_app";


app.use(cors());
app.use(express.json());


mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Kết nối MongoDB thành công"))
    .catch(err => console.error("❌ Lỗi MongoDB:", err));

app.get("/", (req, res) => {
    res.send("API is running");
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
