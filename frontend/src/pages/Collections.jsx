import React, { useState } from 'react'

function Collections() {
  let [showFilter , setShowFilter] = useState(false)
  return (
    <div className='w-[100vw] min-h-[100vh] 
    bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start flex-col 
    md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]'>
      <div className='md:w-[30px] lg:w-[20vw] w-[100vw]
      md:min-h-[100vh] p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed'>
        <p className='text-[25px] font-semibold flex gap-[5px]
        items-center justify-start cursor-pointer' onClick={()=>setShowFilter(prev =>!prev)}>Filters</p>
        <div className={`border-[2px] border-[#dedcdc] 
        pl-5 py-3 mt-6 bg-slate-600 ${showFilter ? "": " hidden"} md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>Categories</p>
          <div className='w-[230px]  h-[120px] flex items-start
          justify-center gap-[10px] flex-col'>
            <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Men'} className='w-3'/>Men</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Men'} className='w-3'/>Women</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Men'} className='w-3'/>Kids</p>
          </div>
        </div>
        <div className={`border-[2px] border-[#dedcdc] 
        pl-5 py-3 mt-6 bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>Sub-Categories</p>
          <div className='w-[230px]  h-[120px] flex items-start
          justify-center gap-[10px] flex-col'>
            <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Topwear'} className='w-3'/>TopWear</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Bottomwear'} className='w-3'/>BottomWear</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Winterwear'} className='w-3'/>WinterWear</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections
