import React from 'react';
import HomeHero from './HomeHero';
import Education from './Education';
import Awards from './Awards';
import Status from './Status';
import Pricing from './Pricing';

import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
            <HomeHero />
            <Awards />
            <Status />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;