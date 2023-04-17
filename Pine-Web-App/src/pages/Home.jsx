import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../containers/Hero'
import AboutHero from '../containers/AboutHero'
import AppointmentForm from '../components/AppointmentForm'
import ContactSection from '../containers/ContactSection'
import CardGallery from '../components/CardGallery'


const Home = () => {
  return (
    <section className=" ">
      <div className="">
        <NavBar />
      </div>
      <main className="">
        <Hero />
        <AboutHero />
        <CardGallery/>
        <ContactSection />
      </main>
      <div className=" ">
        <Footer />
      </div>
    </section>
  )
}

export default Home
