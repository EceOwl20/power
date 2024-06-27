import React from 'react'

const linecomp = ({img}) => {
  return (
    <div className="flex flex-col relative mt-[24px] h-80 md:h-96 bg-cover bg-center w-full justify-center items-center gap-4"
         style={{ backgroundImage: `url(${img.src})` }}>
            <text></text>
         </div>
  )
}

export default linecomp
