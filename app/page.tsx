import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
      <h1 className='fixed z-100 text-rose-800 font-mono text-5xl rotate-2 font-medium tracking-tighter border-rose-800 border-4 px-2 py-1.5'>WORK IN PROGRESS</h1>
      <h1 className='fixed z-90 text-white font-mono text-5xl rotate-2 font-medium tracking-tighter border-white border-4 px-2 py-1.5 blur-sm opacity-45'>WORK IN PROGRESS</h1>
      <div className='w-lvw h-lvh flex justify-center items-end py-0 blur-xs'>
        <div className='w-lvw h-lvh flex justify-center items-center absolute'>
          <img src='/IMG_9310.jpeg' className='absolute z-10 w-[60vw] rounded-4xl -translate-y-10 -rotate-4 shadow-2xl shadow-neutral-700 grayscale-95 brightness-105'></img>
        </div>
        <div className='w-lvw h-lvw bg-radial-[at_50%_10%] from-yellow-200 from-20% to-70% to-white relative'></div>
        <h1 className='font-serif font-medium text-[17.5svw] tracking-tighter py-6 leading-none absolute z-20'>Kaka Abdeel</h1>
      </div>
    </div>
  )
}

export default Home
