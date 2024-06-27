import React from "react";
import jeneratorImage from "@/public/assets/images/generator.png";
import upsImage from "@/public/assets/images/ups.png";
import { useTranslations } from "next-intl";
import ProductComp from "./productComp";
import converterImage from "@/public/assets/images/converter.png"
const Products = () => {
  const t=useTranslations("Products");
  return (
    <div className="flex flex-col mt-[180px] bg-cover bg-center w-auto items-center lg:items-center text-slate-900 justify-center mx-4 lg:mx-32 gap-4">
      <div className="flex h-auto w-full text-start mb-5 lg:mb-10">
        <h1 className="text-4xl font-bold">{t("header")}</h1>
      </div>

      <div className="flex flex-col gap-8 xl:gap-20 items-center justify-center xl:h-auto">
        <ProductComp productName={t("generator")} productText={t("generatorText")} productImage={jeneratorImage}/>
        <ProductComp productName={t("ups")} productText={t("upsText")} productImage={upsImage}/>
        <ProductComp productName={t("converter")} productText={t("converterText")} productImage={converterImage}/>
      </div>
    </div>
  );
};

export default Products;
