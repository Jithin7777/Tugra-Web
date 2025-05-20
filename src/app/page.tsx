import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import AboutUs from './(section)/AboutUs'
import MenuShowcaseCarousel from './(section)/MenuShowcaseCarousel'
import ArchivesSection from './(section)/ArchivesSection'
import Specialties from './(section)/Specialties'
import ReserveSection from './(section)/ReserveSection'
import Reviews from './(section)/Reviews'
import StoryGallery from './(section)/StoryGallery'
import Footer from './components/Footer'

const page = () => {
  return (
    <main>
         <div className=''>
          <Navbar/>
          <Hero/>
          <AboutUs/>
          <MenuShowcaseCarousel/>
          <ArchivesSection/>
          <Specialties/>
          <ReserveSection/>
          <Reviews/>
          <StoryGallery/>
          <Footer/>
         </div>
    </main>
  )
}

export default page