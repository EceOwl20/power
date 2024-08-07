import React from 'react'

const Person = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center w-4/5 text-center'>
      <div className='flex flex-col items-center justify-center text-white leading-normal bg-opacity-0 hover-bg-opacity-100 hover:bg-black/70 z-[1] w-1/3'>
        <div className='flex flex-col gap-[20px] items-center justify-center w-2/3'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>TAMER ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>ŞİRKET SAHİBİ - 9 EYLÜL ÜNİVERSİTESİ </text>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center text-white leading-normal bg-opacity-0 hover-bg-opacity-100 hover:bg-black/70 z-[1] w-1/3'>
        <div className='flex flex-col gap-[20px] items-center justify-center w-2/3'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase '>DERİN DENİZ ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>MAKİNE MÜHENDİSİ- YENİLENEBİLİR ENERJİ MÜHENDİSİ -  ODTÜ - ORTADOĞU TEKNİK ÜNİVERSİTESİ</text>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center text-white leading-normal bg-opacity-0 hover-bg-opacity-100 hover:bg-black/70 z-[1] w-1/3'>
        <div className='flex flex-col gap-[20px] items-center justify-center w-2/3'>
        <span className='text-[17px] lg:text-[20px] font-serif z-[50] uppercase'>EMİR YÜCE ONSOY</span>
        <text className='text-[13px] lg:text-[15px] z-[50]'>ELEKTRİK VE ELEKTRONİK MÜHENDİSİ- ESKİŞEHİR TEKNİK ÜNİVERSİTESİ</text>
        </div>
      </div>
    </div>
  )
}

export default Person
