import React from 'react';
import sahibi from "@/public/assets/images/sahibi.png";
import kizi from "@/public/assets/images/kiz.png";
import erkek from "@/public/assets/images/erkek.png";

const Person = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center w-4/5 lg:w-11/12 text-center gap-[55px] lg:gap-[35px] mt-[100px]'>

      <div className='flex flex-col w-2/3 lg:w-1/3 items-center justify-center gap-[15px]'>
      <div className='flex flex-col relative items-center justify-center text-white leading-normal w-full xl:h-[600px] h-[500px] bg-center bg-cover' style={{ backgroundImage: `url(${sahibi.src})` }}>
        <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/70 z-[1] duration-500 transition-opacity'>
        <div className='flex flex-col gap-[20px] w-2/3 items-center justify-center'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>TAMER ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>ŞİRKET SAHİBİ - DOKUZ EYLÜL ÜNİVERSİTESİ</text>
        </div>
        </div>
      </div>
      <div className='flex flex-col lg:hidden gap-[20px] items-center w-2/3 justify-center text-black'>
      <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>TAMER ONSOY</span>
      <text className='text-[13px] lg:text-[15px] z-[50]'>ŞİRKET SAHİBİ - DOKUZ EYLÜL ÜNİVERSİTESİ</text>
      </div>
      </div>
      
      <div className='flex flex-col w-2/3 lg:w-1/3 items-center justify-center gap-[15px]'>
      <div className='flex flex-col items-center justify-center text-white leading-normal w-full xl:h-[600px] h-[500px] bg-center bg-cover relative' style={{ backgroundImage: `url(${kizi.src})` }}>
        <div className='absolute inset-0 opacity-0 hover:opacity-100 hover:bg-black/70 z-[1] flex flex-col duration-500 transition-opacity items-center justify-center'>
        <div className='flex flex-col gap-[20px] items-center justify-center w-2/3'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase '>DERİN DENİZ ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>MAKİNE MÜHENDİSİ- YENİLENEBİLİR ENERJİ MÜHENDİSİ -  ODTÜ - ORTADOĞU TEKNİK ÜNİVERSİTESİ</text>
        </div>
        </div>
      </div>
      <div className='flex flex-col lg:hidden gap-[20px] items-center w-2/3 justify-center text-black'>
      <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>DERİN DENİZ ONSOY</span>
      <text className='text-[13px] lg:text-[15px] z-[50]'>MAKİNE MÜHENDİSİ- YENİLENEBİLİR ENERJİ MÜHENDİSİ -  ODTÜ - ORTADOĞU TEKNİK ÜNİVERSİTESİ</text>
      </div>
      </div>

      <div className='flex flex-col w-2/3 lg:w-1/3 items-center justify-center gap-[15px]'>
      <div className='flex flex-col relative items-center justify-center text-white leading-normal w-full xl:h-[600px] h-[500px] bg-start bg-cover' style={{ backgroundImage: `url(${erkek.src})` }}>
        <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/70 z-[1] duration-500 transition-opacity'>
        <div className='flex flex-col gap-[20px] w-2/3 items-center justify-center'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>EMİR YÜCE ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>ELEKTRİK VE ELEKTRONİK MÜHENDİSİ- ESKİŞEHİR TEKNİK ÜNİVERSİTESİ</text>
        </div>
        </div>
        </div>
        <div className='flex flex-col lg:hidden gap-[20px] items-center w-2/3 justify-center text-black'>
      <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>EMİR YÜCE ONSOY</span>
      <text className='text-[13px] lg:text-[15px] z-[50]'>ELEKTRİK VE ELEKTRONİK MÜHENDİSİ- ESKİŞEHİR TEKNİK ÜNİVERSİTESİ</text>
      </div>
      </div>
    </div>
  )
}

export default Person
