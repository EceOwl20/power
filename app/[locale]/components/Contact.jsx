import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { useTranslations } from "next-intl";

const Contact = () => {
  const translation = useTranslations("Contact");
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col xl:text-2xl text-xl lg:gap-8 gap-4 border-2 py-10 lg:w-4/5 xl:w-2/3 w-11/12 md:w-5/6 h-full bg-slate-50 items-center text-center justify-center font-semibold text-slate-800">
        <div className="flex flex-col text-[24px] lg:text-[30px] lg:flex-row gap-3 lg:gap-6 justify-center items-center"><LuPhoneCall className="text-3xl"/>
        <h2 className="font-bold">
          {translation('header')}
        </h2></div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-center text-start px-8">
        <div className="flex flex-col gap-[5px] w-full lg:w-2/3 text-[18px] lg:text-[20px]">
          <h3 className="text-[20px] lg:text-[24px]">{translation("subHeader")}</h3>
          <text className="text-[18px] leading-normal text-gray-600 font-light lg:pr-10 xl:pr-16"> Kızıltoprak Mah. 921. Sokak Kızılıtoprak Apt No:11/B Muratpaşa/Antalya</text>
        <text className="">{translation('phone')} <span className="font-bold text-[18px] lg:text-[21px] text-gray-600">+90 242 322 60 00</span></text>
        <text className="">GSM:  <span className="font-bold text-[18px] lg:text-[21px] text-gray-600">+90 532 417 52 16</span></text>
        <text className="font-bold text-[18px] lg:text-[21px] text-gray-600 ">{translation('mail')}</text>
        </div>
        <div className="flex flex-col gap-[5px] text-[18px] lg:text-[20px] w-full lg:w-1/3">
          <h3 className="text-[20px] lg:text-[24px]">{translation("subHeader2")}</h3>
         
        
        <text className="font-bold text-[18px] lg:text-[21px] text-gray-600 ">{translation('mail')}</text>
        </div>
        </div>
        <a href="mailto:tamer.onsoy@onpowergroup.com">
        <button className="text-sm lg:text-lg text-white bg-amber-400 w-auto h-auto rounded-full p-2 lg:px-4">{translation('button')}</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
