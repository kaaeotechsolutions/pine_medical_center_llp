import React from 'react';
import { Navbar, Footer, ServiceCard, CompetitiveAdvantages, UsefulInformation } from '../components';
import { ServiceHero } from '../containers';

const Service = () => {
  return (
    <section className="">
      <Navbar />
      <ServiceHero />
      <ServiceCard />
      <CompetitiveAdvantages />
      <UsefulInformation />
      <Footer />
    </section>
  )
}

export default Service
