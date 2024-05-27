"use client";
import panelImage from "@/public/assets/images/panel.jpeg";
import { useTranslations } from "next-intl";

const Panel = () => {

  const translation = useTranslations("Panel");

  return (
    <div
      className="relative mt-[24px] h-96 bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${panelImage.src})` }}
    >
      <div className="bg-black/30 absolute inset-0 z-[1]"></div>
      <div className="flex flex-col justify-center items-center w-auto h-full mt-10 mx-4 gap-12 text-white z-10">
        <div className="text-center z-10">
          <p className="text-xs lg:text-base mb-3">{translation("text")}</p>
          <text className="text-lg lg:text-2xl font-semibold">
            {translation("header")}
          </text>
        </div>
        <button
          id="about"
          className=" bg-amber-400 rounded-full px-6 py-3 lg:px-8  text-sm z-10 lg:text-base"
        >
          {translation("button")}
        </button>
      </div>
    </div>
  );
};

export default Panel;
