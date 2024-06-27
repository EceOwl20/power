import React from 'react';
import teksan from "@/public/assets/images/teksan.png";

const Partner = () => {
  return (
    
    <div className="flex flex-col gap-4 md:gap-12">
        <div className='flex flex-col mx-5 sm:mx-10 md:mx-16 text-center text-white gap-10 lg:grid-cols-6 lg:grid lg:grid-flow-row lg:gap-5 lg:mx-10 lg:my-4 xl:mx-20 xl:my-8'>
      <div className="flex flex-col relative mt-[24px] h-80 md:h-96 bg-cover bg-center w-full justify-center items-center gap-4"
         style={{ backgroundImage: `url(${teksan.src})` }}></div>
         <div cclassName="flex flex-col relative mt-[24px] h-80 md:h-96 bg-cover bg-center w-full justify-center items-center gap-4"
         style={{ backgroundImage: `url(${teksan.src})` }}></div>
         <div cclassName="flex flex-col relative mt-[24px] h-80 md:h-96 bg-cover bg-center w-full justify-center items-center gap-4"
         style={{ backgroundImage: `url(${teksan.src})` }}></div>

    </div>
    </div>
  )
}

export default Partner
