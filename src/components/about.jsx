import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl md:h-[25%] lg:h-[140vh] sm:h-[100vh] '>
<h1 className=' text-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero tempore voluptas?</h1>
    <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2  ">
        <h1 className='text-5xl sm:text-3xl'>Our Approch :</h1>
        <button className=' px-10 py-6 bg-zinc-900 rounded-full text-white uppercase mt-10 flex gap-10 items-center md:px-8 md:py-4 sm:px-5 sm:py-4'>read more
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className="w-1/2  h-[70vh]   rounded-3xl">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt=" img" />
       
        </div>
    </div>
    
    
    </div>
  )
}

export default About