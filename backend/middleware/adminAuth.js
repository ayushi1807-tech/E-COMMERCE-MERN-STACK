import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "not authorized Login again" });
    }

    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res
        .status(400)
        .json({ message: "not authorized Login again, Invalid token" });
    }
    req.adminEmail = process.env.ADMIN_EMAIL;

    next();
  } catch (error) {
    console.log("AdminAuth Error: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default adminAuth;
