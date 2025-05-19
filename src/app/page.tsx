import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import AboutUs from './(section)/AboutUs'
import MenuShowcaseCarousel from './(section)/MenuShowcaseCarousel'
import ArchivesSection from './(section)/ArchivesSection'
import Specialties from './(section)/Specialties'
import ReserveSection from './(section)/ReserveSection'
import Reviews from './(section)/Reviews'

const page = () => {
  return (
    <main>
         <div>
          <Navbar/>
          <Hero/>
          <AboutUs/>
          <MenuShowcaseCarousel/>
          <ArchivesSection/>
          <Specialties/>
          <ReserveSection/>
          <Reviews/>
         </div>
    </main>
  )
}

export default page