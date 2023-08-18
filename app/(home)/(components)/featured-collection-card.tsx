"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IFeaturedCollectionCard{
  title: string,
  description: string,
  link: string
}

export default function FeaturedCollectionCard({title, description, link}:IFeaturedCollectionCard) {
  return (
    <Link href={ link }>
      <div className='rounded-md p-3 outline outline-slate-100 shadow-lg'>
        <div className='relative mb-2 w-full h-52 bg-slate-900 rounded-lg overflow-hidden'>
          <Image className='' src={'/banner-img-1.png'} alt='Food Image' objectFit='cover' fill/>
        </div>
        <div>
          <p className='text-3xl font-black'>{ title }</p>
          <p className='text-slate-500'>{ description }</p>
        </div>
      </div>
    </Link>
  )
}
