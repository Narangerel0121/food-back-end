import { Category } from "../schema/Category";

export const createCategory = async (req, res) => {
    const createdCategory = await Category.create(req.body);
    res.json({success: true, category: createdCategory});
}