import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "orderId"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },
    totalPrice: {
        type: Number,
        required: true
    },
    foodOrderItems: {
        type: [],
        required: true
    },
    status: {
        type: String,
        enum: ["Delivered", "Cancelled", "Pending"]
    }
},
    {
        timestamps: true

    });
export const Order = mongoose.model('order', OrderSchema);


