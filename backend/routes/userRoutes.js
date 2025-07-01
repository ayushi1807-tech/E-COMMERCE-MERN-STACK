import express from 'express'
// filepath: c:\Users\patel\OneDrive\Desktop\E-Commerce\backend\routes\userRoutes.js
import isAuth from "../middleware/isAuth.js"
import { getAdmin, getCurrentUser } from '../controller/userController.js'
import adminAuth from '../middleware/adminAuth.js'

let userRoutes = express.Router()

userRoutes.post("/getcurrentuser",isAuth,getCurrentUser)
userRoutes.get("/getadmin",adminAuth,getAdmin)

export default userRoutes

