"use client";
import React, {useCallback } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import Image from "next/image";

const Panel = ({images}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  const translation = useTranslations("Panel");

  return (
    <div
    className=" overflow-hidden relative "
    ref={emblaRef}
  >
    <div className="flex grid-flow-col min-h-screen">
      {images.map((image, index) => (
        <div className="flex-[0_0_auto] h-screen w-full" key={index}>
          <Image src={image} style={{objectFit:'cover'}} width={image.width} height={image.height} alt={`Slide ${index + 1}`} className=" flex h-screen w-full"/>
        </div>
      ))}
    </div>
    <div className="bg-black/30 absolute inset-0 z-[1]"></div>
    <div className="absolute inset-0 flex items-center justify-between text-center p-6">
      <button className="p-1 hidden lg:flex" onClick={scrollPrev} type="button">
        <BsChevronLeft size={35} color="white"/>
      </button>
      <div className=" flex flex-col justify-center items-center text-center w-full h-full mt-10 mx-4 gap-12 text-white z-10">
        <div className="text-center z-10 w-3/5">
          
          <text className="text-lg lg:text-2xl 2xl:text-3xl font-semibold">
            {translation("header")}
          </text>
          <p className="text-xs lg:text-base 2xl:text-lg mb-3">{translation("text")}</p>
        </div>
        <button
          id="about"
          className=" bg-amber-400 rounded-full px-6 py-3 lg:px-8  text-sm z-10 lg:text-base"
        ><Link href="/pages/values"> {translation("button")}</Link>
         
        </button>
      </div> 
      <button onClick={scrollNext} className="p-1 hidden lg:flex">
        <BsChevronRight size={35} color="white"/>
      </button>
    </div>
    </div>
  );
};

export default Panel;
