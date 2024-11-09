import { AppDownloadLinks, BackgroundAnimation } from '../components'
import Spline from '@splinetool/react-spline/next'

export default function HeroSection1() {
  return (
    <section className="flex flex-col items-center justify-center w-full relative overflow-x-hidden h-[900px] laptop:h-[1000px] mb-40">
      <div className="w-full container flex items-center justify-between">
        <div className="flex flex-col items-start text-start font-bold gap-8">
          <h1 className="text-5xl laptop:text-6xl">
            Bridge your Church's <br /> communication gap <br />
            with <span className="text-500">Genesis App</span>
          </h1>
          <span className="text-lg font-medium">
            A simple yet powerful software platform that <br /> helps your
            church communicate better.
          </span>
          <div className="flex items-center w-max mt-2 gap-8">
            <AppDownloadLinks platform="ios" />
            <AppDownloadLinks platform="android" />
          </div>
        </div>

        <div className="w-max h-max p-2 rounded-20 bg-gradient-to-br from-100 to-50 bg-opacity-50 border-50 border mt-2.5">
          <div className="w-[528px] h-[418px] laptop:w-[668px] laptop:h-[530px] rounded-12 overflow-hidden">
            <Spline
              scene="https://prod.spline.design/tI5PMTeEAwGEzMMg/scene.splinecode"
              className='-ml-[100px] laptop:-ml-[150px]'
              style={{
                width: 'var(--spline-width)',
                height: 'var(--spline-height)',
              }}
            />
          </div>
        </div>
      </div>
      <BackgroundAnimation />
    </section>
  )
}
