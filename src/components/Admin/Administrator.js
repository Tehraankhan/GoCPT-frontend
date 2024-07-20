import React from "react";
import Vector from "./Vector.png";

import userphoto from "./userphoto.png";
import ADMINISTRATOR from "./ADMINISTRATOR.png";
import Back from './BACK.png'
import Navbar2 from "./Navbar2";

import { ThemeContext } from "../../Themecontext.js";
import { useContext } from 'react';
import { Link } from "react-router-dom";



export default function Administrator() {

  const { isDarkMode, isAlternateDarkMode, toggleMode } = useContext(ThemeContext);
  return (
    <>


    
    <img
          className={`w-[100%] h-[1171px] top-[-78px] ${isDarkMode ? (isAlternateDarkMode ? 'bg-black' : 'bg-black') : 'bg-white'}`}
          src={Vector}
          alt=""
        ></img>
        
    
        
      <div className="absolute font-jura w-[100%] h-[100%] top-0  ">
        <Navbar2/>
       
        <div className="flex flex-col items-center rounded-[50px] w-[60%] h-[900px] shadow-box-shadow3 border-[1px] border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.02)] mt-[50px] mx-auto">
          <div className="flex flex-col  items-center mt-[40px]">
            <div className="flex flex-col w-[313px] h-[367px] border-[1px] border-[rgba(128,128,128,1)] rounded-[50px] bg-image-bg-color shadow-image-box-shadow">
              <img
                className=" w-[313px] h-[367px] border-[1px] border-[rgba(128,128,128,1)] rounded-[50px]"
                src={userphoto}
                alt=""
              ></img>
              {/* <p className="shadow-textshadow shadow-textshadow font-jura text-[white] w-[700px] h-[76px] text-[64px] text-[black] absolute ml-[-50px] mt-[300px]">ADMINISTRATOR</p> */}
              <img
                src={ADMINISTRATOR}
                className="absolute  w-[500px] h-[67px] mt-[310px] ml-[-80px]"

                alt=""
              ></img>
            </div>
            <div className="flex flex-col items-center mt-[41px] ">
              <div className="flex flex-col">
                <label className={`text-[20px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`}>E-Mail Address</label>             
                 <input className="pl-[10px] text-white w-[700px] h-[65px] rounded-[15px] bg-[rgba(0,0,0,0.5)] border-[1px] border-[white] shadow-input-shadow"></input>
              </div>
              <div className="flex flex-col mt-[20px]">
                <label className={`text-[20px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`}>Phone Number</label> 
                <input className="pl-[10px] text-white w-[700px] h-[65px] rounded-[15px] bg-[rgba(0,0,0,0.5)] border-[1px] border-[white] shadow-input-shadow"></input>

              </div>

              <div className="flex flex-col mt-[20px]">
                <Link to={{pathname:'/Changepassword'}}>
                
                
                
                <label className={`text-[20px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`}>Change Password?</label> 
                </Link>
                  <button className=" font-jura mt-[30px] bg-[rgba(0,0,0,0.5)] rounded-[15px] text-white w-[700px] h-[65px] text-[36px] border-[1px] border-[white] shadow-input-shadow">
                UPDATE DETAILS
              </button>

              </div>

             
            </div>
            
            
          
          </div>
          
        </div>
        <div className="w-full flex flex-col mt-[10px] items-center">

          <Link to={{pathname:'/'}}>
          
        
          <button>
        <img
                src={Back}
                className=" w-[124px] h-[46px] "

                alt=""
              ></img></button>  </Link>
        </div>
       
        
      </div>
    </>
  );
}
