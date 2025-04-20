import nodemailer from "nodemailer";
import { User } from "../schema/User";
import jwt from "jsonwebtoken";
import bcrypt from "jsonwebtoken";

export const resetRequest = async (req, res) => {
    const { userEmail } = req.body;

    const user = await User.findOne({ email: userEmail });
    if (!user) {
        res.json({ message: "User not found" })
    }

    const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: "1h",
    })

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "nrngrl0121@gmail.com",
            pass: "fpxaawgsxaibitnp",
        },
    });

    const info = await transporter.sendMail({
        from: "Food delivery service",
        to: "24lp3420@gmail.com",
        subject: "Reset passowrd",
        html: `
        <p>Click <a href="http://localhost:3000/reset-password?token=${token}">here</a></p>
        `,
    });

    console.log(info)

    res.json({ message: "Successfully sent" });
}

export const updatePassword = async (req, res) => {
    const SALT_ROUND = 12;

    const { id, password } = req.body;
    const salt = bcrypt.genSaltSync(SALT_ROUND);
    const hash = bcrypt.hashSync(password, salt);

    const user = await User.findByIdAndUpdate(id, { password: hash });

    res.status(200).json({ success: true, user });

}