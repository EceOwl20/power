import React from 'react'
import hotelImage from "@/public/assets/images/hotel.jpg";

const Projects3 = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center w-full flex justify-start items-end" //mt-24px
      style={{ backgroundImage: `url(${hotelImage.src})` }}>
      <div className="relative flex flex-col justify-center items-center w-[570px] h-[400px] p-2 mt-10 text-white ml-10">
      <div className="bg-black/40 absolute inset-0 z-[1]"></div>
        <div className="text-center z-10 ">
        <p className="text-lg lg:text-2xl xl:text-3xl font-semibold mb-8">Otel Otomasyon Sistemleri</p>
          <text className="text-xs lg:text-base 2xl:text-lg z-99">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
             type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </text>
        </div>

      </div>
    </div>
  )
}

export default Projects3
