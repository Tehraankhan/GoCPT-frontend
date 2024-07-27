import React ,{useContext}from "react";
import Home from "./Home";

import Navbar from "./Navbar"
import Keyfeatures from "./Keyfeatures";
import About from "./About";
import Ourstory from "./Ourstory";
import Informationofgocpt from "./Informationofgocpt";
import Contact from "./Contact";

import SocialLinks from "./SocialLinks";
import { ThemeContext } from "../Themecontext";


export default function Landingpage(){

  const { isDarkMode, isAlternateDarkMode} = useContext(ThemeContext);

    return(<>
          
           
          <div className={`w-[100%] h-[8950px]   border-[1px] border-[green] font-jura ${isDarkMode ? (isAlternateDarkMode ? 'bg-black' : 'bg-white') : 'bg-[#5B6AAA]'}`}>
           
    
      <Home />

      
      

      <section className="parallax">
        <Keyfeatures />
        <About />
      </section>
 
      <section className="py-20 parallax">
        <Ourstory />
      </section>

      <section className="">
        <Informationofgocpt />
      </section>

      <section className="py-20 bg-ellispses sm:min-h-[3892px] xl:min-h-[1200px] bg-fixed bg-center bg-no-repeat bg-cover bg-[black]">
        <Contact />
      </section>
 
      <section className="py-20 bg-[black]">
        <SocialLinks />
      </section>
       <Navbar /> 
    </div>
    
    </>)
}