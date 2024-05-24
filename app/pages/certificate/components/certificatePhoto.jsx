import React from 'react';
import Image from "next/image";

const certificatePhoto = ({photo,certificate}) => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 items-center justify-center text-start">
          <div className="w-3/4 flex flex-col gap-5">
            <div className="flex h-auto justify-center items-center">
              <Image
                src={photo}
                alt="logo"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="right-0 mx-[30px] flex h-auto w-auto flex-col items-center justify-center gap-[15px] text-center lg:mx-auto">
              <div className="flex font-semibold">
                <h3 className="font-bold text-lg lg:text-xl xl:text-2xl">
                  {certificate}
                </h3>
              </div>
              
            </div>
          </div>
        </div>
  )
}

export default certificatePhoto
