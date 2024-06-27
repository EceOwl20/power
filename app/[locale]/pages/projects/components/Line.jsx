import React from 'react';
import line1 from "@/public/assets/images/line1.jpg";
import line2 from "@/public/assets/images/line2.jpg";
import line3 from "@/public/assets/images/line3.jpg";
import line4 from "@/public/assets/images/line4.jpg";
import line5 from "@/public/assets/images/line5.jpg";
import line6 from "@/public/assets/images/line6.jpg";
import Linecomp from './linecomp';
import { useTranslations } from "next-intl";

const Line = () => {
    const t = useTranslations("Projects");

  return (
    <div className='flex flex-col gap-[10px]'>
        <span className="text-lglg:text-2xl xl:text-3xl text-center font-semibold">{t("line")}</span>
        <div className='flex flex-col mx-5 sm:mx-10 md:mx-16 text-center text-white gap-10 lg:grid-cols-6 lg:grid lg:grid-flow-row lg:gap-5 lg:mx-10 lg:my-4 xl:mx-20 xl:my-8" '>
       <Linecomp img={line1}/>
       <Linecomp img={line2}/>
       <Linecomp img={line3}/>
       <Linecomp img={line4}/>
       <Linecomp img={line5}/>
       <Linecomp img={line6}/>
         {/* <Image
         src={line1}
         alt="line1"
         width={line1.width}
         height={line1.height}
         />
         <Image
         src={line2}
         width={line2.width}
         height={line2.height}
         alt="line2"
         />
         <Image
         src={line3}
         width={line3.width}
         height={line3.height}
         alt="line3"
         />
         <Image
         src={line4}
         width={line4.width}
         height={line4.height}
         alt="line4"
         />
         <Image
         src={line5}
         width={line5.width}
         height={line5.height}
         alt="line5"
         />
         <Image
         src={line6}
         width={line6.width}
         height={line6.height}
         alt="line6"
         /> */}
    </div>
    
    </div>
  )
}

export default Line
