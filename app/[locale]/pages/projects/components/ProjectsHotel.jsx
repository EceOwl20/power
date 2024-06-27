import React from "react";
import hotelImage from "@/public/assets/images/hotel.jpg";

const Projects3 = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center w-full flex justify-start items-end" //mt-24px
      style={{ backgroundImage: `url(${hotelImage.src})` }}
    >
      <div className="relative flex flex-col justify-center items-center w-[570px] p-2 m-10 text-white ">
        <div className="bg-black/40 absolute inset-0 z-[1]"></div>
        <div className="flex flex-col text-center gap-[10px] z-10 ">
          <p className="text-lg lg:text-xl xl:text-2xl font-semibold ">
          1997 yılından beri yapmış olduğumuz Otel Elektrik, Elektronik ve
          Otomasyon projeleri; 
          </p>
          <span className="text-xl lg:text-3xl xl:text-4xl font-semibold">REFERANSLARIMIZ</span>
          <text className="text-xs lg:text-base 2xl:text-lg z-99">
            Hotel Letoon – Fethiye – Mugla
            – Turkey Kuşadası International Golf Club –Kuşadası-Aydın- Turkey
            Ramada Resort & Golf Club Kuşadası –Aydın- Turkey Ramada Hotels &
            Suites Kuşadası –Aydın- Turkey Liberty Fabay Hotel - Fethiye- Mugla-
            Turkey Liberty Hotels Lykia – Fethiye –Mugla- Turkey Liberty Hotels
            Lara – Antalya - Turkey Matild Palace a Luxury Collection Hotel-
            Budapest - Hungary Paradise Garden Hotel- Fethiye- Mugla- Turkey
            Golf-Sea Valley Bungalows Fethiye- Mugla- Turkey Sundia Fethiye -
            Ölüdeniz- Fethiye – Mugla- Turkey TTHOTELS Palace And Tropical
            Sarıgerme Dalaman- Mugla- Turkey
          </text>
        </div>
      </div>
    </div>
  );
};

export default Projects3;
