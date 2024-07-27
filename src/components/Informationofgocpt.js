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
         <div className={`flex flex-col text-center absolute w-[100%] xl:h-[4280px] sm:h-[6448px] sm:top-[4503px] xl:top-[3700px] text-[white] ${isDarkMode ? (isAlternateDarkMode ? 'bg-black' : 'bg-white') : ' bg-[rgba(28,39,69,1)]'}`}>

      
        <div className="flex flex-col">
          <h1 className="text-center underline sm:text-[34px] xl:text-[64px]">why Gocpt?</h1>
          <div className="sm:text-[20px] sm:leading-[28.22px] xl:text-[34px] font-normal xl:leading-[40.22px]">
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
        <div className="py-2  bg-beats sm:min-h-[6902px] xl:min-h-[4751px] bg-fixed bg-center bg-no-repeat bg-cover ">

          <div className=" flex rounded-[15px] flex flex-col items-center absolute top-[1000px] sm:w-[100%] xl:w-[90%] h-[2500px] xl:ml-[90px] bg-key-feature-color border-[1px] border-[rgba(255,255,255,0.2)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)]">
            <p className="sm:text-[34px] text-center underline xl:text-[64px]">
              Ensuring CPT Code Accuracy with<br></br> GoCPT App
            </p>
            <div className="flex sm:flex-col xl:flex-row sm:mt-[100px] xl:mt-[100px] w-[100%] ">
              <div className="flex flex-col sm:mx-auto sm:w-[300px] sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] ">
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
              <div className="flex flex-col sm:mx-auto sm:w-[300px] sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] mx-10"><img
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
              <div className="flex flex-col sm:mx-auto sm:w-[300px]  sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
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
            <div className="flex sm:flex-col xl:flex-row sm:mt-[10px] xl:mt-[100px] w-[100%] h-[100%]">
              <div className=" flex flex-col sm:mx-auto sm:w-[300px] sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
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
              <div className="flex flex-col sm:mx-auto sm:w-[300px] sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] mx-10"><img
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
              <div className="flex flex-col sm:mx-auto sm:w-[300px] sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
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
            <div className="flex sm:flex-col xl:flex-row sm:nt-[10px] xl:mt-[100px] w-[100%] h-[100%]">
              <div className="flex flex-col sm:mx-auto sm:w-[300px] sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] "><img
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
              <div className="flex flex-col sm:mx-auto sm:w-[300px] sm:mt-[20px] xl:w-[410px] xl:h-[600px] shadow rounded-[15px] bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] mx-10"><img
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

          <div className="flex flex-col  xl:top-[3592px] sm:top-[5392px] absolute w-[100%] sm:h-[1055px] xl:h-[690px] bg-key-feature-color border-[1px] border-[rgba(255,255,255,0.2)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col w-[100%] h-[690px]">
              <h1 className="text-[48px] ">How Can You Contribute?</h1>
              <div className=" w-[90%] h-[400px] mx-auto mt-[20px]  ">
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-[40px] ">
                  <div className="flex flex-col rounded-[30px] w-[100%] h-[100%] border-[1px] border-[rgba(255,255,255,0.13)] bg-[rgba(255,255,255,0.07)] shadow-contribute-shadow ">
                    <p className="text-center sm:text-[24px] xl:text-[30px] mt-[10px]">
                      Sign Up and Use goCPT Beta
                    </p>
                    <p className="sm:w-[90%] xl:w-[471px] xl:h-[132px] text-center xl:text-[18px] sm:text-[15px] mx-auto sm:mt-[20px] xl:mt-[40px]">
                      Dive into the beta version by signing up here!. Explore
                      its features and discover first hand how GoCPT can
                      simplify your CPT coding processes
                    </p>
                  </div>
                  <div className="flex flex-col rounded-[30px] w-[100%] h-[100%] border-[1px] border-[rgba(255,255,255,0.13)] bg-[rgba(255,255,255,0.07)] shadow-contribute-shadow ">
                    <p className="text-center sm:text-[24px] xl:text-[30px] mt-[10px]">
                      Share Your Feedback
                    </p>
                    <p className="sm:w-[90%] xl:w-[471px] xl:h-[132px] text-center xl:text-[18px] sm:text-[15px] mx-auto sm:mt-[10px] xl:mt-[40px]">
                      Your experiences and insights matter. Utilize the feedback
                      mechanism within the app to share your thoughts,
                      suggestions, and any issues you encounter. Your feedback
                      guides our ongoing improvements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto sm:mt-[20px] xl:mt-[0px]">
                <p className="text-center xl:text-[48px] sm:text-[48px]">
                  Join GOCPT on this Journey!
                </p>
                <p className="text-center  h-[50px] text-center text-[20px] mt-[40px]">
                  By participating in the goCPT Beta, you’re not just a user;
                  you’re a vital part of our community shaping the future of
                  mental health billing. Together, we can create an app that
                  truly meets your needs and exceeds your expectations.
                </p>
              </div>

              <div className="w-full ">
                <div className=" mx-auto w-[274px] h-[50px] rounded-[10px] [box-shadow:0px_0px_40px_0px_rgba(255,255,255,0.6)] sm:mt-[180px] xl:mt-[40px]">
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
