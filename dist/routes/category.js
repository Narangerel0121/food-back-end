"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_1 = require("../controller/category");
const categoryRouter = (0, express_1.default)();
exports.categoryRouter = categoryRouter;
categoryRouter.post('/', category_1.createCategory).get('/', category_1.getCategory).put('/:id', category_1.updateCategory).delete('/:id', category_1.deleteCategory).get('/with-foods', category_1.getCategoriesWithFoods);
//# sourceMappingURL=category.js.map