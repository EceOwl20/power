"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const translation = useTranslations("Footer");
  return (
    <footer className="bg-neutral-900 text-white mt-12 lg:mt-20">
      <div className="container mx-[5px] sm:mx-auto px-6 md:px-12 lg:px-18 flex flex-col items-center justify-center gap-[24px]">
        <div className="flex flex-col justify-around items-center text-center xl:flex-row xl:gap-16 w-full py-4">
          <div className="flex flex-col lg:flex-row lg:gap-20 ">
            <div className=" w-auto h-auto py-[10px] lg:py-[16px] mt-2">
              <text className="text-xl font-semibold text-center lg:text-xl">
                {translation("social")}
              </text>
              <div className="border-[2px] flex border-white items-center justify-center gap-[16px] xl:gap-[24px] my-[6px] p-2 xl:px-8 rounded-2xl">
                <a
                  href="https://www.facebook.com/onpowerenergygroup/?paipv=0&eav=Afbes-NEWurLRzpnK_jf-6Pg6do7stCKJudaK7LLgn4BzkCYiErw6ygb-M8VGs_CnEc&_rdr"
                  rel="norefferer nofollower"
                  target="_blank"
                >
                  <FaFacebook className="text-xl lg:text-3xl" />
                </a>
                <a href="/">
                  <FaTwitter className="text-xl lg:text-3xl" />
                </a>
                <a href="/">
                  <FaLinkedinIn className="text-xl lg:text-3xl" />
                </a>
              </div>
            </div>
            <div className="flex w-28 sm:w-32 lg:w-40 2xl:w-48">
              <Image
                src={logo}
                alt="logo"
              />
            </div>
          </div>

          <div
            className="flex flex-wrap gap-10 xl:gap-16 justify-center my-5
                     text-white text-start text-sm lg:text-xl font-medium"
          >
            <div className="flex-col items-center justify-center gap-6 text-center">
              <h4 className="bold-18 whitespace-nowrap">
                {translation("title")}
              </h4>
              <ul className=" flex flex-row gap-20 mt-[6px] lg:mt-[12px]">
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href="/#about"
                >
                  {translation("about")}
                </Link>
                
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href="/"
                >
                  {translation("kvkk")}
                </Link>
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href="/#contact"
                >
                  {translation("contact")}
                </Link>
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href={translation("linkblog")}
                >
                  {translation("blog")}
                </Link>
              </ul>
            </div>
            
          </div>
        </div>

        <div className="flex flex-col justify-center text-center gap-2">
          <text className="text-lg xl:text-xl font-semibold">
            {translation("contact")}
          </text>
          <a
            href="https://www.google.com/maps/search/On+Power+Group+K%C4%B1z%C4%B1ltoprak+Mah.+921.+Sokak+K%C4%B1z%C4%B1l%C4%B1toprak+Apt+No:11%2FB+Muratpa%C5%9Fa%2FAntalya/@36.8876144,30.7289592,17z/data=!3m1!4b1?entry=ttu"
            className="text-sm xl:text-base hover:text-slate-600"
            rel="norefferer nofollower"
            target="_blank"
          >
            {translation("address")}
          </a>
        </div>
      </div>
      <div className="mt-7 bg-black">
        <p className="regular-14 text-xs text-center text-gray-500">
          Powered by DGTLFACE | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
