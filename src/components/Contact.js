import React from "react";
import Laptop from "./Laptop.png";

export default function Contact() {
  return (
    <>
    
      <div id="Contact" className="absolute sm:top-[10897px] xl:top-[7979px]  flex flex-col w-[100%]  h-[768px]  mt-[100px]  ">
       
       <div className="relative w-[90%] h-full bg-[rgba(0,0,0,0.2)] rounded-[30px] border-[1px] shadow-contact-box-shadow  border-[rgba(0,0,0,0.2)] mx-auto">
             <p className="sm:text-[38px] xl:text-[48px] underline text-[white] text-center">
          CONTACT US
        </p>
        <div className="flex flex-row justify-between mt-[40px]">
          <div>
            <img className="sm:hidden xl:block w-[686px] h-[551px] mt-[100px]" src={Laptop} alt=""></img>
          </div>
          
          <div className="items-center flex flex-col text-white">
            <input
              className="pl-[10px] placeholder-[white]  text-[24px] sm:w-[320px] xl:w-[600px] h-[62px] mt-[20px] rounded-[15px] bg-transparent border-[1px] border-[white]"
              placeholder="comapny Name"
            ></input>
            <input
              className="pl-[10px] placeholder-[white]  text-[24px] sm:w-[320px] xl:w-[600px] h-[62px] mt-[20px] rounded-[15px] bg-transparent border-[1px] border-[white]"
              placeholder="E-Mail Address"
            ></input>

            <input
              className="pl-[10px] placeholder-[white]  text-[24px] sm:w-[320px] xl:w-[600px] h-[62px] mt-[20px] rounded-[15px] bg-transparent border-[1px] border-[white]"
              placeholder="Company’s Address"
            ></input>
            <textarea
              className="pl-[10px] placeholder-[white]  text-[24px] sm:w-[320px]  h-[258.8px] xl:w-[600px] mt-[20px]  rounded-[15px] bg-transparent border-[1px] border-[white]"
              placeholder="Message"
            ></textarea>
            <button className="text-white bg-button-gradient-color border-[1px] border-[rgba(255,255,255,1)] shadow-button-white-shadow text-[30px] rounded-[10px] w-[274px] h-[50px] mt-[40px]">SUBMIT</button>
          </div>
        </div>

       </div>
        
      </div>
    </>
  );
}
