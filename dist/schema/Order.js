"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "orderId"
    },
    user: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
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
}, {
    timestamps: true
});
exports.Order = mongoose_1.default.model('order', OrderSchema);
//# sourceMappingURL=Order.js.map