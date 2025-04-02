import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: String,
},
{
    timestamps: true
}
)

export const Category = mongoose.model('category', CategorySchema)