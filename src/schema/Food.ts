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
    image: {
        type: String,
        required: false,
    },
    ingredients: {
        type: [],
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