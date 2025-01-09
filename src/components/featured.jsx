import { motion, useAnimation } from "framer-motion";
import React from "react";


function Featured() {
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };
  return (
  
     <div className="container w-full sm:pt-10 md:pt-15 lg:pt-15">
      <div className="w-full border-b-[1px] border-zinc-300 pb-10 pt-10">
        <h1 className="text-4xl sm:text-6xl">Featured Projects</h1>
      </div>
      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 h-[75vh]"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> FIDE
          </h1>
          <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"FIDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt="featured"
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> VISE 
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt="featured"
            />
          </div>
        </motion.div>
      </div>
     
    </div>
  
  );
}

export default Featured;