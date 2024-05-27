import React from 'react'

const FooterCol = () => {
  return (
    <div className="flex-col items-center justify-center gap-5 text-center">
              <h4 className="bold-18 whitespace-nowrap">
                {translation("title2")}
              </h4>
              <ul className=" flex flex-col gap-1 mt-[6px] lg:mt-[12px]">
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href="/"
                >
                  {translation("automation")}
                </Link>
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href="/"
                >
                  {translation("mechanic")}
                </Link>
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href="/"
                >
                  {translation("electric")}
                </Link>
                <Link
                  className="hover:text-slate-500 text-xs font-light lg:text-base xl:text-lg"
                  href="/"
                >
                  {translation("electronic")}
                </Link>
              </ul>
            </div>
  )
}

export default FooterCol
