"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFood = exports.updateFood = exports.getFoods = exports.createFood = void 0;
const Food_1 = require("../schema/Food");
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdFood = yield Food_1.Food.create(req.body);
    res.json({ success: true, food: createdFood });
});
exports.createFood = createFood;
const getFoods = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield Food_1.Food.find().populate('category');
    res.json({ message: true, foods });
});
exports.getFoods = getFoods;
const updateFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const food = yield Food_1.Food.findByIdAndUpdate(id, req.body);
        if (!food) {
            res.status(404).json({ message: "Food not found" });
        }
        const updatedFood = yield Food_1.Food.findById(id);
        res.status(200).json({ message: "Food updated successfully", updatedFood });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateFood = updateFood;
const deleteFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const food = yield Food_1.Food.findByIdAndDelete(id);
        if (!food) {
            res.status(404).json({ message: "Food not found" });
        }
        res.status(200).json({ message: "Food deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteFood = deleteFood;
//# sourceMappingURL=food.js.map