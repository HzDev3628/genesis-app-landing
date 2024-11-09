import { AppDownloadLinks, BackgroundAnimation } from '../components'
import Spline from '@splinetool/react-spline/next'

export default function HeroSection1() {
  return (
    <section className="flex flex-col items-center justify-center w-full relative overflow-x-hidden h-[1000px] mb-32">
      <div className="w-full container flex items-center justify-between">
        <div className="flex flex-col items-start text-start text-6xl font-bold gap-8">
          <h1>
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
          <div className="w-[668px] h-[530px] rounded-12 overflow-hidden">
            <Spline
              scene="https://prod.spline.design/tI5PMTeEAwGEzMMg/scene.splinecode"
              style={{
                width: '900px',
                height: '530px',
                marginLeft: '-140px',
              }}
            />
          </div>
        </div>
      </div>
      <BackgroundAnimation />
    </section>
  )
}
