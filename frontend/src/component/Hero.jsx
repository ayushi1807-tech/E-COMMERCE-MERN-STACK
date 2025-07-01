import React from 'react'
import { FaCircle } from "react-icons/fa";

function Hero({ HeroData, HeroCount, setHeroCount }) {
  if (!HeroData) return null;

  return (
    <div className="relative w-full h-full flex flex-col justify-center">
      
      <div className="pl-8 pt-12">
        <p className="text-[#88d9ee] text-3xl md:text-5xl lg:text-6xl font-bold mb-2">{HeroData.text1}</p>
        <p className="text-[#88d9ee] text-2xl md:text-4xl lg:text-5xl">{HeroData.text2}</p>
      </div>
     
      <div className="flex gap-3 pl-8 pt-8">
        {[0, 1, 2, 3].map(idx => (
          <FaCircle
            key={idx}
            className={`w-4 h-4 cursor-pointer ${HeroCount === idx ? "fill-orange-500" : "fill-white"}`}
            onClick={() => setHeroCount(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero