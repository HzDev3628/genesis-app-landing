'use client'
import { useRive } from '@rive-app/react-canvas'
import { AppDownloadLinks } from '../components'
import Spline from '@splinetool/react-spline'

export default function HeroSection1() {
  const { RiveComponent: RiveAnimationOne } = useRive({
    src: '/animation-rive/1.riv',
    autoplay: true,
  })
  const { RiveComponent: RiveAnimationTwo } = useRive({
    src: '/animation-rive/2.riv',
    autoplay: true,
  })

  return (
    <section className="flex flex-col items-center justify-center w-full relative overflow-x-hidden h-[920px]">
      <div className="w-full container flex items-center justify-between">
        <div className="flex items-center w-max">
          <AppDownloadLinks platform="ios" />
          <AppDownloadLinks platform="android" />
        </div>
        <div className="w-max h-max p-2 rounded-20 bg-gradient-to-br from-100 to-50 bg-opacity-50 border-50">
          <div className="w-[668px] h-[530px] rounded-16 overflow-hidden">
            <Spline
              scene="https://prod.spline.design/eolxO7z91jjYft7U/scene.splinecode"
              style={{
                width: '900px',
                height: '530px',
                marginLeft: '-140px',
              }}
            />
          </div>
        </div>
      </div>

      <RiveAnimationOne className="w-[2560px] h-[920px] absolute -z-10" />
      <RiveAnimationTwo className="w-[2560px] h-[360px] absolute bottom-0" />
    </section>
  )
}
