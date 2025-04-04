"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = __importDefault(require("express"));
const food_1 = require("../controller/food");
const foodRouter = (0, express_1.default)();
exports.foodRouter = foodRouter;
foodRouter.post('/', food_1.createFood).get('/', food_1.getFoods).put('/:id', food_1.updateFood).delete('/:id', food_1.deleteFood);
//# sourceMappingURL=food.js.map