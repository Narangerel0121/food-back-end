import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "food",
    },
    foodName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category",
    },
},
    {
        timestamps: true
    }
);
export const Food = mongoose.model('food', FoodSchema)