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

dotenv.config();
const app = express();
const PORT = 8000;
app.use(express.json());

// const users = [
//     {
//         _id: 1,
//         name: "Narangerel",
//         age: 19,
//         email: "narangerelbumnasan@gmail.com",
//         address: {
//             current: "UB",
//             old: "DZ",
//         },
//         tags: ["user", "admin"]
//     },
//     {
//         _id: 2,
//         name: "Narantsatsaralt",
//         age: 22,
//         email: "narantsatsraltbumnasan@gmail.com",
//         address: {
//             current: "UB",
//             old: "DZ",
//         },
//         tags: ["user"]
//     },
//     {
//         _id: 3,
//         name: "Samjaadamba",
//         age: 19,
//         email: "samjaadambabumnasan@gmail.com",
//         address: {
//             current: "UB",
//             old: "DZ",
//         },
//         tags: ["user"]
//     }
// ]

// app.get('/', (_req: Request, res: Response) => {
//     //    res.send("Hello from Naka"); // text uyed
//     res.json({ message: "Hello from Nakanim" }) // json uyed
// })

// app.get('/users', (_req: Request, res: Response) => {
//     res.json({ success: true, users })
// })

// app.get('/users/:id', (req: Request, res: Response) => {
//     const { params } = req;
//     const user = users.find((user) => (user._id == params.id));
//     if (!user) {
//         res.status(404).json({ success: "error", message: "User not fount" })
//     }
//     res.json({ success: true, user });
// })

// app.put('/users/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     // console.log(req.body);
//     const user = users.filter((user, index) => {
//         if (user._id == Number(id)) {
//             const updatedUser = { ...user, ...req.body };
//             users[index] = updatedUser
//         }
//     })
//     res.json({ message: "successful update", users })
// });

// app.delete('/users/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const unDeletedUsers = users.filter((user) => {
//         if (user._id != Number(id)) {
//             return user
//         }
//     })
//     res.json({ message: "amjilttai ustgagdlaa", unDeletedUsers })
// })

// app.post('/users', (req: Request, res: Response) => {
//     const newUser = { ...req.body };
//     const moreUsers = [...users, newUser]
//     res.json({ message: "amjilttai nemegdlee", moreUsers })
// })

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

// app.delete('/foods/:id', async(req, res) => {
//     try {
//         const { id } = req.params;
//         const food = await Food.findByIdAndDelete(id);
//         if(!food) {
//             res.status(404).json({message: "Food not found"})
//         }
//         res.status(200).json({message: "Food deleted successfully", food})
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }

//     res.json({message: "amjilttai ustgagdlaa"});
// });

// app.put('/api/v1/foods/:id', async(req, res) => {
//     try {
//         const { id } = req.params;
//         const food = await Food.findByIdAndUpdate(id, req.body);
//         if(!food) {
//             res.status(404).json({message: "Food not found"});
//         }
//         const updatedFood = await Food.findById(id);
//         res.status(200).json({message: "Food updated successfully", updatedFood: updatedFood});
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

app.listen(PORT, async () => {
    await connection()
    console.log(`Server is running on ${PORT}`)
})