import React from 'react'
import logo from '../assets/lognew.png'

function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] md:mb-[0px]'>
        <div className='w-[100%] md:h-[30vh] h-[15vh] 
        md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center
        md:px-[50px] px-[5px]'>
            <div className='md:w-[30%] w-[35%] h-[100%]
             flex  justify-center flex-col gap-[5px]'>
                <div className='flex items-start justify-start
                 gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={logo} alt=""  className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
                    <p className='text-[19px] md:text-[20px] text-[black]'>ModaVibe</p>
                 </div>
                 <p className='text-[15px] text-[#1e2223] hidden md:block'>
                        ModaVibe is your one-stop shop for the latest trends, unbeatable prices, 
                        and fast delivery—always backed by trusted service to make your shopping 
                        experience better every day.</p>
                    <p className='text-[15px] text-[#1e2223] flex  md:hidden'>Shop the latest trends and best deals with MpdaVibe—delivered fast, trusted always.</p>
             </div>
            <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                    <div className='flex items-center justify-center gap-[5px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#le2223] font-sans'>Company</p>
                    </div>
                    <ul>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>Home</li>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>About us</li>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>Delivery</li>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>Privacy Policy</li>
                    </ul>
                 </div> 

                <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                      <div className='flex items-center justify-center gap-[5px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#le2223] font-sans'>GET IN TOUCH</p>
                    </div>
                    <ul>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>+91-9585654754</li>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>contact@modavibe.com</li>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>+1-123-456-7890</li>
                      <li className='text-[15px] text-[#le2223] hidden md:block cursor-pointer'>admin@modavibe.com</li>
                    </ul>
                </div>
        </div>
        <div className='w-[100%] h-[1px] bg-slate-400'></div>
        <div className='w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center'>Copyright 2025@ModaVibe.com-All Rights Reserved </div>
    </div>
  )
}

export default Footer
