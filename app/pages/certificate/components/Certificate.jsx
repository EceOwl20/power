import React from "react";
import Image from "next/image";
import certificateImage from "@/public/assets/images/certificate.jpg";
import certificateImage2 from "@/public/assets/images/certificate2.jpg";
import CertificatePhoto from "./certificatePhoto";

const Certificate = () => {
  return (
    <div className="flex flex-col mt-[180px] bg-cover bg-center w-auto items-center text-slate-900 justify-center mx-8 md:mx-20 lg:mx-32">
      <div className="flex flex-col h-auto w-full text-start mb-3 lg:mb-5 gap-2">
        <h1 className="text-2xl lg:text-4xl font-bold">Sertifikalarımız</h1>
        <div className="my-[2px] flex h-[1px] bg-slate-200 w-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-start justify-center">
        <CertificatePhoto photo={certificateImage} certificate="Nuvo"/>
        <CertificatePhoto photo={certificateImage2} certificate="Sercons"/>
      </div>
    </div>
  );
};

export default Certificate;
