import React, { useEffect, useState } from 'react'

function Eye() {

 const[rotate,SetRotate]=useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
       let mouseX=e.clientX;
      let mouseY=  e.clientY;
      let deltaX=mouseX-window.innerWidth/2;
      let deltaY=mouseY-window.innerHeight/2;
      
      let angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
      SetRotate(angle-180);

    })
  })

  return (



    <div className="eyes w-full  overflow-hidden md:h-[40vw] ">
    <div
     
      className="relative sm:h-screen w-full h-full bg-cover bg-fixed bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
    >
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] fixed   ">
        <div className="flex items-center justify-center  w-[24vw] h-[24vw] rounded-full bg-zinc-100 md:w-[15vw] md:h-[15vw]">
          <div className="w-2/3 h-2/3 rounded-full  bg-zinc-900 relative  ">
          <div style={{transform:`translate(-50%,-50%)  rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]  w-full  h-10  ">
          <div className="w-10 h-10 rounded-full  bg-zinc-100 md:w-6 md:h-6  sm:w-4 sm:h-4">

          </div>
          </div>
          </div>
        </div>


        <div className="flex items-center justify-center w-[24vw] h-[24vw] rounded-full bg-zinc-100 md:w-[15vw] md:h-[15vw]">
        <div className="w-2/3 h-2/3 rounded-full  bg-zinc-900 relative text-white  "> 
        <div style={{transform:`translate(-50%,-50%)  rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]  w-full  h-10 "> 
        <div className="w-10 h-10 rounded-full  bg-zinc-100 md:w-6 md:h-6  sm:w-4 sm:h-4">
        </div>
          </div>
        </div>
        </div>

           </div>

        
       
        
        </div>
    </div>
    
  )
}

export default Eye;