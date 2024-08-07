"use client";
import React, { useState} from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoIosCloseCircleOutline } from "react-icons/io";
import ReactPlayer from "react-player";

const CarouselCity = ({images}) => {

    const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const img = searchParams.get("img");

  const t = useTranslations("City");
  return (
    <div className="flex flex-col gap-4 lg:gap-0 items-center justify-center">
      <div className='flex h-[120px] w-full bg-neutral-900'></div>
      <div className="flex flex-col lg:flex-row items-center justify-around h-screen">

      <div className="flex flex-col gap-[20px]">
      <div
        className="relative mt-32 h-[200px] w-[300px] lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[550px] bg-cover bg-center justify-center items-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black/50 absolute inset-0 z-[1]"></div>
        <div className="flex flex-col justify-center items-center w-auto px-6 lg:px-18 h-full text-center text-white z-10">
          <text className="text-2xl lg:text-4xl font-bold z-10">
            {city ? (
              <p>
                {" "}
                {city} <br></br> {t("solar")}
              </p>
            ) : (
              <p>No city selected</p>
            )}
          </text>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-10 md:mx-16 lg:mx-20 gap-3 text-center">
        <text className="text-lg lg:text-xl font-semibold">{t("solar")}</text>
        <div className="flex w-full h-[1px] bg-slate-200"></div>
        <p className="text-sm lg:text-base ">{t(city)}</p>
      </div>
      </div>


{/* grid photos */}
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {images.length > 0 && (
        <div className="mb-4" onClick={() => handleImageClick(images[0], 0)}>
          <ReactPlayer url="https://www.youtube.com/watch?v=TawJiLUB1Yg" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} onClick={() => handleImageClick(src, index)}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto cursor-pointer"
              layout="responsive"
              width={350}
              height={475}
            />
          </div>
        ))}
      </div>
    </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 top-36 ">
          <button className="absolute top-0 right-2 px-3 py-1 rounded-full text-lg font-extrabold text-white" onClick={handleCloseFullScreen}><IoIosCloseCircleOutline size={40}/></button>
          <button className="absolute left-2 px-3 py-1 text-white rounded-full text-lg font-bold" onClick={handlePrevImage}><IoIosArrowBack size={40}/></button>
          <Image src={selectedImage} alt="Full Screen Image" className="cursor-pointer" layout="responsive" width={1200} height={800} />
          <button className="absolute right-2 px-3 py-1 text-white  rounded-full text-lg font-bold" onClick={handleNextImage}><IoIosArrowForward size={40}/></button>
        </div>
      )}

    </div>
      </div>
    </div>
  );
};

export default CarouselCity;
