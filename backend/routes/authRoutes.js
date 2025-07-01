import express from "express"
import { adminLogin, googleLogin, login, logOut, Registration } from "../controller/authController.js";

const authRoutes = express.Router();

authRoutes.post("/registration",Registration)
authRoutes.post("/login",login)
authRoutes.get("/logout",logOut)
authRoutes.post("/googlelogin",googleLogin)
authRoutes.post("/adminLogin",adminLogin)

export default authRoutes
