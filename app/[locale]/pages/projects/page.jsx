import React from "react";
import Image from "next/image";
import solarImage from "@/public/assets/images/solarpower.jpeg";
import Project from "./components/Projects";
import { useTranslations } from "next-intl";
import Line from "./components/Line";

const page = () => {
  const t = useTranslations("Projects");
  return (
    <div className="flex flex-col gap-[100px]">
      <Project header={t("solar")} text={t("solarText")} img={solarImage}/>
      
      <Line />
    </div>
  );
};

export default page;
