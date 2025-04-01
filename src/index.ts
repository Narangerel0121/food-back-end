import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Food } from "./schema/Food";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const port = 8000;
const app = express();

// const food = [
//     {
//         _id: {},
//         foodName: "Beef Steak",
//         price: 23000 + '₮',
//         image: 'food.png',
//         ingredients: 'beef',
//         category: {},
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     },
//     {
//         _id: {},
//         foodName: "Smirk",
//         price: 25000 + '₮',
//         image: 'food_onion.png',
//         ingredients: 'mutton',
//         category: {},
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     }
// ]
app.use(express.json());


app.get('/', (_req: Request, res: Response) => {
    res.json({ message: "hello" });
});

// app.delete('/food', (_req: Request, res: Response) => {
//     res.json({message: "amjilttai ustgagdlaa"})
// })

app.get('/foods', async (req, res) => {
    const foods = await Food.find();
    res.json({ success: true, foods })
})

app.post('/food', async (req, res) => {
    const food = await Food.create(req.body);
    // console.log(req.body);
    res.json({ success: true, food })
});

// app.delete('/food/:id', async (req, res) => {
//     const {id} = req.params;
//     res.json("Amjillttai ustgagdlaa")
// })

app.put('/food/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const food = Food.findByIdAndUpdate(id, req.body);
        if (!food) {
            return res.status(404).json({ message: "Food is not found" })
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
})

app.listen(port, async () => {
    const connectDb = async () => {
        try {
            await mongoose.connect(
                MONGODB_URI
            );

            console.log("Data connection success")
        } catch (error) {
            console.log(error);
        }
    }
    connectDb()
})

app.get('/food', (_req: Request, res: Response) => {
    res.json({ success: true });
})

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
