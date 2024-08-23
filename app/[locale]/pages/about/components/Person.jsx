import React from 'react';
import sahibi from "@/public/assets/images/sahibi.png";
import kizi from "@/public/assets/images/kiz.png";
import erkek from "@/public/assets/images/erkek.png";
import profile from "@/public/assets/images/profile.png";

const Person = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center w-full text-center  mt-[50px] lg:mt-[100px]'>

      <div className='flex flex-col items-center justify-center gap-[20px] w-1/2 md:w-2/5 lg:w-7/12'>
      <div className='flex flex-col relative items-center justify-center text-white leading-normal w-full xl:h-[380px] lg:h-[280px] md:h-[300px] h-[250px] bg-center bg-cover' style={{ backgroundImage: `url(${profile.src})` }}>
        <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/70 z-[1] duration-500 transition-opacity'>
        <div className='flex flex-col gap-[20px] w-2/3 items-center justify-center'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>TAMER ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>ŞİRKET SAHİBİ - DOKUZ EYLÜL ÜNİVERSİTESİ</text>
        </div>
        </div>
      </div>
      <div className='flex flex-col lg:hidden gap-[5px] items-center w-full justify-center text-black'>
      <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>TAMER ONSOY</span>
      <text className='text-[13px] lg:text-[15px] z-[50]'>ŞİRKET SAHİBİ - DOKUZ EYLÜL ÜNİVERSİTESİ</text>
      </div>
      </div>
      
    </div>
  )
}

export default Person
