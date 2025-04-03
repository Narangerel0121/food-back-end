import { User } from "../schema/User"

export const getUser = async(_req, res) => {
const user = await User.find();
res.json({success: true, user})
}