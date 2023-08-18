import React from 'react'

export default function FeaturedRestaurantSection({ children, className }: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`grid md:grid-cols-2 gap-3 ${className}`}>
      { children }
    </div>
  )
}
