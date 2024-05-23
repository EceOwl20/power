import React from "react";
import jeneratorImage from "@/public/assets/images/jenerator.jpg";
import upsImage from "@/public/assets/images/ups.jpg";

const page = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col lg:flex-row mx-5 md:mx-6 lg:mx-10 xl:mx-20 gap-20 justify-center items-center mt-[200px] h-96 text-white">
        <div className="flex flex-col h-[350px] w-[500px] bg-cover bg-center items-center justify-center " style={{ backgroundImage: `url(${jeneratorImage.src})` }}>
          <span className="text-xl border -2">Jeneratörler</span>
        </div>

        <div className="flex flex-col h-[400px] w-[400px] justify-center items-end bg-cover bg-center " style={{ backgroundImage: `url(${upsImage.src})` }}>
          <span className="text-xl border-2">UPS Kesintisiz Güç Kaynakları</span>
        </div>
      </div>
    </section>
  );
};

export default page;
