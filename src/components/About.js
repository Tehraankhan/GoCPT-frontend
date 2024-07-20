import React from "react";
import Healthprofessional  from './Healthprofessional.png'

export default function About(){
    return(<>
    <div id="About" className=" w-[100%] h-[1312px]   bg-about-us-color" >

   <div className=" flex flex-row justify-between w-[90%] h-[850px]  my-[110px]  mx-auto">
    <div >
          <img className="w-[500px] h-[500px] mt-[100px]"src={Healthprofessional} alt=""></img>
    </div>
      <div>
        
        <div className="flex flex-col items-end text-[white]">
            <h1 className="text-[72px] underline">About us</h1>
      
            <h1 dir="rtl" className=" h-[200px] text-[38px] ">Empowering Mental Health Professionals with Simplified CPT Coding</h1>
           
            
            <p  dir="rtl" className="w-[768px] h-[200px]  font-jura text-[26px] font-normal leading-[42.59px]">Welcome to goCPT, where the journey of revolutionizing the medical coding and billing landscape began with a single idea - to make mental health care more accessible to everyone</p>
            <p  dir="rtl" className="w-[768px] h-[300px] text-[26px]">Join us on this transformative journey as we continue to innovate and evolve, breaking down barriers and making mental health care accessible to all. Together, we can shape a future where healthcare providers are empowered, and quality mental health care knows no boundaries.</p>
        </div>
      </div>

      


    </div>
    </div>
    
    
    
    </>)
}