import React from 'react'
import Hero from './Hero'
import S1 from '../assets/S1.jpg'
import s2 from '../assets/s2.jpg'
import s5 from '../assets/s5.jpg'
import s4 from '../assets/s4.jpg'

function Background({HeroCount}) {
 
    if(HeroCount === 0) {
      return <img src={S1} alt="Background 1" className='w-[100%] h-[100%] object-cover float-left overflow-auto' />
    }else if(HeroCount === 1) {
      return <img src={s2} alt="Background 2" className='w-[100%] h-[100%] object-cover float-left overflow-auto' />
    }else if(HeroCount === 2) {
      return <img src={s5} alt="Background 3" className='w-[100%] h-[100%] object-cover float-left overflow-auto' />
    } else if(HeroCount === 3) {
      return <img src={s4} alt="Background 4" className='w-[100%] h-[100%] object-cover float-left overflow-auto' />
    }
}

export default Background
