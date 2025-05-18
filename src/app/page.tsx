import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import AboutUs from './(section)/AboutUs'
import MenuShowcaseCarousel from './(section)/MenuShowcaseCarousel'
import ArchivesSection from './(section)/ArchivesSection'

const page = () => {
  return (
    <main>
         <div>
          <Navbar/>
          <Hero/>
          <AboutUs/>
          <MenuShowcaseCarousel/>
          <ArchivesSection/>
         </div>
    </main>
  )
}

export default page