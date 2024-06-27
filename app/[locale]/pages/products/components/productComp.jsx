import React from "react";
import Image from "next/image";
import jeneratorImage from "@/public/assets/images/generator.png";
import upsImage from "@/public/assets/images/ups.png";
import { useTranslations } from "next-intl";

const productComp = ({productName, productText, productImage}) => {
  return (
    <div className="flex flex-col w-full items-center lg:w-2/3 my-1 lg:my-4">
          <div className="w-[90%] flex flex-col gap-6 xl:gap-6">
            <h2 className="text-2xl font-semibold ">{productName}</h2>
            <div className="flex h-auto justify-center items-center">
              <Image
              width={productImage.width}
              height={productImage.height}
                src={productImage.src}
                alt="logo"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <text className="text-lg text-center">
            {productText}
            </text>
          </div>
        </div>
  )
}

export default productComp
