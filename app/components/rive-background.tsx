'use client'
// import { useRive } from '@rive-app/react-canvas'
import Image from 'next/image'

export const RiveAnimation = () => {
  // const { RiveComponent: RiveAnimationOne } = useRive({
  //   src: '/animation-rive/1.riv',
  //   autoplay: true,
  // })

  // const { RiveComponent: RiveAnimationTwo } = useRive({
  //   src: '/animation-rive/2.riv',
  //   autoplay: true,
  // })
  return (
    <>
      <Image
        src={'/cloud-1.png'}
        width={2560}
        height={920}
        alt="Cloud"
        quality={100}
        className='absolute -z-10 top-0 animate-cloud'
      />
    </>
  )
}
