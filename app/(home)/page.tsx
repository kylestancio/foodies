import Banner from './(components)/banner'
import FeaturedCollectionCard from './(components)/featured-collection-card'
import FeaturedCollectionSection from './(components)/featured-collection-section'
import FeaturedRestaurantCard from './(components)/featured-restaurant-card'
import FeaturedRestaurantSection from './(components)/featured-restaurant-section'
import Footer from './(components)/footer'
import Navbar from './(components)/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='mb-32'>
          <Banner />
        </div>
        <div className='mb-32 w-full'>
          <h1 className='text-4xl font-black mb-8 text-center underline underline-offset-auto'>Trending menu today</h1>
          <FeaturedCollectionSection className={'mx-5 mb-12'}>
            <FeaturedCollectionCard title={'The Food Name'} description={'The Food Description'} link={'/'} />
            <FeaturedCollectionCard title={'The Food Name'} description={'The Food Description'} link={'/'} />
            <FeaturedCollectionCard title={'The Food Name'} description={'The Food Description'} link={'/'} />
            <FeaturedCollectionCard title={'The Food Name'} description={'The Food Description'} link={'/'} />
          </FeaturedCollectionSection>
          <div className='flex justify-center'>
            <Link href={'/'} className='inline-block text-slate-600 mb-4 me-5 hover:underline underline-offset-8 outline outline-slate-600 p-3 rounded-md'>Check everything</Link>
          </div>
        </div>
        <div className='mb-32'>
          <h1 className='text-4xl font-black mb-8 text-center underline underline-offset-auto'>Featured Restaurants</h1>
          <FeaturedRestaurantSection className='mx-5 mb-12'>
            <FeaturedRestaurantCard title={'Untitled Restaurant'} link={'/'}/>
            <FeaturedRestaurantCard title={'Untitled Restaurant'} link={'/'}/>
            <FeaturedRestaurantCard title={'Untitled Restaurant'} link={'/'}/>
            <FeaturedRestaurantCard title={'Untitled Restaurant'} link={'/'}/>
            <FeaturedRestaurantCard title={'Untitled Restaurant'} link={'/'}/>
            <FeaturedRestaurantCard title={'Untitled Restaurant'} link={'/'}/>
          </FeaturedRestaurantSection>
          <div className='flex justify-center'>
            <Link href={'/'} className='inline-block text-slate-600 mb-4 me-5 hover:underline underline-offset-8 outline outline-slate-600 p-3 rounded-md'>Check everything</Link>
          </div>
        </div>
        <div className='mb-32'>
          <h1 className='text-4xl font-black mb-8 text-center'>Reserve a table now</h1>
          <div className='flex justify-center'>
            <Link href={'/'} className='bg-slate-800 text-slate-100 rounded-md shadow-md p-3'>
              New table reservation
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
