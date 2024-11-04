import Spline from '@splinetool/react-spline/next'

export default function Home() {
  return (
    <div className="font-bold flex items-center justify-center">
      main page
      <div className="w-[600px] h-[440px] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/eolxO7z91jjYft7U/scene.splinecode"
          style={{ width: '700px', height: '500px', marginLeft: '-50px', marginTop: '-10px' }}
        />
      </div>
    </div>
  )
}
