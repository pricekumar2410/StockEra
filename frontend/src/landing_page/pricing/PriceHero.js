import React from 'react'

function PriceHero() {
    return ( 
        <div className='container text-center mt-5'>
            <div className='p-5'>
                <h1>Pricing</h1>
                <h6 className='p-4 text-muted'>Free equality investments and flat &#8377; 20 trady and F&amp;O trades</h6>
            </div>
            <div className='row border-top'>
                <div className='col-4 mt-5'>
                    <img src='media/images/pricing0.svg' style={{width: "70%"}}/>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted p-3'>All equity delivery investments (NSE, BSE), are absolutely free — &#8377; 0 brokerage.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/images/pricing20.svg' style={{width: "70%"}}/>
                    <h3>Intraday and F&amp;O trades</h3>
                    <p className='text-muted p-3'>Flat &#8377; 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat &#8377; 20 on all option trades.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/images/pricing0.svg' style={{width: "70%"}}/>
                    <h3>Free direct MF</h3>
                    <p className='text-muted p-3'>All direct mutual fund investments are absolutely free — &#8377; 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default PriceHero;