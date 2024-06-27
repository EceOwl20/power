import React from 'react';
import teksan from "@/public/assets/images/teksan.png";
import Image from "next/image";
import essan from "@/public/assets/images/essan.png";
import kemsan from "@/public/assets/images/kemsan.png";

const Partner = () => {
  return (
    
    <div className="flex flex-col gap-2  justify-center items-center">
      <span className='text-3xl font-semibold'>Partners</span>
        <div className='flex flex-col  mx-5 sm:mx-10 md:mx-16 text-center text-white gap-10 lg:grid-cols-3 lg:grid lg:grid-flow-row lg:gap-5 lg:mx-10 lg:my-2 xl:mx-20 xl:my-1 items-center justify-around'>
      <Image
      src={teksan}
      alt={"teksan"}
      />
      <Image
      src={essan}
      alt={"essan"}
      />
      <Image
      src={kemsan}
      alt={"kemsan"}
      />

    </div>
    </div>
  )
}

export default Partner
