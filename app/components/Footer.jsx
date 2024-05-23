"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import FooterColumn from "./FooterColumn";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const FOOTER_GROUP = [
  {
    title: "KURUMSAL",
    links: ["Hakkımızda", "OnpowerGroup", "KVKK", "İletişim", "Blog"],
  },
  {
    title: "HİZMETLERİMİZ",
    links: [
      "Otel Otomasyon",
      "Otel Mekanik",
      "Otel Elektrik",
      "Otel Elektronik",
    ],
  },
  {
    title: "ÜRÜNLERİMİZ",
    links: [
      "Güneş Enerji",
      "Santraller",
      "Jeneratör",
      "UPS",
      "Otel Elektronik",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white mt-12 lg:mt-20">
      <div className="container mx-[5px] sm:mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center gap-[24px]">
        <div className="flex flex-col justify-center items-center text-center xl:flex-row xl:gap-16 w-full">
          <div className="flex lg:flex-row flex-col lg:gap-20 w-1/3">
            <div className=" w-auto h-auto py-[10px] lg:py-[20px]">
              <text className="text-xl font-semibold text-center lg:text-2xl">
                Sosyal Medya
              </text>
              <div className="border-[2px] flex border-white items-center justify-center gap-[16px] xl:gap-[24px] my-[6px] p-2 xl:px-8 rounded-2xl">
                <Link href="/">
                  <FaFacebook className="text-xl lg:text-3xl" />
                </Link>
                <Link href="/">
                  <FaTwitter className="text-xl lg:text-3xl" />
                </Link>
                <Link href="/">
                  <FaLinkedinIn className="text-xl lg:text-3xl" />
                </Link>
              </div>
            </div>
            <div className="flex w-28 sm:w-32 lg:w-40 2xl:w-48">
              <Image
                src={logo}
                alt="logo"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>

          <div
            className="flex flex-wrap gap-10 xl:gap-32 justify-center my-5
                     text-white text-start text-sm lg:text-xl font-medium"
          >
            {FOOTER_GROUP.map((columns) => (
              <FooterColumn title={columns.title} key={columns.links}>
                <ul className=" flex flex-col gap-2 ">
                  {columns.links.map((link) => (
                    <Link
                      className="hover:text-slate-500 text-xs font-light lg:text-base"
                      href="/"
                      key={link}
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center text-center gap-2">
          <text className="text-lg xl:text-xl font-semibold">İLETİŞİM</text>
          <a
            href="https://www.google.com/maps/search/On+Power+Group+K%C4%B1z%C4%B1ltoprak+Mah.+921.+Sokak+K%C4%B1z%C4%B1l%C4%B1toprak+Apt+No:11%2FB+Muratpa%C5%9Fa%2FAntalya/@36.8876144,30.7289592,17z/data=!3m1!4b1?entry=ttu"
            className="text-sm xl:text-base hover:text-slate-600"
            rel="norefferer nofollower"
            target="_blank"
          >
            On Power Group Kızıltoprak Mah. 921. Sokak Kızılıtoprak Apt No:11/B
            Muratpaşa/Antalya
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
