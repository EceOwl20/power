import React from "react";
import solarpanelImage from "@/public/assets/images/solarpanel.jpg";
import City from "./City";
import { useTranslations } from "next-intl";
import aydinImage from "@/public/assets/images/aydin.jpg";
import afyonImage from "@/public/assets/images/afyon.jpg";
import antalyaImage from "@/public/assets/images/antalya.jpg";
import konyaImage from "@/public/assets/images/konya.jpg";
import eskisehirImage from "@/public/assets/images/eskisehir.jpg";
import ispartaImage from "@/public/assets/images/isparta.jpg";
import kutahyaImage from "@/public/assets/images/kutahya.jpg";
import muglaImage from "@/public/assets/images/mugla.jpg";
import nigdeImage from "@/public/assets/images/nigde.jpg";

const Station = () => {
  const translation = useTranslations("Station");

  return (
    <div className="flex flex-col gap-4 md:gap-12">
      <div
        className="relative mt-[24px] h-60 lg:h-96 bg-cover bg-center w-full justify-center items-center"
        style={{ backgroundImage: `url(${solarpanelImage.src})` }}
      >
        <div className="bg-black/50 absolute inset-0 z-[1]"></div>
        <div className="flex flex-col justify-center items-center w-auto px-6 lg:px-18 h-full text-center text-white z-10">
          <text className="text-2xl lg:text-4xl font-bold z-10">
            {translation("header")}
          </text>
        </div>
      </div>
      <div className="flex flex-col  mx-5 sm:mx-10 md:mx-16 text-center text-white gap-10 lg:grid-cols-3 lg:grid lg:grid-flow-row lg:gap-5  lg:mx-10 lg:my-4 xl:mx-20 xl:my-8">
        <City city="Afyon" link="/pages/cities" img={afyonImage} />
        <City city="Antalya" link="/pages/cities" img={antalyaImage} />
        <City city="Aydın" link="/pages/cities" img={aydinImage} />

        <City city="Eskişehir" link="/pages/cities" img={eskisehirImage} />
        <City city="Isparta" link="/pages/cities" img={ispartaImage} />
        <City city="Konya" link="/pages/cities" img={konyaImage} />

        <City city="Kütahya" link="/pages/cities" img={kutahyaImage} />
        <City city="Muğla" link="/pages/cities" img={muglaImage} />
        <City city="Niğde" link="/pages/cities" img={nigdeImage} />
        <div id="contact" className="h-[1px] bg-white"></div>
      </div>
    </div>
  );
};

export default Station;
