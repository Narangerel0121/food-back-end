import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category",
    },
});
export const Food = mongoose.model('food', FoodSchema)