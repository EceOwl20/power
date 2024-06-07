"use client"
import React from 'react'
import aydinImage from "@/public/assets/images/aydin.jpg";
import { useTranslations } from "next-intl";
import { useSearchParams } from 'next/navigation';

const page = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city');
  const img = searchParams.get('img');

  const t = useTranslations("City");

  return (
   <div className="flex flex-col gap-16">
     <div className="flex flex-col gap-4 md:gap-8 items-center justify-center">
      <div
        className="relative mt-32 h-[200px] w-[300px] lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[550px] bg-cover bg-center justify-center items-center "
        style={{ backgroundImage: `url(${img})`}}
      >
        <div className="bg-black/50 absolute inset-0 z-[1]"></div>
        <div className="flex flex-col justify-center items-center w-auto px-6 lg:px-18 h-full text-center text-white z-10">
          <text className="text-2xl lg:text-4xl font-bold z-10">
            {city ? <p> {city} <br></br> {t("solar")}</p> : <p>No city selected</p>}

          </text>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mx-10 md:mx-16 lg:mx-20 xl:mx-56 gap-3 text-center'>
        <text className='text-lg lg:text-xl font-semibold'>{t("solar")}</text>
        <div className='flex w-full h-[1px] bg-slate-200'></div>
        <p className='text-sm lg:text-base '>{t(city)}</p>
        </div>
    </div>
   </div>
  )
}

export default page
