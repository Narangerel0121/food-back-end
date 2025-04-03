import express from "express";
import { createCategory, deleteCategory, getCategoriesWithFoods, getCategory, updateCategory } from "../controller/category";

const categoryRouter = express();
categoryRouter.post('/', createCategory).get('/', getCategory).put('/:id', updateCategory).delete('/:id', deleteCategory).get('/with-foods', getCategoriesWithFoods);

export { categoryRouter };