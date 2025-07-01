import React, { useContext, useState } from 'react';
import Logo from "../assets/lognew.png"
import google from "../assets/Google.png"
import { useNavigate } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { authDataContext } from '../context/authContext';
import axios from "axios"
import {signInWithPopup} from "firebase/auth"
import { auth, provider } from '../../utils/firebase'
import { userDataContext } from '../context/Usercontex';

function Registration() {
    let[show,setShow] = useState(false)
    let {serverurl} = useContext(authDataContext)
    let{userdata , getcurrentuser} =  useContext(userDataContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate()



  const handleSignup = async (e) =>{
    e.preventDefault()
    try{
        const result = await axios.post(serverurl + '/api/auth/registration',{
           name,email,password
        },{withCredentials:true})
        getcurrentuser
        navigate("/")  
        console.log(result.data)
    }catch(error){
      console.log(error)

    }
  }

  const googleSignup = async()=>{
    try{
        const response = await signInWithPopup(auth , provider)
        let user = response.user
        let name = user.displayName;
        let email = user.email

        const result = await axios.post(serverurl + "/api/auth/googlelogin",{name,email},{withCredentials:true})
        console.log(result.data)
        getcurrentuser
        navigate("/")  
    }catch(error){
      console.log(error)
    }
  }


  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
        <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer ' onClick={()=>navigate("/")}>
          <img className='w-[70px]' src={Logo} alt="Logo" />
          <h1  className='text-[27px] font-sans'>ModaVibe</h1>
        </div>
        <div className='w-[90%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
          <span className='text-[25px] font-semiboldt'>Registration Page</span>
          <span className='text-[16px]  text-gray-300'> Join ModaVibe and unlock exclusive fashion deals, personalized recommendations, and a seamless shopping experience!</span>
        </div>
        <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969696] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
            <form action=""onSubmit={handleSignup} className='w-[90%] h-[90%]  flex flex-col items-center justify-start gap-[20px]'>
                <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup}>
                    <img className='w-[20px]' src={google} alt="" /> Registration with Google
                </div>
                <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                    <div className='w-[40%] h-[1px] bg-[#969696]'></div> Or <div className= 'w-[40%] h-[1px] bg-[#969696]'></div>
                </div>
                <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
                    <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#969696] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffff7] px-[20px] font-semibold' placeholder='Username' required   onChange={(e) =>setName(e.target.value)}/>
                    <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#969696] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffff7] px-[20px] font-semibold' placeholder='Email' required  onChange={(e) =>setEmail(e.target.value)}/>
                    <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#969696] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffff7] px-[20px] font-semibold' placeholder='Password' required onChange={(e) =>setPassword(e.target.value)} />
                    {!show && <FaEyeSlash className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev => !prev)}/>}
                    {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev => !prev)}/>}
                    <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[17px] font-semibold cursor-pointer'>Creat Account</button>
                    <p className='flex gap-[10px]'>You have any account? <span className='text-[#5555f6cf] text-[17px] font-extrabold cursor-pointer' onClick={()=>navigate("/login")}>Login</span></p>
                </div>
            </form>

        </div>
      </div>
    </>
  )
}

export default Registration