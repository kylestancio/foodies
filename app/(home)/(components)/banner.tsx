"use client"

import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative m-5 h-96 w-auto p-4 grid place-content-center'>
      <p className='text-white font-black text-center text-4xl md:text-6xl lg:text-8xl bg-slate-900 px-14'>Experience Food</p>
      <Image src={'/banner-img-1.png'} alt='banner' objectFit='cover' fill className='rounded-xl relative -z-10'/>
    </div>
  )
}
