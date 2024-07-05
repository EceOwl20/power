import React from 'react';
import teksan from "@/public/assets/images/teksan.png";
import Image from "next/image";
import essan from "@/public/assets/images/essan.png";
import kemsan from "@/public/assets/images/kemsan.png";

const Partner = () => {
  return (
    
    <div className="flex flex-col justify-center items-center gap-4 lg:gap-8">
      <span className='text-xl lg:text-3xl font-semibold'>Partners</span>
        <div className='flex flex-col lg:flex-row items-center justify-around w-2/4 lg:w-3/4 gap-6 xl:gap-12'>
      <Image
      className='cover flex w-1/2 lg:w-1/4'
      src={teksan}
      alt={"teksan"}
      width={teksan.width}
      height={teksan.height}
      
      />
      <Image
      className='cover flex w-1/2 lg:w-1/4'
      src={essan}
      width={essan.width}
      height={essan.height}
      alt={"essan"}
      
      />
      <Image
      className='cover flex w-1/2 lg:w-1/4'
      src={kemsan}
      width={kemsan.width}
      height={kemsan.height}
      alt={"kemsan"}
      
      />

    </div>
    </div>
  )
}

export default Partner
