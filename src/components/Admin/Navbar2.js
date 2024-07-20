import React from "react";
import leave from "./leave.png";
import PRF from "./PRF.png";
import { Link } from "react-router-dom";
export default function Signin(){

    return(<>
     <div className="flex flex-row w-[100%] h-[75px] border-[1px] border-[rgba(255,255,255,0.15)] shadow-Navbar-box-shadow2 justify-between items-center">
          <Link to={{ pathname: '/' }}>
         
          <div className="text-[white] left-[25px]">
            <img className="w-[49px] h-[48px]" src={leave} alt=""></img>
          </div>
 </Link>
          <div className="font-padyakke flex flex-row font-normal leading-[92.22px]">
            <h1 className="text-[#F197F4] text-[64px] ">Go</h1>
            <h1 className="text-[#2B3A63] text-[64px]">Cpt</h1>
          </div>
       
          <Link to={{ pathname: '/Administator' }}>
          
          
          <div className="text-[white]">
            <img className="w-[49px] h-[48px]" src={PRF} alt="xkxk"></img>
          </div>
       
          </Link>
          
    
     </div>
    
    </>)
}