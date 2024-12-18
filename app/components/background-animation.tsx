'use client'

import Image from 'next/image'

export const BackgroundAnimation = () => {
  return (
    <>
      <div className="w-[3072px] h-[1000px] absolute -z-10 right-0 -top-[100px] laptop:top-0 animate-cloud select-none">
        <Image
          src={'/cloud-1.png'}
          alt="Cloud"
          fill
          className="!w-[3072px] h-[900px] laptop:h-[1000px]"
        />
      </div>
      <div className="w-[3072px] h-[280px] absolute z-10 right-0 bottom-0 animate-cloud select-none">
        <Image
          src={'/cloud-2.png'}
          alt="Cloud"
          fill
          className="!w-[3072px] h-[280px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-[#000]/0 to-50 z-20" />
    </>
  )
}
