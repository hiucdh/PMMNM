import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// Import routes
import memberRoutes from "./routes/memberRoutes.js";
import familyRoutes from "./routes/familyRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Sử dụng routes
app.use("/api", memberRoutes);
app.use("/api", familyRoutes);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server running on port ${process.env.PORT || 8080}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });