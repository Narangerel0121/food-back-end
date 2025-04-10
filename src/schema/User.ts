import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // role: {
    //     type: String,
    //     enum: ["USER", "ADMIN"]
    // },
    // orderedFoods: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "orderedFood",
    // },
    // isVerified: {
    //     type: Boolean,
    //     required: true
    // }
},
    {
        timestamps: true,
    })

export const User = mongoose.model('user', UserSchema);


