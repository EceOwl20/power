"use client";
import React, {useState} from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoIosCloseCircleOutline } from "react-icons/io";
import ReactPlayer from "react-player";

const Ges = ({images, images2, images3, images4, images5, images6, images7, images8, images9}) => {

  const videoUrl="https://www.youtube.com/watch?v=QaitS1Gn8MA";
    const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
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

  const t = useTranslations("City");
  return (
    <div className="flex flex-col gap-4 lg:gap-0 items-center justify-center">
      <div className='flex h-[120px] w-full bg-neutral-900'></div>
      <div className="flex flex-col items-center justify-center mt-10 lg:mt-16">

{/* grid photos */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Sinanpasa</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
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

{/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Seki</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=KKDPXlEDMao" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images2.map((src, index) => (
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

{/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Yava</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=QaitS1Gn8MA" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images3.map((src, index) => (
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
   {/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Kavaklıdere GES</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=LdnmsMt_cR8" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images4.map((src, index) => (
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
   {/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Ulaş</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=wPHE8LjSF_o" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images5.map((src, index) => (
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
   {/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Köklük</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=32ChsAtsd0I" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images6.map((src, index) => (
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
   {/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Yaylaatlıdere</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=mWvykZ04v2U" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images7.map((src, index) => (
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
   {/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Aktaş</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=DvCMBNY0Tn0" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images8.map((src, index) => (
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

   {/* ************* */}
   <div className="flex flex-col gap-5 items-center justify-center ">
   <div className="flex flex-col gap-3 text-neutral-900 text-center">
    <span className="text-[18px] lg:text-[22px] leading-normal">Dereköy</span>
    <div className="h-[1px] bg-stone-300 w-full flex"></div>
    <text className="text-[14px] lg:text-[18px]"></text>
   </div>
    <div className="flex flex-col-reverse lg:flex-row font-hurme w-full md:w-10/12 lg:w-4/6 xl:w-2/5 justify-center lg:items-start items-center xl:gap-4">
    <div className="p-4">
      {videoUrl && (
        <div className="mb-4" >
          <ReactPlayer url="https://www.youtube.com/watch?v=71L32RkIwnM" layout="responsive" width="100%" height={475} controls/>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images9.map((src, index) => (
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
    </div>
  );
};

export default Ges;
