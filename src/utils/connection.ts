import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connection = async () => {
            await mongoose.connect(MONGODB_URI);
            console.log("Database connection success");
    };