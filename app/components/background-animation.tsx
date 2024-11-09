'use client'

import Image from 'next/image'

export const BackgroundAnimation = () => {
  return (
    <>
      <div className="w-[3072px] h-[920px] absolute -z-10 top-0 animate-cloud">
        <Image
          src={'/cloud-1.png'}
          alt="Cloud"
          fill
          className="!w-[3072px] h-[920px]"
        />
      </div>
      <div className="w-[3072px] h-[280px] absolute z-10 bottom-0 animate-cloud">
        <Image
          src={'/cloud-2.png'}
          alt="Cloud"
          fill
          className="!w-[3072px] h-[280px]"
        />
      </div>
    </>
  )
}
