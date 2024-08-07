"use client"
import React from 'react'
import CarouselCity from './components/CarouselCity';
import { useSearchParams } from "next/navigation";
import img2 from "@/public/assets/images/sinanpasa1.jpg";
import img3 from "@/public/assets/images/sinanpasa2.jpg";


const CitiesPage = () => {

  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  const imageCarousel=[img,img2,img3,img2,img3];

  return (
   <div className="flex flex-col gap-16">
     <CarouselCity images={imageCarousel}/>
   </div>
  )
}

export default CitiesPage
