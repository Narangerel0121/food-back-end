import { Food } from "../schema/Food";

export const createFood = async (req, res) => {
    const createdFood = await Food.create(req.body);
    res.json({success: true, food: createdFood});
}