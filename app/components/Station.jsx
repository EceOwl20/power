import React from "react";
import solarpanelImage from "@/public/assets/images/solarpanel.jpg";
import City from "./City";


const Station = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-12">
      <div
        className="relative mt-[24px] h-60 lg:h-96 bg-cover bg-center w-full justify-center items-center"
        style={{ backgroundImage: `url(${solarpanelImage.src})` }}
      >
        <div className="bg-black/50 absolute inset-0 z-[1]"></div>
        <div className="flex flex-col justify-center items-center w-auto px-6 lg:px-18 h-full text-center text-white z-10">
          <text className="text-2xl lg:text-4xl font-bold z-10">
            GÜNEŞ ENERJİ SANTRALLERİ
          </text>
        </div>
      </div>
      <div className="flex flex-col  mx-5 sm:mx-10 md:mx-16 text-center text-white gap-10 lg:grid-cols-3 lg:grid lg:grid-flow-row lg:gap-5  lg:mx-10 lg:my-4 xl:mx-20 xl:my-8">
        <City city="Afyon" link="/pages/cities"/>
        <City city="Antalya" link="/" />
        <City city="Aydın" link="/" />

        <City city="Eskişehir" link="/" />
        <City city="Isparta" link="/" />
        <City city="Konya" link="/" />

        <City city="Kütahya" link="/" /> 
         <City city="Muğla" link="/" />
        <City city="Niğde" link="/" />
        <div id="contact" className="h-[1px] bg-white"></div>
      </div>
    </div>
  );
};

export default Station;
