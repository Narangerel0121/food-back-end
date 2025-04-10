import jwt from "jsonwebtoken";
export const checkToken = async (req, res, next) => {
    try {
        if (!req.headers['authorization']) {
            res.status(401).json({ success: false, msg: "Unauthorization" })
            return;
        }

        const [_, token] = req.headers['authorization'].split(' ')

        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
        if (decode.user.role != "ADMIN") {
            res.status(401).json({ success: false, msg: "Unauthorization" });
            return
        }
        next();

    } catch (error) {
        res.status(401).json({ sucess: false, msg: error.message })
    }
}