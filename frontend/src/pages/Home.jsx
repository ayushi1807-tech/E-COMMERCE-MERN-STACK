import React, { useEffect, useState } from 'react'
import Background from '../component/Background.jsx'
import Hero from '../component/Hero.jsx'
import Product from './Product.jsx'

function Home() {
  let heroData = [
    { text1: "30% OFF Limited Offer", text2: "Style that" },
    { text1: "Discover", text2: "Accessories Sale!" },
    { text1: "Shop the Latest", text2: "Trends and Deals" },
    { text1: "Your One-Stop", text2: "Shopping Destination" }
  ]

  const [HeroCount, setHeroCount] = useState(0)

  useEffect(()=>{
    let interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1)) 
  },3000); 
 return()=> clearInterval(interval)
},[])

  return (

  
    
    <div className='overflow-x-hidden relative top-[70px]'>
    

    
    <div className="w-[100vw] md:h-[50vh] lg:h-[100vh] flex sm:h-[30vh]">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-l from-[#141414] to-[#0c2025] relative">
        <Hero
          HeroData={heroData[HeroCount]}
          HeroCount={HeroCount}
          setHeroCount={setHeroCount}
        />
      </div>
    
      <div className="flex-1 relative">
        <Background HeroCount={HeroCount} />
      </div>
    </div>
    <Product/>
    </div>
  )
}

export default Home