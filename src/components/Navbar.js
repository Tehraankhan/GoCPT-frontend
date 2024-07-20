import React from "react";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {


  return (
    <>
    <div className="absolute top-0">
      <div className="w-full fixed bg-Navbar-background border-Navbar-border drop-shadow-Navbar-shadow border-[1px] h-[90px] flex flex-row  justify-between items-center">
        <div className="font-padyakke text-[white] flex flex-row left-[25px] relative">
          <h1 className="text-[#F197F4] text-[64px] ">Go</h1>
          <h1 className="text-[#2B3A63] text-[64px]">Cpt</h1>
        </div>
        <div className="text-[white] flex flex-col ">
          <ul className="flex flex-row text-[36px] font-normal leading-custom">
          <ScrollLink to="Home" smooth={true} duration={500}>
            <li className="pl-[30px] text-[36px] text " data-fill-text="Home">
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
        <div className="text-[white]">
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
      </div></div>
    </>
  );
}
