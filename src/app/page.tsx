import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import AboutUs from './(section)/AboutUs'

const page = () => {
  return (
    <main>
         <div>
          <Navbar/>
          <Hero/>
          <AboutUs/>
         </div>
    </main>
  )
}

export default page