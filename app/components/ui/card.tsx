'use client'
import { useRef, useState } from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div className="relative w-max h-max">
      <article
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col items-center justify-center text-center gap-3.5 w-[445px] h-[240px] rounded-16 px-16 pt-8 pb-10 shadow-[0px_7px_16px_#2895FF20]"
      >
        {children}
      </article>
      <div
        ref={divRef}
        style={{
          opacity,
          border: '1px solid #2895ff',
          WebkitMaskImage: `radial-gradient(50% 100px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        className="border-500 pointer-events-none absolute left-0 top-0 z-10 w-[445px] h-[240px] cursor-default rounded-16 border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500"
      />
    </div>
  )
}
