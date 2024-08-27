import React from 'react';
import profile from "@/public/assets/images/profile.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Person = () => {
  const translation = useTranslations('About');

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-4/5 justify-around h-screen">

<div className="flex flex-col items-center lg:items-end justify-center w-full">
      <div className="flex flex-col justify-center items-center lg:items-start  text-center lg:text-start h-full w-4/5 md:w-3/5 lg:w-11/12 xl:w-full mx-4 lg:mx-0 gap-3 lg:gap-4 mt-[30px] lg:mt-[100px]">
        <h2 className="xl:text-4xl text-2xl text-black font-bold mb-3">
          {translation("header")}
        </h2>
        <text className="text-xl xl:text-2xl font-semibold">
          {translation('title')}
        </text>
        <p className="px-2 sm:px-20 lg:px-2 text-sm xl:text-lg">
          {translation('text')}
        </p>
        <button className="bg-amber-400 text-white w-auto h-auto rounded-full px-6 py-3 lg:px-8  text-sm z-10 lg:text-base">
        <Link href="/pages/values"> {translation("button")}</Link>
        </button>
      </div>
    </div>



    <div className='flex flex-col lg:flex-row justify-center items-center w-full text-center  mt-[50px] lg:mt-[100px]'>
      <div className='flex flex-col items-center lg:items-end justify-center gap-[20px] w-full '>
      <div className='flex flex-col relative items-center justify-center text-white leading-normal xl:h-[350px] w-[200px] md:w-[260px] lg:w-[300px] xl:w-[350px] lg:h-[300px] md:h-[300px] h-[230px] bg-center bg-cover' style={{ backgroundImage: `url(${profile.src})` }}>
        <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/70 z-[1] duration-500 transition-opacity'>
        <div className='flex flex-col gap-[20px] w-2/3 items-center justify-center'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>TAMER ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>ŞİRKET SAHİBİ - DOKUZ EYLÜL ÜNİVERSİTESİ</text>
        </div>
        </div>
      </div>
      <div className='flex flex-col  gap-[5px] items-center lg:items-end text-center w-full justify-center text-black'>
      <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>TAMER ONSOY</span>
      <text className='text-[13px] lg:text-[15px] z-[50]'>ŞİRKET SAHİBİ - DOKUZ EYLÜL ÜNİVERSİTESİ</text>
      </div>
      </div>
    </div>

    </div>
  )
}

export default Person
