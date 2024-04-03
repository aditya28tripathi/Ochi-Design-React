import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


const Landing = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed ="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                <motion.div initial={{width:0}} 
                animate={{width:"9vw"}} 
                transition={{ease:[0.76 , 0,0.24,1] , duration:2 }} className=' w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}

           
            <h1 className=" flex items-center uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-regular">
              {item}
            </h1>
          </div>
          </div>
        
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-600 mt-32 flex justify-between items-center py-5 px-20"></div>
      {["For Public and Private companies"].map((item, index) => (
        <p key={index} className='text-md font-light tracking-tight leading-none'>
          {item}
        </p>
      ))}

      <div className='flex items-center justify-center mt-5'>
        <div className='px-6 py-3 border-[2px] border-zinc-500 text-lg font-semibold capitalize rounded-full flex items-center'>
          Start The Project
          <div className='w-8 h-8 ml-2 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Landing;
