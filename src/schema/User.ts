import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["User", "Admin"]
    },
    orderedFoods: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "orderedFood",
    },
    isVerified: {
        type: Boolean,
        required: true
    }
},
    {
        timestamps: true,
    })

    const User = new mongoose.Model('user', UserSchema);
    export { User }

