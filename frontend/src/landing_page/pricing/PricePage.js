import React from 'react'
import BrokerAge from './BrokerAge';
import PriceHero from './PriceHero';
import OpenAccount from "../OpenAccount.js"

function PricePage() {
    return (
        <>
            <PriceHero />
            <OpenAccount />
            <BrokerAge />
        </>
    );
}

export default PricePage;