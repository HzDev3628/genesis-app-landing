import { AppDownloadLinks } from "../components";

export default function HeroSection1() {
  return (
    <section>
      <div className="flex items-center">
        <AppDownloadLinks platform="ios" />
        <AppDownloadLinks platform="android" />
      </div>
      {/*<div className="w-[600px] h-[440px] overflow-hidden">*/}
      {/*  <Spline*/}
      {/*    scene="https://prod.spline.design/eolxO7z91jjYft7U/scene.splinecode"*/}
      {/*    style={{*/}
      {/*      width: '800px',*/}
      {/*      height: '500px',*/}
      {/*      marginLeft: '-50px',*/}
      {/*      marginTop: '-10px',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
    </section>
  )
}
