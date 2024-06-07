import React from 'react'
import solarpower from "@/public/assets/images/solarpower.jpeg";

const Projects2 = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center w-full flex justify-end  items-end" //mt-24px
      style={{ backgroundImage: `url(${solarpower.src})` }}>
      <div className="relative flex flex-col justify-center items-center w-[570px] h-[400px] p-2 mt-10 text-white mr-10">
      <div className="bg-black/30 absolute inset-0 z-[1]"></div>
        <div className="text-center z-10 ">
        <p className="text-lg lg:text-2xl xl:text-3xl font-semibold mb-8">Güneş Enerji Santralleri</p>
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

export default Projects2
