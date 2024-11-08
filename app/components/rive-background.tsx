'use client'
import { useRive } from "@rive-app/react-canvas"

export const RiveAnimation = () => {
  const { RiveComponent: RiveAnimationOne } = useRive({
    src: '/animation-rive/1.riv',
    autoplay: true,
  })

  const { RiveComponent: RiveAnimationTwo } = useRive({
    src: '/animation-rive/2.riv',
    autoplay: true,
  })
  return (
    <>
      <RiveAnimationOne className="w-[2560px] h-[920px] absolute -z-10" />
      <RiveAnimationTwo className="w-[2560px] h-[360px] absolute bottom-0" />
    </>
  )
}
