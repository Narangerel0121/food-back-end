"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FoodSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
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
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "category",
    },
}, {
    timestamps: true
});
exports.Food = mongoose_1.default.model('food', FoodSchema);
//# sourceMappingURL=Food.js.map