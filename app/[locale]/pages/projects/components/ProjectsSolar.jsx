import React from "react";
import solarpower from "@/public/assets/images/solarpower.jpeg";

const Projects2 = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center w-full flex justify-end  items-end" //mt-24px
      style={{ backgroundImage: `url(${solarpower.src})` }}
    >
      <div className="relative flex flex-col justify-center items-center w-full lg:w-1/3 p-2 m-10 text-white">
        <div className="bg-black/30 absolute inset-0 z-[1]"></div>
        <div className="flex flex-col text-center z-10 ">
          <p className="text-lg lg:text-2xl xl:text-3xl font-semibold mb-8">
            Güneş Enerji Santralleri
          </p>
          <text className="text-xs lg:text-base 2xl:text-lg z-99">
            Çatı Tipi GES Arazi Tipi GES GES projesinin üretim
            verimliliğini ve ürün dayanıklılığını garanti ediyoruz. On Power
            Enerji Grubu olarak kurulumunu yaptığımız Güneş Enerji Santralleri,
            doğal enerji üretiminde dışa bağımlılığın sona ermesi için güçlü
            adımlar atmaktadır. Doğaya saygı anlayışıyla önemli bir katkı
            sağlıyoruz.
          </text>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
