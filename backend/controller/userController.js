import e from "express"
import User from "../model/UserModel.js"
import { Admin } from "mongodb"

export const getCurrentUser = async (req,res) =>{
    try{
        let user = await User.findById(req.userId).select("-password")
        if(!user){
            return res.status(200).json({messege:"user is not found "})
        }
        return res.status(200).json(user)
    }catch(error){
        console.log(error)

        return res.status(500).json({messege:`getCurrentUser error ${error}`})
    }

}

export const getAdmin = async (req, res) => {
    try {
        let adminEmail = req.adminEmail;
        if (!adminEmail) {
            return res.status(400).json({ messege: "Admin not found " });
        }

        return res.status(201).json({
            email: adminEmail,
            role:"admin",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ messege: `getAdmin error ${error}` });
    }
}