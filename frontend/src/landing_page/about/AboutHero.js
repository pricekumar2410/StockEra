import React from 'react'

function AboutHero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h4 className='text-muted text-center'>
                    We are redefining the way India invests.
                    <br /> Simple. Transparent. Technology-driven.
                </h4>
            </div>

            <div className='row border-top p-3' style={{ fontSize: "18px" }}>
                <div className='col p-5 text-muted'>
                    <p>
                        Our journey began with a simple mission — to make investing accessible and affordable for everyone.
                        We built our platform to remove unnecessary costs, complicated processes, and outdated systems.
                    </p>

                    <p>
                        With transparent pricing and modern technology, we aim to provide a smooth and reliable
                        trading experience for beginners as well as experienced investors.
                    </p>

                    <p>
                        Today, thousands of users trust our platform to manage their investments with confidence
                        and ease.
                    </p>
                </div>

                <div className='col p-5 text-muted' style={{ fontSize: "18px" }}>
                    <p>
                        Beyond trading, we focus on financial education and empowering individuals
                        to make smarter money decisions.
                    </p>

                    <p>
                        Our platform offers user-friendly tools, real-time insights, and secure systems
                        to help you stay ahead in the market.
                    </p>

                    <p>
                        We continue to innovate every day, building solutions that simplify investing
                        and create long-term value for our community.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default AboutHero;