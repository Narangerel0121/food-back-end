import express from "express";
import { createFood, deleteFood, getFoods, updateFood } from "../controller/food";
import { checkToken } from "../middleware/check-token";

const foodRouter = express();
foodRouter.post('/', checkToken, createFood).get('/', getFoods).put('/:id', updateFood).delete('/:id', deleteFood);

export { foodRouter };