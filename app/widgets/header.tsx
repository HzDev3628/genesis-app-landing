'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import AnimatedBackground from '../components/motion-ui/animation-background'

export function Header() {
  const [state, setState] = useState('Features')
  return (
    <header className="w-full flex items-center justify-center px-3 mx-auto mt-6 max-w-[736px] h-[72px] rounded-20 border border-white bg-opacity-50 fixed overflow-hidden z-50 left-1/2 -translate-x-1/2">
      <div className="w-[263px] h-[356px] bg-200 opacity-40 blur-lg absolute left-0 -top-[290px]" />
      <div className="w-full h-12 grid grid-cols-4 items-center px-3 grid-rows-1 rounded-8 bg-gradient-to-b from-white to-50 drop-shadow-[0px_2px_4px_#00000010] relative z-10">
        <Image
          src={'/logo.png'}
          width={24}
          height={24}
          alt="Logo"
          className="col-span-1"
        />
        <div className="flex items-center w-max mx-auto col-span-2 text-sm font-bold gap-3">
          <AnimatedBackground
            defaultValue="Features"
            onValueChange={(value) => setState(value!)}
            // @NOTE: custom color, because framer don't finding color from global.css
            className="rounded-4 bg-gradient-to-b from-white from-[22%] to-[#f6fbff] border border-[#e7f3ff] shadow-[0px_2px_4px_#00000010]"
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
            }}
          >
            {['Features', 'How it works?', 'Pricing', 'FAQ'].map((value) => (
              <button
                type="button"
                key={value}
                data-id={value}
                className={cn(
                  'py-1 px-2.5 transition-colors duration-150',
                  value === state ? 'text-grey-600' : 'text-grey-500',
                )}
              >
                {value}
              </button>
            ))}
          </AnimatedBackground>
        </div>
        <button
          className="cols-span-1 ml-auto w-max h-max cursor-pointer font-bold rounded-4 bg-gradient-to-b from-300 from-[32%] to-400 px-2.5 py-1 text-sm text-white shadow-md transition active:scale-[.95]"
          type="button"
        >
          Download
        </button>
      </div>
      <div className="w-[263px] h-[356px] bg-200 opacity-40 blur-lg absolute right-0 -bottom-[290px]" />
    </header>
  )
}
