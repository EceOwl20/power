import React from "react";

const About = () => {
  return (
    <div>
      <div id="about" className="flex flex-col justify-center items-center text-center h-full w-auto mx-4 lg:mx-16 gap-5 lg:gap-10">
        <h2 className="xl:text-4xl text-2xl text-black font-bold">
          Onpowergroup Hakkında
        </h2>
        <text className="text-xl xl:text-2xl font-semibold">
          En iyi Kalitede 25 Yıllık Üretim Mükemmelliği
        </text>
        <p className="px-2 sm:px-20 lg:px-44 text-sm xl:text-lg">
          2015 yılından bugüne 160 Mw GES kurulumu tecrübesi, Yatırm
          Danışmanlığı ve Teşvik Danışmanlığı konularında 30 yıllık tecrübe
          birlikteliğinden oluşmuş bir gruptur. Güçlü kadrosu, yüksek bilgi ve
          teknoloji kullanarak yaptığı projelerin sürdürebilir olmasını garanti
          eder.
        </p>
        <button className="bg-amber-400 text-white w-auto h-auto rounded-full px-6 py-3 lg:px-8  text-sm z-10 lg:text-base">
          Daha fazlası
        </button>
      </div>
    </div>
  );
};

export default About;
