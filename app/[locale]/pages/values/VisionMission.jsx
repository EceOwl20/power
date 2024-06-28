import React from "react";
import visionImage from "@/public/assets/images/vision.jpg";
import { useTranslations } from "next-intl";
import Link from "next/link";

const VisionMission = () => {
  const t = useTranslations("VisionMission");
  return (
    <div
      className="flex flex-col justify-end items-center relative h-screen bg-cover bg-center w-full gap-10 lg:gap-40 xl:gap-80"
      style={{ backgroundImage: `url(${visionImage.src})` }}>
      <div className="flex">
        <span className=" text-blue-950 text-4xl lg:text-5xl font-semibold">
          {t("header")}
        </span>
      </div>
      <div className="flex flex-col justify-end lg:flex-row items-center lg:justify-around lg:items-end gap-2 lg:gap-8">
        <div className="relative flex flex-col justify-center items-center w-3/4 lg:w-1/3 p-2  text-white">
          <div className="bg-black/50 absolute inset-0 z-[1]"></div>
          <div className="flex flex-col text-center z-10 gap-2 lg:gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-lg lg:text-2xl xl:text-3xl font-semibold ">
                {t("vision")}
              </p>
              <text className="text-sm lg:text-base 2xl:text-lg z-99">
                {t("visionText")}
              </text>
            </div>
            <div className="flex flex-col lg:gap-2">
              <p className="text-lg lg:text-2xl xl:text-3xl font-semibold">
                {t("mission")}
              </p>
              <text className="text-sm lg:text-base 2xl:text-lg z-99">
                {t("missionText")}
              </text>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center w-3/4 lg:w-1/3 p-2 text-white">
          <div className="bg-black/50 absolute inset-0 z-[1]"></div>
          <div className="flex flex-col text-center z-10 ">
            <text className="text-sm lg:text-base xl:text-xl z-99">
              {t("text")}
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
