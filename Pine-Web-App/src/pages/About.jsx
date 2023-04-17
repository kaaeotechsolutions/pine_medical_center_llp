import { Box } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../containers/AboutHero'
import Team from '../containers/Team'
import Testimonial from '../components/Testimonial';

const About = () => {
  return (
    <Box>
        <Navbar/>
        <Hero/>
        <Team/>
        <Testimonial/>
        <Footer/>
    </Box>
  )
}

export default About
