import React from 'react'
import { MdOutlineAddCircle } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from 'react-router-dom';


function Sidebar() {
    let navigate = useNavigate();
  return (
    <div className='w-[18%] min-h-[100vh]
     border-r-[1px] py-[60px] fixed top-0 left-0'>
      <div className='flex flex-col gap-4 
      pt-[40px] pl-[20%] text-[15px]'>
        <div className='flex items-center justify-center
        md:justify-start gap-3 border border-gray-200 
        border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]'>
             <MdOutlineAddCircle className='w-[20px] h-[20px] '/>
            <p className='hidden md:block' onClick={()=>navigate('/add')}>Add Items</p>
        </div>
        <div className='flex items-center justify-center
        md:justify-start gap-3 border border-gray-200 
        border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]'>
             <FaList className='w-[20px] h-[20px] '/>
            <p className='hidden md:block' onClick={()=>navigate('/list')}>List Items</p>
        </div>
        <div className='flex items-center justify-center
        md:justify-start gap-3 border border-gray-200 
        border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]'>
             <SiTicktick className='w-[20px] h-[20px] '/>
            <p className='hidden md:block' onClick={()=>navigate('/orders')}>View Orders</p>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
