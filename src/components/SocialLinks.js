import React from "react";

export default function SocialLinks() {
  return (
    <>
      <div className="absolute xl:top-[9000px] sm:top-[11900px] w-[100%]  h-[100%]  bg-[black] text-[white]">
        <div className="w-[90%] mx-auto ">
        <div className="float-left mt-[30px]">
          <div className="font-padyakke flex flex-row font-normal leading-[79.22px]">
            <h1 className="text-[#F197F4] text-[64px] ">Go</h1>
            <h1 className="text-[#2B3A63] text-[64px]">Cpt</h1>
          </div>
          <p className="text-[20px]">
            We are not here to sell you products, we sell value<br></br> through our
            expertise.
          </p>
          <p className="mt-[10px] text-[20px]">Email: info@gocpt.ai</p>
          <p className="mt-[10px] mt-[20px]">© 2024 All rights reserved gocpt.ai</p>
        </div>
        <div className=" float-right mt-[30px] text-[20px]">
          <p dir="rtl">Home</p>
          <p dir="rtl" className="mt-[20px]">Features</p>
          <p dir="rtl" className="mt-[20px]">About Us</p>
          <p dir="rtl"  className="mt-[20px]">Contact Us</p>
          <p dir="rtl" className="mt-[20px]">Terms & Conditions</p>
        </div>
        </div>
      </div>
    </>
  );
}
