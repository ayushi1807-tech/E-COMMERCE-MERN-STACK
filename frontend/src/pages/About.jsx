import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'


function About() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex md:w-[100vw]
    items-center justify-center flex-col 
    bg-gradient-to-l from-[#141414] to-[#0c2025] 
    gap-[50px] pt-[80px]'>
      <Title text1={'ABOUT'} text2={' US'}/>
      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img src={about} alt=""  className='lg:w-[65%] w-[80%] shadow-md
           shadow-black rounded-sm'/>
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start 
        justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[80%] w-[100%] text-[white]
           md:text-[16px] text-[13px]'>Welcome to ModaVibe, your ultimate destination 
           for fashion-forward shopping. At ModaVibe, we believe that style is a reflection of 
           individuality, and everyone deserves to express themselves with confidence. Our journey 
           began with a simple mission: to make the latest trends accessible, affordable, and enjoyable for everyone. </p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            We curate a diverse collection of clothing and accessories, blending quality, comfort, and the hottest styles from around the globe. Whether you’re looking for everyday essentials or standout pieces for special occasions, ModaVibe has something for every mood and moment.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Our Mission</p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>Our mission at ModaVibe is to empower everyone to express their individuality through fashion. We are dedicated to making the latest styles accessible and affordable, while never compromising on quality or comfort. By combining trendsetting collections, exceptional service, and a passion for customer satisfaction, we strive to create a vibrant community where everyone can discover their unique vibe and shop with confidence.</p>
        </div>
      </div>
      <div className='w-[100%] flex items-center
       justify-center flex-col gap-[10px]'>
          <Title text1={"WHY"} text2={' CHOOSE US'}/>
          <div className='w-[80%] flex items-center 
          justify-center lg:flex-row flex-col py-[40px]'>
            <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px]
             border-gray-100 flex items-center justify-center
             gap-[20px] flex-col px-[40px] py-[10px] text-[white] 
             backdrop-blur-[2px] bg-[#ffffff0b]'>
                <b className='text-[20px] font-semibold text-[#bff1f9]'>Quality Assuarance</b>
                <p>We guarantee quality through strict checks and careful sourcing. Every ModaVibe product is selected for durability, comfort, and style—so you always shop with confidence. </p>
             </div>
             <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px]
             border-gray-100 flex items-center justify-center
             gap-[20px] flex-col px-[40px] py-[10px] text-[white] 
             backdrop-blur-[2px] bg-[#ffffff0b]'>
                <b className='text-[20px] font-semibold text-[#bff1f9]'>Fast & Reliable Delivery</b>
                <p>Enjoy quick and dependable shipping on every order. We work hard to ensure your ModaVibe favorites reach your doorstep safely and on time, every time. </p>
             </div>
             <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px]
             border-gray-100 flex items-center justify-center
             gap-[20px] flex-col px-[40px] py-[10px] text-[white] 
             backdrop-blur-[2px] bg-[#ffffff0b]'>
                <b className='text-[20px] font-semibold text-[#bff1f9]'>Customer-First Support</b>
                <p>Our friendly support team is always here to help. From questions to quick resolutions, we put your satisfaction first—making your shopping experience smooth and worry-free. </p>
             </div>
          </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About
