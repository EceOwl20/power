import React from 'react';
import jeneratorImage from "@/public/assets/images/jenerator.jpg";
import upsImage from "@/public/assets/images/ups.jpg";

const Products = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-5 md:mx-6 lg:mx-10 xl:mx-20 gap-56 justify-center items-center mt-[250px] h-96 text-white">
    <div className="flex flex-col w-1/2 h-auto  justify-center items-center">
      <div
        className="flex flex-col h-[400px] w-[400px] bg-cover bg-center items-center justify-center "
        style={{ backgroundImage: `url(${jeneratorImage.src})` }}
      >
        <span className="text-xl border-2">Jeneratörler</span>
      </div>
      <div className="flex mx-20 text-center my-10">
        <text className="text-lg text-neutral-900"></text>
      </div>
    </div>

    <div className="flex flex-col w-1/2  justify-center items-center">
      <div
        className="flex flex-col h-[400px] w-[400px] justify-center items-end bg-cover bg-center "
        style={{ backgroundImage: `url(${upsImage.src})` }}
      >
        <span className="text-xl border-2">
          UPS Kesintisiz Güç Kaynakları
        </span>
      </div>
      <div className="flex mx-20 text-center my-10">
        <text className="text-lg text-neutral-900"></text>
      </div>
    </div>
  </div>
  )
}

export default Products
