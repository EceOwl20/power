import React from 'react';
import { MdOutlineSolarPower } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { MdOutlineElectricMeter } from "react-icons/md";
import { RiRemoteControlLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

const IconSection = () => {
  const t = useTranslations("Icons");

  return (
    <div className="flex w-full items-center justify-center mt-10">
      <div className="flex flex-col gap-10 w-full items-center justify-center">
      <h2 className="text-[20px] lg:text-[30px] font-semibold leading-normal">{t("header")}</h2>
      <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/5 gap-[25px] md:gap-[25px] lg:gap-[50px] xl:gap-[70px]">
      <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
      <div className="flex flex-col h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><MdOutlineElectricMeter size={50} color='#1e293b'/></div>
      <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">{t("iconElectric")}</text>
      </div>

     <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
     <div className="flex h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><BiDollar size={50} color='#1e293b'/></div>
     <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">{t("iconFinancing")}</text>
     </div>

      <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
      <div className="flex h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><MdOutlineSolarPower size={50} color='#1e293b'/></div>
      <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">{t("iconPanel")}</text>
      </div>

      <div className="flex flex-col gap-[5px] lg:gap-[15px] items-center justify-center text-center">
      <div className="flex h-[100px] w-[100px] border-[1.5px] border-stone-300 rounded-full items-center justify-center"><RiRemoteControlLine size={50} color='#1e293b'/></div>
      <text className="text-[14px] lg:text-[20px] font-semibold leading-normal text-slate-800">{t("iconControl")}</text>
      </div>
      </div>
      

      </div>
    </div>
  )
}

export default IconSection
