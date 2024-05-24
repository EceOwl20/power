import React from "react";
import Image from "next/image";
import solarImage from "@/public/assets/images/solarpower.jpeg";
import hotelImage from "@/public/assets/images/hotel.jpg";


const Projects = () => {
  return (
    <div
      className="flex flex-col mt-[180px] bg-cover bg-center w-auto items-center text-slate-900 justify-center mx-8 md:mx-20 lg:mx-32">
      <div className="flex h-auto w-full text-start mb-3 lg:mb-10">
        <h1 className="text-2xl lg:text-4xl font-bold">Projelerimiz</h1>
      </div>

      <div  className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-center justify-center">

       <div className="flex flex-col w-full lg:w-1/2 my-4 justify-center text-start">
         <div className="w-full lg:w-3/4 flex flex-col gap-5">
         <h2 className="text-xl lg:text-2xl font-semibold ">Otel Otomasyon Sistemleri</h2>
         <div className="flex h-auto justify-center items-center">
            <Image
             src={hotelImage}
             alt="logo"
             layout="responsive"
             objectFit="cover" />
         </div>
         <text className="text-sm lg:text-lg text-center"> Otel Otomasyon Sistemlerimiz Otel Otomasyon Sistemlerimiz Otel Otomasyon Sistemlerimiz 
            Otel Otomasyon Sistemlerimiz Otel Otomasyon Sistemlerimiz Otel Otomasyon Sistemlerimiz</text>
         </div>
       </div>

       <div className="flex flex-col w-full lg:w-1/2 my-6">
         <div className="w-full lg:w-3/4 flex flex-col gap-5">
         <h2 className="text-xl lg:text-2xl font-semibold ">Güneş Enerji Santralleri</h2>
         <div className="flex h-auto ">
            <Image
             src={solarImage}
             alt="logo"
             layout="responsive"
             objectFit="cover" />
         </div>
         <text className="text-sm lg:text-lg text-center"> Güneş Enerji Santralleri Güneş Enerji Santralleri Güneş Enerji Santralleri
          Güneş Enerji Santralleri Güneş Enerji Santralleri Güneş Enerji Santralleri Güneş Enerji Santralleri Güneş Enerji Santralleri</text>
         </div>
       </div>

      </div>

    </div>
  );
};

export default Projects;
