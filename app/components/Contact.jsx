import React from "react";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col xl:text-2xl text-xl lg:gap-8 gap-4 border-2 xl:h-80 xl:w-[500px] lg:w-[350px] lg:h-64 md:h-56 md:w-[250px] w-[200px] h-48 bg-slate-50 items-center text-center justify-center font-semibold text-slate-800">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-center items-center"><LuPhoneCall className="text-3xl"/>
        <h2 className="font-bold">
          Bize Ulaşın
        </h2></div>
        <p className="font-bold">+90 242 322 60 00</p>
        <button className="text-sm lg:text-lg text-white bg-amber-400 w-auto h-auto rounded-full p-2 lg:px-4">Hemen Teklif Al</button>
      </div>
    </div>
  );
};

export default Contact;
