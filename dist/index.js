"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Food_1 = require("./schema/Food");
const food_1 = require("./routes/food");
const connection_1 = require("./utils/connection");
const category_1 = require("./routes/category");
const dotenv_1 = __importDefault(require("dotenv"));
const Category_1 = require("./schema/Category");
const order_1 = require("./routes/order");
const user_1 = require("./routes/user");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8000;
app.use(express_1.default.json());
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
app.use('/api/v1/foods', food_1.foodRouter);
// app.use('/api/v2/food', foodRouter);
app.use('/api/v1/categories', category_1.categoryRouter);
app.use('/api/v1/orders', order_1.orderRouter);
app.use('/api/v1/users', user_1.userRouter);
app.get('/', (_req, res) => {
    res.json({ message: "Hello from Nakanim" }); // json uyed
});
app.get('/api/v1/foods', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield Food_1.Food.find();
    res.json({ message: "Got foods successfully", foods });
}));
app.get('/api/v1/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield Category_1.Category.find();
    res.json({ message: "Got all categories successfully", categories });
}));
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
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connection)();
    console.log(`Server is running on ${PORT}`);
}));
//# sourceMappingURL=index.js.map