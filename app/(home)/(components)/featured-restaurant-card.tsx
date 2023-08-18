"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IFeaturedRestaurantCard{
  link: string,
  title: string,
  location?: string,
  imageLink?: string
}

export default function FeaturedRestaurantCard({ link, title, location, imageLink}:IFeaturedRestaurantCard ) {

  // const [link, setLink] = useState('/')
  // const [title, setTitle] = useState('Untitled Restaurant')
  // const [location, setLocation] = useState('No location')
  // const [imageLink, setImageLink] = useState('/')

  return (
    <Link href={ link }>
      <div className='h-24 outline outline-slate-200 rounded-md overflow-hidden flex shadow-md'>
        <div className='relative rounded-full bg-slate-500 w-44 h-44 -ms-5 -mt-10 overflow-hidden'>
          <Image src={'/banner-img-1.png'} alt='placeholder' objectFit='cover' fill />
        </div>
        <div className='p-2'>
          <p className='ms-3 font-bold text-lg'>{ title }</p>
          <p className='ms-3 text text-slate-400'>{ location || 'No location' }</p>
        </div>
      </div>
    </Link>
  )
}
