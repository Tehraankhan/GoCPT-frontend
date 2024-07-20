import React from "react";
import { useState } from "react";
import ellipses from './ellipses.png'
import beats from '../../beats.png'

export default function Signin(){

    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignInClick = () => {
      setIsRightPanelActive(false);
    };
  
    const handleSignUpClick = () => {
      setIsRightPanelActive(true);
    };

    return(<>
    <div
        className={`container ${isRightPanelActive ? 'right-panel-active bg-[black]' : 'bg-[black]'}` }
        style={{
          backgroundImage: `url(${isRightPanelActive ? beats : ellipses})`
        }}
      >
      <div className="form-container sign-up-container  border-[1px] border-[black]">
      <div className="font-jura flex flex-col bg-[rgba(255,255,255,0.02)] shadow-box-shadow3 rounded-[30px] w-[80%] h-[90%] mx-auto mt-[40px] border-[1px] border-[rgba(255,255,255,0.25)] ">
          <h1 className="text-[45px] font-jura text-center text-white ">Sign Up</h1>
          <div className="flex flex-col mt-[30px]">
            <label className="text-[white] ml-[70px]">Name</label>
          <input className="w-[80%] pl-[10px] h-[60px] mx-auto  border-[1px] border-[white] bg-[rgba(0,0,0,0.5)] rounded-[15px]" type="Name" placeholder="Name" />
          </div>
          <div className="flex flex-col mt-[30px]">
            <label className="text-[white] ml-[70px]">E-Mail Address</label>
          <input className="w-[80%] pl-[10px] h-[60px] mx-auto  border-[1px] border-[white] bg-[rgba(0,0,0,0.5)] rounded-[15px]" type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col  mt-[30px]">
             <label className="text-[white] ml-[70px]">Password</label>
          <input className="w-[80%] pl-[10px] h-[60px]  mx-auto  border-[1px] border-[white] bg-[rgba(0,0,0,0.5)] rounded-[15px]" type="password" placeholder="Password" />
          </div>
          <div className="flex flex-col  mt-[30px]">
             <label className="text-[white] ml-[70px]">Confirm Password</label>
          <input className="w-[80%] pl-[10px] h-[60px]  mx-auto  border-[1px] border-[white] bg-[rgba(0,0,0,0.5)] rounded-[15px]" type="password" placeholder="Confirm Password" />
          </div>
          
         
          <button className="border-[1px] border-[rgba(255,255,255,1)] text-center pb-[50px] text-[white] text-[32px] w-[170px] h-[46px] rounded-[10px] bg-button-gradient-color3 mt-[40px] ml-[240px]">Sign Up</button>
        </div>
      </div>
      <div className="form-container sign-in-container " style={{ visibility:isRightPanelActive   ? 'hidden' : '' }}>
        <div className="font-jura flex flex-col bg-[rgba(255,255,255,0.02)] shadow-box-shadow3 rounded-[30px] w-[80%] h-[90%] mx-auto mt-[40px] border-[1px] border-[rgba(255,255,255,0.25)] pt-[100px]">
          <h1 className="text-[45px] font-jura text-center text-white ">Log In</h1>
          <div className="flex flex-col mt-[30px]">
            <label className="text-[white] ml-[70px]">E-Mail Address</label>
          <input className="w-[80%] pl-[10px] h-[60px] mx-auto  border-[1px] border-[white] bg-[rgba(0,0,0,0.5)] rounded-[15px]" type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col  mt-[30px]">
             <label className="text-[white] ml-[70px]">Password</label>
          <input className="w-[80%] pl-[10px] h-[60px]  mx-auto  border-[1px] border-[white] bg-[rgba(0,0,0,0.5)] rounded-[15px]" type="password" placeholder="Password" />
          </div>
          <label className="ml-[70px] text-white mt-[20px]">Forgot Password?</label>
         
          <button className="border-[1px] border-[rgba(255,255,255,1)] text-center pb-[50px] text-[white] text-[32px] w-[110px] h-[46px] rounded-[10px] bg-button-gradient-color3 mt-[40px] ml-[240px]">Log In</button>
        </div>
          
        
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <div className="font-jura flex flex-col bg-[rgba(255,255,255,0.1)] w-[400px] h-[900px] mr-[400px]  rounded-r-[30px] justify-center">
            
            <p className="  w-[299px] h-[114px] text-[48px] ml-[40px]">Already have an account?</p>
            <button className="border-[1px] border-[rgba(255,255,255,1)] text-center pb-[50px] text-[32px] w-[110px] h-[46px] rounded-[10px] bg-button-gradient-color3 mt-[100px] ml-[130px]" onClick={handleSignInClick}>Log In</button>

            </div>
            
          </div>
          <div className="font-jura overlay-panel overlay-right bg-[rgba(255,255,255,0.1)] rounded-l-[50px]">
           
            <p className="  w-[299px] h-[114px] text-[48px] ml-[40px]">Dont have an account?</p>
            <button className="border-[1px] border-[rgba(255,255,255,1)] text-center pb-[50px] text-[32px] w-[150px] h-[46px] rounded-[10px] bg-button-gradient-color3 mt-[100px] " onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>


    
    
    
    
    </>)
}