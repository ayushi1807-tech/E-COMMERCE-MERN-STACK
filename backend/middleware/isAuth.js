import jwt from 'jsonwebtoken'

const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;

        if (!token) {
            return res.status(400).json({ messege: "User does not have token" });
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!verifyToken) {
            return res.status(400).json({ messege: "User does not have a valid token" });
        }
        req.userId = verifyToken.userId;
        return next(); // Only call next, do not continue after this
    } catch (error) {
        console.log("isAuth error", error);
        return res.status(500).json({ messege: `isAuth error: ${error.message}` });
    }
};

export default isAuth;