import React from 'react'
import CarouselCity from './components/CarouselCity';
import InfoCity from './components/InfoCity';

import sinanpasa from "@/public/assets/images/sinanpasa1.jpg";
import sinanpasa2 from "@/public/assets/images/sinanpasa2.jpg";
import sinanpasa3 from "@/public/assets/images/sinanpasa3.jpg";
import sinanpasa4 from "@/public/assets/images/sinanpasa.jpg";

const images = [
  sinanpasa,
  sinanpasa2,
  sinanpasa3,
  sinanpasa4
];


const CitiesPage = () => {

  return (
   <div className="flex flex-col gap-16">
     {/* <CarouselCity images={images}/> */}
     <InfoCity  />
   </div>
  )
}

export default CitiesPage
