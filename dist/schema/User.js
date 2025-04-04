"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
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
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "orderedFood",
    },
    isVerified: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
});
exports.User = mongoose_1.default.model('user', UserSchema);
//# sourceMappingURL=User.js.map