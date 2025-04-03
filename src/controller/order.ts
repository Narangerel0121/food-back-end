import { Order } from "../schema/Order"

export const getOrder = async(_req, res) => {
   const order = await Order.find();
   res.json({success: true, order})
} 

export const createOrder = async(req, res) => {
    const order = await Order.create(req.body);
    res.json({message: "Created order successfully", order})
}