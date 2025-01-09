import React from 'react'
import { motion } from "motion/react"
function Marquee() {
  return (
    <div className='w-full py-20 mt-[8vh]  rounded-tl-3xl rounded-tr-3xl bg-[#004D43] lg:h-[70vh] md:h-[50vh] text-white sm:h-[45vh] '>
        <div className="text border-t-2 border-b-2 border-white flex whitespace-nowrap p overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:5}} className='text-[17vw] leading-none font-["FounderGroteskCondensed] font-semibold uppercase mb-[7vw] -pt-10 pr-20'>we are ochi</motion.h1>
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:5}}className='text-[17vw] leading-none font-["FounderGroteskCondensed] font-semibold uppercase mb-[7vw] -pt-10 pr-20'>we are ochi</motion.h1>
            
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:5}}className='text-[17vw] leading-none font-["FounderGroteskCondensed] font-semibold uppercase mb-[7vw] -pt-10 pr-20'>we are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee ;