import React from 'react';
import { MdOutlineSolarPower } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { MdOutlineElectricMeter } from "react-icons/md";
import { RiRemoteControlLine } from "react-icons/ri";

const IconSection = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/5 gap-[25px] md:gap-[25px] lg:gap-[50px]">

      <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
      <div className="flex flex-col h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><MdOutlineElectricMeter size={50} color='#1e293b'/></div>
      <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">Elektrik Alım Garantisi</text>
      </div>

     <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
     <div className="flex h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><BiDollar size={50} color='#1e293b'/></div>
     <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">Finansman</text>
     </div>

      <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
      <div className="flex h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><MdOutlineSolarPower size={50} color='#1e293b'/></div>
      <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">Kurulumun yapılması</text>
      </div>

      <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
      <div className="flex h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><RiRemoteControlLine size={50} color='#1e293b'/></div>
      <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">15 yıl kontrol</text>
      </div>

      </div>
    </div>
  )
}

export default IconSection
