import React from 'react';
import aydinImage from "@/public/assets/images/aydin.jpg";
import Link from "next/link";

const City = ({city, link}) => {
  return (
    <div className="flex flex-col relative mt-[24px] h-80 md:h-96 bg-cover bg-center w-full justify-center items-center gap-4"
         style={{ backgroundImage: `url(${aydinImage.src})` }}>
             <div className="bg-black/30 absolute inset-0 z-[1]"></div>
            <span className='text-3xl z-10 lg:text-4xl font-bold uppercase'>{city}</span>
            <text className='z-10 text-xs md:text-sm'>{city} Güneş Enerjisi Sistemleri</text>
            <Link href={link} className='rounded-full px-6 py-2 lg:px-8  text-sm z-10 lg:text-base border-white border-2'>Daha fazlası..</Link>
        </div>
  )
}

export default City
