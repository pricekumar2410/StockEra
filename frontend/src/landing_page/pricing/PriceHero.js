import React from 'react'

function PriceHero() {
    return (
        <div>
            <div className='container text-center' style={{ marginTop: "26px" }} >
                <div className='p-5 mt-3'>
                    <h1>Pricing</h1>
                    <h5 className='p-3 text-muted'>
                        Simple and transparent pricing for everyone
                    </h5>
                    <p className='text-muted'>
                        Enjoy free equity investments and a flat ₹20 per trade for intraday and F&O.
                    </p>
                </div>
                <div className='row border-top'>
                    <div className='col-4 mt-5'>
                        <img src='media/images/pricing0.svg' style={{ width: "70%" }} />
                        <h3>Free Equity Delivery</h3>
                        <p className='text-muted p-3' style={{ fontSize: "13px" }}>
                            Learn and explore equity delivery investments with zero brokerage.
                            Designed to help beginners understand long-term investing easily.
                        </p>
                    </div>

                    <div className='col-4 mt-5'>
                        <img src='media/images/pricing20.svg' style={{ width: "70%" }} />
                        <h3>Intraday & F&O Trades</h3>
                        <p className='text-muted p-3' style={{ fontSize: "13px" }}>
                            Experience intraday and F&O trading with a simple flat fee model.
                            This section demonstrates how trading charges typically work.
                        </p>
                    </div>

                    <div className='col-4 mt-5'>
                        <img src='media/images/pricing0.svg' style={{ width: "70%" }} />
                        <h3>Direct Mutual Funds</h3>
                        <p className='text-muted p-3' style={{ fontSize: "13px" }}>
                            Explore mutual fund investments with no extra charges.
                            Built to help users learn how fund investments work in a simple way.
                        </p>
                    </div>
                </div>
                <hr style={{ margin: "0px", opacity: "0.07" }} />
            </div>
        </div>
    );
}

export default PriceHero;