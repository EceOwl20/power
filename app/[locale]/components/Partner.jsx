import React from 'react';
import teksan from "@/public/assets/images/teksan.png";
import Image from "next/image";
import essan from "@/public/assets/images/essan.png";
import kemsan from "@/public/assets/images/kemsan.png";

const Partner = () => {
  return (
    
    <div className="flex flex-col justify-center items-center">
      <span className='text-3xl font-semibold'>Partners</span>
        <div className='flex flex-col items-center mx-5 sm:mx-10 lg:mx-10 gap-[25px] lg:gap-[75px] md:mx-16 text-center text-white  lg:grid-cols-3 lg:grid lg:grid-flow-row   lg:my-2  xl:my-1 justify-around'>
      <Image
      src={teksan}
      alt={"teksan"}
      layout='responsive'
      />
      <Image
      src={essan}
      alt={"essan"}
      layout='responsive'
      />
      <Image
      src={kemsan}
      alt={"kemsan"}
      layout='responsive'
      />

    </div>
    </div>
  )
}

export default Partner
