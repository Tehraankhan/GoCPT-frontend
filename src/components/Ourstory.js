import React from "react";
import Healthprofessional from "./Healthprofessional.png";

export default function Ourstory() {
  return (
    <>
     <div className="absolute xl:top-[2936px] sm:top-[3335px]   w-[100%] h-[100%]" >
      
      <div className=" flex flex-col  mx-auto w-[90%] h-[100%]  text-[white]">
        <h1 className="sm:text-[42px] xl:text-[72px] text-white  underline">Our Story</h1>
        <p className="w-[100%] xl:text-[26px] sm:text-[15px] font-normal sm:leading-[24.39px] xl:leading-[37.39px] ">
          GoCPT was conceived by a passionate psychiatric nurse practitioner
          who, as a new graduate, felt overwhelmed by the complexities of CPT
          coding.<br></br> Faced with the daunting task of mastering medical
          coding while juggling the demands of patient care, it became clear
          that a solution was needed to<br></br> bridge the gap between clinical
          expertise and administrative challenges. Time constraints<br></br>
          and the intricate nature of CPT coding posed significant hurdles for
          healthcare<br></br>
          providers looking to venture into private practice. Recognizing that
          coding<br></br>
          and billing are formidable obstacles standing in the way of many
          <br></br>
          talented providers, the idea for goCPT was born.
        </p>
        <div className="font-offside flex xl:flex-row sm:flex-col w-[100%] h-[100%] xl:justify-between ">
          <div className="flex flex-col sm:mt-[20px] sm:mx-auto items-center  sm:w-[90%] sm:h-[66%] xl:w-[40%] xl:h-[65%] rounded-[30px] bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)]">
            <h1 className="xl:text-[40px] sm:text-[30px] text-[white] text-center ">
              Our Mission
            </h1>
            <h1 className=" xl:text-[18px] sm:text-[12px] text-[white] text-center w-[90%] xl:h-[80%]">
              At goCPT, our mission is simple yet profound - to empower mental
              health professionals and remove the barriers that hinder them from
              providing quality care and pursuing their dreams of private
              practice. We believe that every individual should have access to
              exceptional mental health care, and that starts with simplifying
              the coding and billing process.
            </h1>
          </div>
          <div className="flex flex-col sm:mt-[10px] sm:mx-auto sm:w-[90%] sm:h-[290px] xl:mr-[90px] items-center xl:w-[40%] xl:h-[65%] xl:mt-[-61px] rounded-[30px] bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)]">
            <h1 className="text-[30px] text-[white] text-center ">
              Our Vision
            </h1>
            <h1 className="xl:text-[18px] sm:text-[12px] text-[white] text-center w-[90%] sm:h-[46px] xl:h-[90%] ">
              We envision a future where mental health care is more accessible,
              where providers can focus on what they do best - helping
              individuals on their path to wellness. By harnessing the power of
              technology, we aim to streamline the complexities of CPT coding,
              enabling providers to dedicate more time to patient care and less
              to administrative burdens.
            </h1>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
