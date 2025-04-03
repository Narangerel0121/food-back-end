import { Category } from "../schema/Category";

export const createCategory = async (req, res) => {
    const createdCategory = await Category.create(req.body);
    res.json({ success: true, category: createdCategory });
}

export const getCategory = async (_req, res) => {
    const category = await Category.find();
    res.json({ success: true, category: category });
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body);
        if (!category) {
            res.status(404).json({ message: "Category not Found" });
        }
        const updatedCategory = await Category.findById(id);
        res.status(200).json({ message: true, category: updatedCategory })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            res.status(404).json({ message: "Category not Found" })
        }
        res.status(200).json({ message: "Category deleted successfully", category })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCategoriesWithFoods = async (req, res) => {
    try {
        const categories = await Category.aggregate([
            {
                '$lookup': {
                    'from': 'foods',
                    'localField': '_id',
                    'foreignField': 'category',
                    'as': 'foods'
                }
            }
        ])
        res.status(200).json({ success: true, categories })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}