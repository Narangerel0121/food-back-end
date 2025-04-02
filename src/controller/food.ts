import { Food } from "../schema/Food";

export const createFood = async (req, res) => {
    const createdFood = await Food.create(req.body);
    res.json({success: true, food: createdFood});
}

export const getFoods = async (_req, res) => {
    const foods = await Food.find().populate('category');

    res.json({message: true, foods})
}

export const updateFood = async(req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findByIdAndUpdate(id, req.body);
        if(!food) {
            res.status(404).json({message: "Food not found"});
        }
        const updatedFood = await Food.findById(id);
        res.status(200).json({message: "Food updated successfully", updatedFood});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteFood = async(req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findByIdAndDelete(id);
        if(!food) {
            res.status(404).json({message: "Food not found"});
        }
        res.status(200).json({message: "Food deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}