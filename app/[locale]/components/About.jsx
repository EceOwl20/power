import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const translation = useTranslations('About');
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center h-full w-auto mx-4 lg:mx-16 gap-5 lg:gap-10">
        <h2 className="xl:text-4xl text-2xl text-black font-bold">
          {translation("header")}
        </h2>
        <text className="text-xl xl:text-2xl font-semibold">
          {translation('title')}
        </text>
        <p className="px-2 sm:px-20 lg:px-44 text-sm xl:text-lg">
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
