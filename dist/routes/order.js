"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_1 = require("../controller/order");
const orderRouter = (0, express_1.default)();
exports.orderRouter = orderRouter;
orderRouter.get('/', order_1.getOrder).post('/', order_1.createOrder);
//# sourceMappingURL=order.js.map