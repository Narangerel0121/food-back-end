import express from "express";
import { createCategory } from "../controller/category";

const categoryRouter = express();
categoryRouter.post('/', createCategory);

export { categoryRouter };