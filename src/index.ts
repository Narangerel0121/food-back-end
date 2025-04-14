import express, { Request, Response } from "express";
import { Food } from "./schema/Food";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";
import { categoryRouter } from "./routes/category";
import dotenv from "dotenv";
import { Category } from "./schema/Category";
import { orderRouter } from "./routes/order";
import { userRouter } from "./routes/user";
import { authRouter } from "./routes/auth";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8000;

app.use('/api/v1/foods', foodRouter);
// app.use('/api/v2/food', foodRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/users', userRouter);


app.get('/', (_req: Request, res: Response) => {
    res.json({ message: "Hello from Nakanim" }); // json uyed
})

app.get('/api/v1/foods', async(_req: Request, res: Response) => {
    const foods = await Food.find();
    res.json({message: "Got foods successfully", foods})
});

app.get('/api/v1/categories', async(req: Request, res: Response) => {
    const categories = await Category.find();
    res.json({message: "Got all categories successfully", categories})
})

app.listen(PORT, async () => {
    await connection()
    console.log(`Server is running on ${PORT}`)
})

