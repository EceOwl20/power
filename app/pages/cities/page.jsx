import React from 'react'
import aydinImage from "@/public/assets/images/aydin.jpg";

const page = () => {
  return (
   <div className="flex flex-col gap-16">
     <div className="flex flex-col gap-4 md:gap-8 items-center justify-center">
      <div
        className="relative mt-32 h-[400px] w-[550px] bg-cover bg-center justify-center items-center "
        style={{ backgroundImage: `url(${aydinImage.src})` }}
      >
        <div className="bg-black/50 absolute inset-0 z-[1]"></div>
        <div className="flex flex-col justify-center items-center w-auto px-6 lg:px-18 h-full text-center text-white z-10">
          <text className="text-2xl lg:text-4xl font-bold z-10">
            AYDIN
          </text>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mx-56 gap-3 text-center'>
        <text className='text-lg lg:text-xl font-semibold'>Güneş Enerjisi Sistemleri</text>
        <div className='flex w-full h-[1px] bg-slate-200'></div>
        <p className='text-sm lg:text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
               essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
    </div>
   </div>
  )
}

export default page
