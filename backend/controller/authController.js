import User from '../model/UserModel.js'
import validator from "validator"
import bcrypt from "bcryptjs"
import { genToken, genToken1 } from '../config/token.js';

export const Registration = async(req , res) =>{
    try{
        const {name , email , password} = req.body;

        const existuser = await User.findOne({email})
        if(existuser){
            return res.status(400).json({messege:"User already exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({messege:"Enter Valid Email"})
        }
        if(password.length < 8){
             return res.status(400).json({messege:"Enter Strong Password"})
        }
        let hashPassword = await bcrypt.hash(password,10)

        const user = await User.create({name,email,password:hashPassword})
        let token = await genToken(user._id)
        res.cookie("token",token,{
                httpOnly:true,
                secure:false,
                sameSite:"Strict",
                maxAge:  7 * 24* 60* 1000
        })
        return res.status(201).json(user)
    }catch(error){
        console.log("signUp error")
        return res.status(500).json({messege:`Registration error ${error}`})
    }
}

export const login = async(req, res)=>{
    try{
        let {email,password} = req.body;

        let user = await User.findOne({email})
        if(!user){
          return  res.status(404).json({messege:"User not Found"})
        }
        let isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
        return  res.status(400).json({messege:"inCorrect Password"})
        }
        let token = await genToken(user._id)
        res.cookie("token",token,{
                httpOnly:true,
                secure:false,
                sameSite:"Strict",
                maxAge:  7 * 24* 60* 1000
        })
        return res.status(201).json({messege:"login Successfully",user})
    }catch(error){
        console.log("Login error error")
        return res.status(500).json({messege:`Login error ${error}`})
    }

}


export const logOut = async (req,res) =>{
    try{
        res.clearCookie("token")
        return res.status(200).json({messege:"logout Successful"})

    }catch(error){
        console.log("Login error error")
        return res.status(500).json({messege:`LogOut error ${error}`})

    }

}

export const googleLogin = async (req,res)=>{
    try{
        
         let {name,email} = req.body;

        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name,email
            })  
        }
        
        let token = await genToken(user._id)
        res.cookie("token",token,{
                httpOnly:true,
                secure:false,
                sameSite:"Strict",
                maxAge:  7 * 24* 60* 1000
        })
        return res.status(200).json(user)

    }catch(error){
        console.log("GoogleLogin error")
        return res.status(500).json({messege:`GoogleLogin error ${error}`})
    }
}


export const adminLogin = async (req,res)=>{
    try{
        let {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            
            let token = await genToken1(email)
                res.cookie("token",token,{
                httpOnly:true,
                secure:false,
                sameSite:"Strict",
                maxAge:  1 * 24* 60* 1000
        })
        return res.status(200).json(token)
        }
        return res.status(400).json({messege:"Invalid Admin Credentials"})
    }
    catch(error){
        console.log("AdminLogin error")
        return res.status(500).json({messege:`AdminLogin error ${error}`})
    }
}