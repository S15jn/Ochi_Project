/* eslint-disable react/jsx-key */
import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
    
  return (
    <div className='w-full h-screen pt-1'>
        <div className='textstructure mt-52 px-20 '>
            {["We Create","eye opening","presentations"].map((item,index)=>{
                return(
                    <div className='masker '>
                        <div className='w-fit flex items-center overflow-hidden'>
                          {index===1 && (
                            <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],repeat:Infinity, duration:3}} className='mr-[1vw] w-[8vw] rounded-md h-[5.3vw]  relative -top-[1.7vw] mt-7 pb-4 '>
                                <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt=""  className='rounded-md ' />
                            </motion.div>
                            )}
                    <h1 className='pt[2vw] -md-[1vw] font-["FoundersGroteskCondensed"] uppercase text-[9vw] leading-[.75]  '>
                        {item}
                        </h1>
                </div>
                </div>
                );
                
            })}
        
 
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20  tracking-tight leading-none '> 
            {["for public and private companies","from first pitch to IPO"].map((item,index)=><p className='text-md font-light tracking-tight'>{item}</p>)}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase '>Start the project</div>
                <div className='w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center '>
                    <span className='rotate-[45deg]'><FaLongArrowAltUp /></span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default LandingPage;