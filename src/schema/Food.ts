import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
foodName: String,
price: Number,
});

export const Food =  mongoose.model('food', FoodSchema)