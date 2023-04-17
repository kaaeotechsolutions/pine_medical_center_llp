import { Box } from '@chakra-ui/react';
import React from 'react'
import {Navbar, Footer, Testimonial, Equipment} from '../components'
import {AboutHero, Team} from '../containers'


const About = () => {
  return (
    <Box>
        <Navbar/>
        <AboutHero/>
        <Team/>
        <Equipment/>
        <Testimonial/>
        <Footer/>
    </Box>
  )
}

export default About
