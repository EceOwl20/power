import React from 'react';
import Link from "next/link";
import { useTranslations } from "next-intl";

const City = ({city, link, img, images}) => {
  const translation = useTranslations('City');
  return (
    <div className="flex flex-col relative mt-[24px] h-80 md:h-96 bg-cover bg-center w-full justify-center items-center gap-4"
         style={{ backgroundImage: `url(${img.src})` }}>
             <div className="bg-black/30 absolute inset-0 z-[1]"></div>
            <span className='text-3xl z-10 lg:text-4xl font-bold uppercase'>{city}</span>
            <text className='z-10 text-xs md:text-sm'>{city} {translation('solar')}</text>
            <Link href={`${link}?city=${city}&img=${img.src}`} className='rounded-full px-6 py-2 lg:px-8  text-sm z-10 lg:text-base border-white border-2'>{translation('button')}</Link>
        </div>
  )
}

export default City
