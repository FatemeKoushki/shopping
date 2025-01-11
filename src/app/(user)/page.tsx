import Banner from '@/components/Banner'
import BestSellers from '@/components/BestSellers'
import HomeBanner from '@/components/HomeBanner'
import NewArrival from '@/components/NewArrival'
import YearProduct from '@/components/YearProduct'
import React from 'react'
import { Toaster } from 'react-hot-toast'

function HomePage() {
  return (
    <div className='overflow-y-hidden mx-auto' >
     <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
      <Banner/>
      <NewArrival />
      <HomeBanner />
      <BestSellers title="Our Bestsellres" />
      <YearProduct />
      <BestSellers title="Special Offers" />
      

    </div>
  )
}

export default HomePage
