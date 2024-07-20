import React ,{useContext}from "react";
import one from "./one.png";
import second from './second.png'
import third from './third.png'
import four from './four.png'
import five from './five.png'
import six from './six.png'
import seven from './seven.png'
import eight from './eight.png'
import { ThemeContext } from "../Themecontext";

export default function Informationofgocpt() {

  
  const { isDarkMode, isAlternateDarkMode, toggleMode } = useContext(ThemeContext);
  return (
    <>
         <div className={`flex flex-col text-center absolute w-[100%] h-[4280px]  top-[3700px] text-[white] ${isDarkMode ? (isAlternateDarkMode ? 'bg-black' : 'bg-white') : ' bg-[rgba(28,39,69,1)]'}`}>

      
        <div className="flex flex-col">
          <h1 className="text-center underline text-[64px]">why Gocpt?</h1>
          <div className="text-[34px] font-normal leading-[40.22px]">
            <p className="mt-[40px]">
              At goCPT, we understand the unique challenges mental health
              professionals face. Our app is designed<br></br> with your needs
              in mind, offering a user-friendly platform that simplifies the
              coding process. By utilizing<br></br> goCPT, providers can reclaim
              valuable time, reduce administrative stress, and ensure accurate
              code
              <br></br> assignment for proper reimbursement.
            </p>
            <p className="mt-[40px]">
              join us on this transformative journey as we continue to innovate
              and evolve, breaking down barriers<br></br> and making mental
              health care accessible to all. Together, we can shape a future
              where healthcare providers<br></br> are empowered, and quality
              mental health care knows no boundaries
            </p>
            <p className="mt-[40px]">
              Thank you for choosing goCPT - where innovation meets compassion
              in the pursuit of accessible mental<br></br> health care.
            </p>

            <p className="mt-[40px]">
              Warm regards,<br></br>Tiffinne Founder,<br></br> goCPT
            </p>
          </div>
        </div>
        <div className="py-2  parallax-beats ">
          <div className=" flex rounded-[15px] flex flex-col items-center absolute top-[1000px] w-[90%] h-[2500px] ml-[90px] bg-key-feature-color border-[1px] border-[rgba(255,255,255,0.2)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)]">
            <p className="text-center underline text-[64px]">
              Ensuring CPT Code Accuracy with<br></br> GoCPT App
            </p>
            <div className="flex flex-row mt-[100px]">
              <div className="flex flex-col w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] ">
                <img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={one}
                  alt=""
                ></img>
                <p className="text-[24px]">Thorough Documentation</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p>
              </div>
              <div className=" w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] mx-10"><img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={four}
                  alt=""
                ></img>
                <p  className="text-[24px]">Assess Risk and Complexity</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p></div>
              <div className=" w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={five}
                  alt=""
                ></img>
                <p className="text-[24px]">Time-Based Coding</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p></div>
            </div>
            <div className="flex flex-row mt-[100px]">
              <div className=" w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={second}
                  alt=""
                ></img>
                <p className="text-[24px]">Specificity Matters</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p></div>
              <div className=" w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] mx-10"><img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={third}
                  alt=""
                ></img>
                <p className="text-[24px]">Include Relevant Data</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p></div>
              <div className=" w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={six}
                  alt=""
                ></img>
                <p className="text-[24px]">Document Thoroughly with All Relevant Data</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p></div>
            </div>
            <div className="flex flex-row mt-[100px]">
              <div className=" w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={seven}
                  alt=""
                ></img>
                <p className="text-[24px]">Regularly Update the App</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p></div>
              <div className=" w-[410px] h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] mx-10"><img
                  className="w-[90%] mx-auto mt-[20px]"
                  src={eight}
                  alt=""
                ></img>
                <p className="text-[24px]">Stay Informed</p>
                <p className="text-[16px]">
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p></div>
            </div>
          </div>

          <div className="flex flex-col  top-[3590px] absolute w-[100%] h-[690px] bg-key-feature-color border-[1px] border-[rgba(255,255,255,0.2)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col w-[100%] h-[690px]">
              <h1 className="text-[48px] ">How Can You Contribute?</h1>
              <div className=" w-[90%] h-[400px] mx-auto mt-[20px]  ">
                <div className="grid grid-cols-2 gap-[100px] ">
                  <div className="rounded-[30px] w-[100%] h-[156%] border-[1px] border-[rgba(255,255,255,0.13)] bg-[rgba(255,255,255,0.07)] shadow-contribute-shadow ">
                    <p className="text-center text-[30px] mt-[5px]">
                      Sign Up and Use goCPT Beta
                    </p>
                    <p className="w-[471px] h-[132px] text-center text-[15px] mx-auto mt-[40px]">
                      Dive into the beta version by signing up here!. Explore
                      its features and discover first hand how GoCPT can
                      simplify your CPT coding processes
                    </p>
                  </div>
                  <div className="rounded-[30px] w-[100%] h-[156%] border-[1px] border-[rgba(255,255,255,0.13)] bg-[rgba(255,255,255,0.07)] shadow-contribute-shadow ">
                    <p className="text-center text-[30px] mt-[5px]">
                      Share Your Feedback
                    </p>
                    <p className="w-[471px] h-[132px] text-center text-[15px] mx-auto mt-[40px]">
                      Your experiences and insights matter. Utilize the feedback
                      mechanism within the app to share your thoughts,
                      suggestions, and any issues you encounter. Your feedback
                      guides our ongoing improvements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto">
                <p className="text-center text-[48px] ">
                  Join GOCPT on this Journey!
                </p>
                <p className="text-center w-[1451px] h-[50px] text-center text-[20px] mt-[40px]">
                  By participating in the goCPT Beta, you’re not just a user;
                  you’re a vital part of our community shaping the future of
                  mental health billing. Together, we can create an app that
                  truly meets your needs and exceeds your expectations.
                </p>
              </div>

              <div className="w-full ">
                <div className=" mx-auto w-[274px] h-[50px] rounded-[10px] [box-shadow:0px_0px_40px_0px_rgba(255,255,255,0.6)] mt-[40px]">
                  <button className="bg-button-gradient-color border-[1px] border-[rgba(255,255,255,1)] shadow-button-white-shadow text-[30px] rounded-[10px] w-[274px] h-[50px] top-[40px] mx-auto ">
                    Sign Up Today!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
