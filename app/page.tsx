import React, { Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline/next'))

export default function Home() {
  return (
    <div className="font-bold flex flex-col items-center justify-center">
      main page
      <div className="w-[600px] h-[440px] overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene="https://prod.spline.design/eolxO7z91jjYft7U/scene.splinecode"
            style={{
              width: '800px',
              height: '500px',
              marginLeft: '-50px',
              marginTop: '-10px',
            }}
          />
        </Suspense>
      </div>
    </div>
  )
}
