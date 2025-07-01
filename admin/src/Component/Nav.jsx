import React from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/lognew.png'
import axios from 'axios'
import { useContext } from 'react';
import { AuthDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';

function Nav() {
    let navigate = useNavigate();
    let {serverurl} = useContext(AuthDataContext);
    let {getAdmin} = useContext(adminDataContext);

    const logout = async ()=>{
        try{
            const result = await axios.get(serverurl + "/api/auth/logout",{withCredentials:true})
            console.log(result)
            getAdmin();
            navigate("/login");
        }catch(err){
            console.error("Logout failed", err);
        }

    }
  return (
    <div className='w-[100vw] h-[70px] bg-[#dcdbdbff] 
    z-10 fixed top-0 flex items-center justify-between px-[30px]
    overflow-x-hidden shadow-md shadow-black'>
      <div className='w-[30%] flex items-center 
      justify-start gap-[10px] cursor-pointer' 
      onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className='w-[70px] h-[80px] pt-3'/>
        <h1 className='text-[25px] text-[black] font-sans '>ModaVibe</h1>
       
      </div>
       <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer
         bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white' onClick={logout}>Logout</button>

    </div>
  )
}

export default Nav
