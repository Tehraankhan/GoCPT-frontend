import React from "react";

export default function Keyfeatures() {
  return (
    <>
    <div id="Features" className=" flex flex-col relative bg-key-feature-color w-[90%] mx-auto h-[100%]   rounded-[30px] border-[1px] border-[rgba(255,255,255,0.2)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] ">
     
     
     <p className=" text-[white] text-center xl:text-[64px] sm:text-[29px]">Key Features of GoCPT BETA</p>
      <div
        className=" font-offside text-20 font-normal sm:leading-[23.22px] xl:leading-[25.22px] text-center grid sm:grid-cols-1 xl:grid-cols-2 gap-2 gap-4  xl:w-[100%]  h-full sm:px-[20px] xl:px-[100px] py-[40px] ">
        <div className="rounded-[30px] bg-[rgba(255,255,255,0.1)] w-[100%] h-[400px]  border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] p-4">
            <h1 className=" w-full text-center sm:text-[20px] xl:text-[30px] text-[white] my-[24px]">User Friendly</h1>
            <h1 className="sm:text-[12px] xl:text-[20px] text-[white]">The goCPT app offers a user-friendly feature for determining CPT codes based on time alone. To utilize this functionality, simply navigate to the designated time button within the app and input the total time spent managing the patient during the encounter. The app will then generate the appropriate CPT code, considering the significant role of time in certain scenarios, such as counseling or coordination of care, in determining the level of service provided</h1>
        </div>
        <div className="rounded-[30px] bg-[rgba(255,255,255,0.1)] w-[100%] h-[400px]  border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] p-4">
            <h1 className="sm:text-[20px] xl:text-[30px] text-[white] my-[24px]">Medical Complexity Assessment</h1>
            <h1 className="sm:text-[12px] xl:text-[20px] text-[white]">The goCPT app calculates encounters of varying complexity (straightforward/minimal, low, moderate, and high) based on a meticulous assessment of Medical Decision-Making (MDM), taking into account the number of diagnoses, management options, risk of complications or morbidity, and the amount and complexity of data reviewed during the encounter</h1>
        </div>
        <div className="rounded-[30px] bg-[rgba(255,255,255,0.1)] w-[100%] h-[400px]  border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] p-4">
            <h1 className="text-[30px] text-[white] my-[24px]">E&M Code Integration</h1>
            <h1 className="sm:text-[12px] xl:text-[20px] text-[white]">Seamlessly incorporates the key components influencing E&M code selection, such as History of Present Illness (HPI), Examination, Medical Decision-Making (MDM), and Time considerations</h1>
        </div>
        <div className="rounded-[30px] bg-[rgba(255,255,255,0.1)] w-[100%] h-[400px]  border-[1px] border-[rgba(255,255,255,0.15)] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.2)] p-4">
            <h1 className="sm:text-[20px] xl:text-[30px] text-[white] my-[24px]">Streamlined Documentation</h1>
            <h1 className="sm:text-[12px] xl:text-[20px] text-[white]">Facilitates accurate code assignment by providing a user-friendly interface for configuring CPT billing codes directly from your progress notes. The app emphasizes documentation accuracy to capture the true complexity of the services rendered**</h1>
        </div>
      </div>
      </div>
    </>
  );
}
