import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const translation = useTranslations('About');
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start h-full w-4/5 md:w-3/5 lg:w-11/12 mx-4 lg:mx-16 gap-3 lg:gap-4 mt-[30px] lg:mt-[100px]">
        <h2 className="xl:text-4xl text-2xl text-black font-bold mb-3">
          {translation("header")}
        </h2>
        <text className="text-xl xl:text-2xl font-semibold">
          {translation('title')}
        </text>
        <p className="px-2 sm:px-20 lg:px-2 text-sm xl:text-lg">
          {translation('text')}
        </p>
        <button className="bg-amber-400 text-white w-auto h-auto rounded-full px-6 py-3 lg:px-8  text-sm z-10 lg:text-base">
        <Link href="/pages/values"> {translation("button")}</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
