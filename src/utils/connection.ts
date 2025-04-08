import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
// console.log(MONGODB_URI)

export const connection = async () => {
            await mongoose.connect(MONGODB_URI);
            console.log("Database connection success");
    };