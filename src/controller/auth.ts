import { User } from "../schema/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUND = 12;

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const salt = bcrypt.genSaltSync(SALT_ROUND);
        const hash = bcrypt.hashSync(password, salt);
        // console.log(req.body);

        const user = await User.create({ ...req.body, password: hash });

        res.json({ success: true, user });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ success: false, error: "Email exist" });
            return;
        }
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
        res.status(404).json({ success: false, error: "User or password not found" })
    }

    const isCompare = bcrypt.compareSync(password, user.password);
    if (!isCompare) {
        res.status(401).json({ success: false, error: "User or password is wrong" })
    }

    const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '1h' });
    console.log(token);
    res.status(200).json({ success: true, token })
}