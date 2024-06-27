import React from "react";

const Projects = ({header, text, img}) => {
  return (
    <div
    className="relative h-screen bg-cover bg-center w-full flex justify-end  items-end" 
    style={{ backgroundImage: `url(${img.src})` }}
  >
    <div className="relative flex flex-col justify-center items-center w-full lg:w-1/3 p-2 m-10 text-white">
      <div className="bg-black/30 absolute inset-0 z-[1]"></div>
      <div className="flex flex-col text-center z-10 ">
        <p className="text-lg lg:text-2xl xl:text-3xl font-semibold mb-8">
          {header}
        </p>
        <text className="text-xs lg:text-base 2xl:text-lg z-99">
          {text}
        </text>
      </div>
    </div>
  </div>
  );
};

export default Projects;
