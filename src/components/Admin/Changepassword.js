import React ,{useContext}from "react";
import Vector from "./Vector.png";
import Back from './BACK.png'
import Navbar2 from "./Navbar2"
import CHANGEPASSWORD from './CHANGEPASSWORD.png'
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Themecontext";
export default function Changepassword(){
  const { isDarkMode, isAlternateDarkMode} = useContext(ThemeContext);
    return(<>
       <img
          className={`w-[100%] h-[1171px] top-[-78px] ${isDarkMode ? (isAlternateDarkMode ? 'bg-black' : 'bg-black') : 'bg-white'}`}
          src={Vector}
          alt=""
        ></img>
    
    


      
      <div className="absolute font-jura w-[100%] h-full top-0 ">
        <Navbar2/>
       
        <div className="flex flex-col items-center rounded-[50px] w-[772px] h-[692px] shadow-box-shadow3 border-[1px] border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.02)] mt-[100px] mx-auto">
          <div className="flex flex-col  items-center mt-[100px]">
            <div className="flex flex-col">
              <img
                src={CHANGEPASSWORD}
                className="w-[650px] h-[70px]  "

                alt=""
              ></img>
            </div>
            <div className="flex flex-col items-center mt-[41px] ">
              <div className="flex flex-col">
                <label className={` text-[20px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`} >Old Password</label>             
                 <input className="text-white w-[610px] h-[65px] rounded-[15px] bg-[rgba(0,0,0,0.5)] border-[1px] border-[white] shadow-input-shadow text-[32px] pl-[20px]" type="password"></input>
              </div>
              <div className="flex flex-col mt-[20px]">
                <label className={` text-[20px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`} >New Password</label> 
                <input className="text-white w-[610px] h-[65px] rounded-[15px] bg-[rgba(0,0,0,0.5)] border-[1px] border-[white] shadow-input-shadow text-[32px] pl-[20px]" type="password"></input>

              </div>

              <div className="flex flex-col mt-[20px]">
                <label className={`text-[20px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`}>Forgot Password?</label> 
                  <button className=" font-jura mt-[30px] bg-[rgba(0,0,0,0.5)] rounded-[15px] text-white w-[700px] h-[65px] text-[36px] border-[1px] border-[white] shadow-input-shadow">
                UPDATE DETAILS
              </button>

              </div>

             
            </div>
            
            
          
          </div>
          
        </div>
        <div className="w-full flex flex-col mt-[20px] items-center">
          <Link to={{pathname:'/Administator '}}>
          
          
         
          <button>
        <img
                src={Back}
                className=" w-[124px] h-[46px] "

                alt=""
              ></img></button> </Link>
        </div>
     
        
      </div>
    
    
    
    </>)
}