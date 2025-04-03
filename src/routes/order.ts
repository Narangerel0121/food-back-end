import express from "express";
import { createOrder, getOrder } from "../controller/order";

const orderRouter = express();
orderRouter.get('/', getOrder).post('/', createOrder);

export { orderRouter }