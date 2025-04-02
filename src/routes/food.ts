import express from "express";
import { createFood, deleteFood, getFoods, updateFood } from "../controller/food";

const foodRouter = express();
// foodRouter.post('/', createFood).get('/', getFoods);
foodRouter.post('/', createFood).get('/', getFoods).put('/:id', updateFood).delete('/:id', deleteFood);

export { foodRouter };