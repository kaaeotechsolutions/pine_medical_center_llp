import React from 'react'
import { SocialMedia } from '../components';
import { Team, TeamHero } from '../containers';
import { doctorData, managementData } from '../constants/data'

const OurTeam = () => {
    return (
        <section className="">
            <TeamHero/>
            <Team title="Management" person={managementData} />
            <Team title="Doctor" person={doctorData} />
            <SocialMedia/>
        </section>
    )
}

export default OurTeam
