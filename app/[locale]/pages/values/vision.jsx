import React from 'react';
import visionImage from "@/public/assets/images/vision.jpg";
import { useTranslations } from "next-intl";

const vision = () => {
    const t = useTranslations("VisionMission");
  return (
    <div className='flex h-screen w-screen bg-neutral-900'>
      <div className='flex flex-col items-center w-full h-full gap-4 lg:gap-20 text-white'>
        <div className='flex px-6 py-3 w-full lg:w-1/2 lg:h-3/6 h-4/6 bg-cover items-start justify-center' style={{ backgroundImage: `url(${visionImage.src})` }}>
            <span className='text-4xl font-bold text-neutral-900'>{t("header")}</span>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 items-center w-4/6 pt-5 pb-10'
         >
            <div className='flex flex-col gap-2 text-center'>
                <span className='text-lg lg:text-xl xl::text-2xl font-bold'>{t("vision")}</span>
                <text className='text-sm lg:text-base xl:text-lg font-light'>{t("visionText")}</text>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                <span className='text-lg lg:text-xl xl::text-2xl font-bold'>{t("mission")}</span>
                <text className='text-sm lg:text-base xl:text-lg font-light'>{t("missionText")}</text>
            </div>
        </div>
      </div>
    </div>
  )
}

export default vision
