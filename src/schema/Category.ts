import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
    },
    name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

export const Category = mongoose.model('category', CategorySchema)