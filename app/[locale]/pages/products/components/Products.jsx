import React from "react";
import Image from "next/image";
import jeneratorImage from "@/public/assets/images/jenerator2.jpg";
import upsImage from "@/public/assets/images/ups.jpg";
import { useTranslations } from "next-intl";

const Products = () => {
  const t=useTranslations("Product");
  return (
    <div className="flex flex-col mt-[180px] bg-cover bg-center w-auto items-center lg:items-center text-slate-900 justify-center mx-4 lg:mx-32 gap-4">
      <div className="flex h-auto w-full text-start mb-5 lg:mb-10">
        <h1 className="text-4xl font-bold">{t("header")}</h1>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 xl:gap-20 items-start justify-center xl:h-auto">
        <div className="flex flex-col w-full lg:w-1/2 my-1 lg:my-4">
          <div className="w-[90%] flex flex-col gap-6 xl:gap-16">
            <h2 className="text-2xl font-semibold ">{t("generators")}</h2>
            <div className="flex h-auto justify-center items-center">
              <Image
                src={jeneratorImage}
                alt="logo"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <text className="text-lg text-center">
            {t("generatorsText")}
            </text>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2 my-4">
          <div className="w-3/4 flex flex-col gap-5">
            <h2 className="text-2xl font-semibold ">
            {t("ups")}
            </h2>
            <div className="flex h-auto justify-center items-center">
              <Image
                src={upsImage}
                alt="logo"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <text className="text-lg text-center">
            {t("upsText")}
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
