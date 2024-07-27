import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [navbar, setnavbar] = useState(false);

  return (
    <>
      <div className="absolute top-0">
        <div
          id="Home"
          className="w-[100%] fixed border-Navbar-border drop-shadow-Navbar-shadow border-[1px] flex  bg-Navbar-background  h-[90px]  flex-row  justify-between items-center "
        >
          <div className="sm:w-[100%] xl:w-[0%] font-padyakke text-[white] flex flex-row xl:left-[25px] relative">
            <div className=" w-[100%] flex flex-row sm:justify-around">
              <h1 className=" text-[#F197F4] sm:text-[44px] xl:text-[45px] ">
                Go<span className="text-[#2B3A63]">Cpt</span>
              </h1>

              <i className="sm:block xl:hidden fa-solid fa-bars text-[30px] mt-[10px] " onClick={()=>{setnavbar(true)}}></i>
            </div>
          </div>

          <div className="sm:hidden xl:block text-[white] flex flex-col ">
            <ul className="flex flex-row font-jura text-[36px] font-normal leading-custom">
              <ScrollLink to="Home" smooth={true} duration={500}>
                <li
                  className="pl-[30px] text-[36px] text "
                  data-fill-text="Home"
                >
                  Home
                </li>
              </ScrollLink>
              <li className="pl-[30px] text-[36px] text " data-fill-text="FAQ">
                FAQ
              </li>
              <ScrollLink to="Features" smooth={true} duration={500}>
                <li
                  className="pl-[30px] text-[36px] text"
                  data-fill-text="Features"
                >
                  Features
                </li>
              </ScrollLink>
              <ScrollLink to="About" smooth={true} duration={500}>
                <li
                  className="pl-[30px] text-[36px] text"
                  data-fill-text="About us"
                >
                  About us
                </li>
              </ScrollLink>
              <ScrollLink to="Contact" smooth={true} duration={500}>
                <li
                  className="pl-[30px] text-[36px] text"
                  data-fill-text="Contact us"
                >
                  Contact us
                </li>
              </ScrollLink>
            </ul>
          </div>
          <div className="sm:hidden xl:block text-[white]">
            <Link to={{ pathname: "/Signin" }}>
              <ul className="flex flex-row text-[white] text-[32px] mx-[20px]">
                <li>
                  <button className="w-[110px] rounded-[10px]  h-[46px] border-[1px] shadow-button-shadow-color2 bg-button-gradient-color3 mr-[20px]">
                    Login
                  </button>
                </li>
                <li>
                  <button className="w-[139px] rounded-[10px] h-[46px] border-[1px] shadow-button-shadow-color2 bg-button-gradient-color2">
                    Sign Up
                  </button>
                </li>
              </ul>
            </Link>
          </div>

          <div
            className={`font-jura flex flex-col  w-[100%] h-[400px] bg-black absolute ${
              navbar ? "top-[0px]" : "top-[-400px]"
            }`}
          >
            <div className="font-padyakke text-[white] flex flex-row justify-around items-center left-[25px] relative">
              <h1 className="text-[#F197F4] text-[44px] ">
                Go<span className="text-[#2B3A63] text-[44px]">Cpt</span>
              </h1>
              <div className="">
                <i
                  className="fa-solid fa-x text-[15px]"
                  onClick={() => {
                    setnavbar(false);
                  }}
                ></i>
              </div>
            </div>

            <div className="text-[white] flex flex-col ">
              <ul className="flex font-normal leading-custom flex-col text-[24px]">
                <ScrollLink to="Home" smooth={true} duration={500}>
                  <li className="pl-[30px]   " data-fill-text="Home">
                    Home
                  </li>
                </ScrollLink>
                <li className="pl-[30px]   " data-fill-text="FAQ">
                  FAQ
                </li>
                <ScrollLink to="Features" smooth={true} duration={500}>
                  <li className="pl-[30px]  " data-fill-text="Features">
                    Features
                  </li>
                </ScrollLink>
                <ScrollLink to="About" smooth={true} duration={500}>
                  <li className="pl-[30px]  " data-fill-text="About us">
                    About us
                  </li>
                </ScrollLink>
                <ScrollLink to="Contact" smooth={true} duration={500}>
                  <li className="pl-[30px]  " data-fill-text="Contact us">
                    Contact us
                  </li>
                </ScrollLink>
              </ul>
            </div>
            <div className="text-[white]">
              <Link to={{ pathname: "/Signin" }}>
                <ul className="flex text-[white] text-[32px] mx-[20px] flex-col text-[20px]">
                  <li>
                    <button className="font-jura text-[24px] ml-[13px] ">
                      Login
                    </button>
                  </li>
                  <li>
                    <button className="font-jura text-[24px] ml-[13px] ">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
