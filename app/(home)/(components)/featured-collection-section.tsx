import React from 'react'

export default function FeaturedCollectionSection({children, className}: {children: React.ReactNode, className: string}) {
  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-3 ${className}`}>
      { children }
    </div>
  )
}
