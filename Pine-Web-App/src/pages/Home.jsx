import React from 'react';
import { Navbar, Footer, ServiceCard } from '../components';
import { Hero, AboutHero, ContactSection } from '../containers';

const Home = () => {
  return (
    <section className=" ">
      <div className="">
        <Navbar />
      </div>
      <main className="">
        <Hero />
        <AboutHero />
        <ServiceCard />
        <ContactSection />
      </main>
      <div className=" ">
        <Footer />
      </div>
    </section>
  )
}

export default Home
