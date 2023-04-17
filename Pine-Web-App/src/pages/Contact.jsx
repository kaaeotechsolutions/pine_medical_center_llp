import React from 'react';
import { Navbar, Footer, ContactInfo, SocialMedia } from '../components';
import { ContactSection, ContactHero } from '../containers';

const Contact = () => {
    return (
        <section className="">
            <Navbar />
            <ContactHero />
            <ContactSection />
            <ContactInfo />
            <SocialMedia />
            <Footer />
        </section>
    )
}

export default Contact
