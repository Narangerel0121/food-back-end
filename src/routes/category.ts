import express from "express";
import { createCategory, deleteCategory, getCategoriesWithFoods, getCategory, updateCategory } from "../controller/category";
import { checkToken } from "../middleware/check-token";

const categoryRouter = express();
categoryRouter.post('/', checkToken, createCategory).get('/', getCategory).put('/:id', updateCategory).delete('/:id', deleteCategory).get('/with-foods', getCategoriesWithFoods);

export { categoryRouter };