import React from "react";
import Vector from './Admin/Vector.png'
import Navbar2 from "./Admin/Navbar2";
import { ThemeContext } from "../Themecontext";
import { useContext } from "react";



export default function Application(){

  const { isDarkMode, isAlternateDarkMode} = useContext(ThemeContext);

    return(<>
        <img
          className={`w-[100%] h-[1171px] top-[-78px] ${isDarkMode ? (isAlternateDarkMode ? 'bg-black text-white' : 'bg-black text-[white]') : 'bg-white'}`}
          src={Vector}
          alt=""
        ></img>

        
      <div className="absolute font-jura w-[100%] h-full top-0 ">
        <Navbar2/>
       
       
        <div className="flex flex-col items-center rounded-[30px] w-[50%] h-[413px] shadow-box-shadow3 border-[1px] border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.02)] mt-[100px] mx-auto">
        <p className={`text-[38px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`}>Upload your Note</p>
        <p className={`text-[17px] mt-[-10px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`}>(It may take 30-90 seconds to generate report)</p>
        <div className="flex flex items-center w-[90%] border-[1px] border-[rgba(255,255,255,0.25) h-[40%] bg-[rgba(0,0,0,0.3)] rounded-[15px]">
          <p  className={`mx-auto text-[32px] ${isDarkMode ? (isAlternateDarkMode ? 'text-white' : 'text-[white]') : 'text-black'}`}>Click to upload a Note (pdf or doc file)</p>

        </div>
        <div className="text-white flex flex items-center rounded-[20px] mt-[20px] w-[70%] border-[2px] border-[rgba(255,255,255,0.4)] bg-box-gradient-color shadow-box-shadow1">
          <p className="mx-auto text-center text-[24px]">Generate CPT code Based<br></br> upon Medical Decision Making Model</p>
        </div>
          
        </div>
        
        <div className="text-white flex flex-col items-center rounded-[30px] w-[90%] h-[413px] shadow-box-shadow3 border-[1px] border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.02)] mt-[100px] mx-auto">
                <div className="flex flex-row w-[90%] mt-[20px]">

                   <div className="flex flex-row rounded-[15px] w-[500px] h-[80px]  justify-around bg-[rgba(0,0,0,0.2)]">
                    <p className="text-[17px]">Number and Complexity<br></br> of Problems Addressed</p>
                    <p  className="text-[rgba(170,206,209,1)] text-[20px]">MEDIUM</p>

                   </div>
                   <div className="flex flex-row rounded-[15px] w-[500px] h-[80px]  justify-around mx-[20px] bg-[rgba(0,0,0,0.2)]">
                   <p className="text-[17px]">Amount and/or Complexity of Data<br></br> to be Reviewed and Analyzed</p>
                   <p className="text-[rgba(170,206,209,1)] text-[20px]">MINIMAL</p>

                   </div>
                   <div className="flex flex-row rounded-[15px] w-[500px] h-[80px] border-[1px] justify-around border-[green] bg-[rgba(0,0,0,0.2)]">
                   <p className="text-[17px]">Risk of Complications and/or<br></br> Morbidity or Mortality of<br></br> Patient Management Decisions</p>
                   <p className="text-[rgba(170,206,209,1)] text-[30px]">HIGH</p>
                   </div>

                     

                </div>
                <div className="flex flex-col w-[90%]   mt-[20px]">
                  <button className="w-[600px] text-[white] rounded-[15px] h-[50px] mx-auto border-[1px] bg-button-gradient-color5">GENERATE MDM CPT CODE</button> 
                  <button className="w-[200px] text-[rgba(170,206,209,1)] mx-auto shadow-button-shadow-color3 border-[1px] bg-[rgba(0,0,0,0.3)] mt-[10px] rounded-[14px] w-[400px] h-[40px] border-[rgba(0,0,0,0.2)]">MEDIUM</button>                 
                </div>
                <div className="flex flex-row w-[90%] h-[150px]  mt-[40px]">

                  <div className="flex flex-col w-[50%] h-[150px] items-center ">
                    <input className="w-[90%] h-[60px] rounded-[10px] border-[1px] border-[black] bg-[rgba(0,0,0,0.15)]"></input> 
                    <button className="w-[90%] my-[10px] h-[60px] rounded-[10px] h-[60px] bg-button-gradient-color4 border-[1px] border-[rgba(255,255,255,0.85)] shadow-button-shadow-color4">submit</button>
                    <p  className="w-[90%] h-[60px] text-center bg-[rgba(0,0,0,0.15)]  rounded-[10px]">9921</p>


                  </div>
                  
                  <div className="flex flex-col w-[50%] h-[150px]  items-center ">
                  <input className="w-[90%] h-[60px] rounded-[10px] border-[1px] border-[black] bg-[rgba(0,0,0,0.15)]"></input> 
                    <button className="my-[10px] w-[90%] h-[60px] rounded-[10px] bg-button-gradient-color4 border-[1px] border-[rgba(255,255,255,0.85)] shadow-button-shadow-color4">submit</button>
                    <p  className="w-[90%] h-[60px] text-center bg-[rgba(0,0,0,0.15)] rounded-[10px]">9921</p>


                  </div>
                  
                </div>
          
        </div>
      
     
        
      </div>
    
    
    
    </>)
}