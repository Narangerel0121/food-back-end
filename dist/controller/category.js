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
exports.getCategoriesWithFoods = exports.deleteCategory = exports.updateCategory = exports.getCategory = exports.createCategory = void 0;
const Category_1 = require("../schema/Category");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdCategory = yield Category_1.Category.create(req.body);
    res.json({ success: true, category: createdCategory });
});
exports.createCategory = createCategory;
const getCategory = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Category_1.Category.find();
    res.json({ success: true, category: category });
});
exports.getCategory = getCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const category = yield Category_1.Category.findByIdAndUpdate(id, req.body);
        if (!category) {
            res.status(404).json({ message: "Category not Found" });
        }
        const updatedCategory = yield Category_1.Category.findById(id);
        res.status(200).json({ message: true, category: updatedCategory });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const category = yield Category_1.Category.findByIdAndDelete(id);
        if (!category) {
            res.status(404).json({ message: "Category not Found" });
        }
        res.status(200).json({ message: "Category deleted successfully", category });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteCategory = deleteCategory;
const getCategoriesWithFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_1.Category.aggregate([
            {
                '$lookup': {
                    'from': 'foods',
                    'localField': '_id',
                    'foreignField': 'category',
                    'as': 'foods'
                }
            }
        ]);
        res.status(200).json({ success: true, categories });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getCategoriesWithFoods = getCategoriesWithFoods;
//# sourceMappingURL=category.js.map