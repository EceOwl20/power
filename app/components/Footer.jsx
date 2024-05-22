"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import FooterColumn from "./FooterColumn";

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
    <footer className="bg-neutral-900 text-white  mt-96  ">
      <div className="container mx-[5px] sm:mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center gap-[24px]">
        <div className=" w-full h-auto py-[10px] lg:py-[20px]">
          <h1 className="text-xl font-semibold text-center lg:text-2xl">
            Sosyal Medya
          </h1>
          <div className="border-[2px] flex w-full border-white items-center justify-center gap-[8px] xl:gap-[24px] my-[6px] p-2">
            <text>Facebook</text>
            <text>Twitter</text>
            <text>Linkedln</text>
          </div>
        </div>
        <div className="flex w-28 sm:w-32 lg:w-48">
          <Image
            src={logo}
            alt="logo"
            layout="responsive"
            objectFit="contain"
          />
        </div>

        <div
          className="flex flex-wrap gap-10 xl:gap-44 justify-center my-5
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

        <div className="flex flex-col justify-center text-center gap-2">
          <h3 className="text-lg xl:text-xl font-semibold">İLETİŞİM</h3>
          <p className="text-sm xl:text-base">
            On Power Group Kızıltoprak Mah. 921. Sokak Kızılıtoprak Apt No:11/B
            Muratpaşa/Antalya{" "}
          </p>
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
