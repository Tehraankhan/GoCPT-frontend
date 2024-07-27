import { useContext } from 'react';
import React  from "react";
import { ThemeContext } from '../Themecontext.js';
import { Link } from "react-router-dom";

export default function Home() {

  const { isDarkMode, isAlternateDarkMode, toggleMode } = useContext(ThemeContext);

  return (
    <>
    <div id="Home" className={`text-white W-[100%] border-[1px] border-transparent h-[900px] ${isDarkMode ? (isAlternateDarkMode ? 'bg-black' : 'bg-white') : 'bg-Home-background-color'}`}>
      
        <div className="flex flex-col  sm:h-[90%]  w-[90%] h-[60%]  mx-auto mt-[100px]">
          
          <div className=" w-[100%]" onClick={(e) => e.stopPropagation()}>
            <div className='float-right'>
              <label className="relative inline-flex items-center cursor-pointer ">
          <input type="checkbox" value="" className="sr-only peer" onClick={toggleMode} />
          <div
            className="gradient-border gradient-border-inner 
            xl:w-[100px] lg:w-[100px] 2xl:w-[100px] 
            mt-[1px] w-[100px] h-[20px] rounded-full 
            peer xl:peer-checked:after:translate-x-[65px]  
            sm:peer-checked:after:translate-x-[21px] 
            peer-checked:after:border-white 
            after:content-[''] after:absolute 
            after:top-[1px] after:left-[2px] 
            after:bg-white after:border-gray-300 
            after:border after:rounded-full 
            after:h-[30px] after:w-[31px] after:transition-all 
            peer-checked:bg-transparent"
          >
            <div className="inner"></div>
          </div>
        </label>
            </div>

        
      </div>
         
         
         
          <div className="flex flex-col w-[90%] h-[70%]  my-auto">
            <h1 className="xl:text-[48px] sm:text-[31px]">Welcome to <span className='text-[#F197F4]'>Go</span><span className='text-[#2B3A63] '>CPT</span> BETA <br></br>Your Path to Effortless CPT Coding!</h1>
            <h2 className=" xl:w-[600px] xl:h-[75px] xl:text-[24px] sm:w-[305px] sm:h-[200px] sm:text-[15px] ">
              We’re excited to introduce you to the BETA version of GoCPT Your
              free pass to a simplified and efficient CPT coding experience
              designed exclusively for mental health professionals like you.
            </h2>
            <Link to={{ pathname: '/Application' }}>  
            <button  className=" text-white bg-button-gradient-color border-[1px] border-[rgba(255,255,255,1)] shadow-button-white-shadow text-[30px] rounded-[10px] w-[274px] h-[50px] mt-[100px]">Start Testing</button>
</Link>
          </div>
         
        </div>
      </div>
    </>
  );
}
