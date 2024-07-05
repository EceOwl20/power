import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { useTranslations } from "next-intl";

const Contact = () => {
  const translation = useTranslations("Contact");
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col xl:text-2xl text-xl lg:gap-8 gap-4 border-2 xl:h-80 xl:w-[500px] lg:w-[350px] lg:h-64 md:w-1/2 w-3/4 h-full bg-slate-50 items-center text-center justify-center font-semibold text-slate-800">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-center items-center"><LuPhoneCall className="text-3xl"/>
        <h2 className="font-bold">
          {translation('header')}
        </h2></div>
        <div className="flex flex-col gap-[5px]">
        <p className="font-bold">{translation('phone')}</p>
        <p className="font-bold">{translation('phone2')}</p>
        <p className="font-bold">{translation('mail')}</p>
        </div>
        <button className="text-sm lg:text-lg text-white bg-amber-400 w-auto h-auto rounded-full p-2 lg:px-4">{translation('button')}</button>
      </div>
    </div>
  );
};

export default Contact;
