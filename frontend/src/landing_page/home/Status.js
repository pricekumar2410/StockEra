import React from 'react'

function Status() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-5'>
                    <div>
                        <h2>Trust with confidence</h2>
                        <h4 className='mt-5'>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.6+ crore customers trust StockEra with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div>
                        <h4 className='mt-4'>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div>
                        <h4 className='mt-4'>The StockEra universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h4 className='mt-4'>Do better with money</h4>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-7'>
                    <img src='media/images/ecosystem.png' style={{ width: "90%"}} className='mt-5' />
                    <div className='text-center'>
                        <a href='#' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='#' style={{textDecoration: "none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <img src='media/images/pressLogos.png' className='mt-4 mx-auto d-block' />
        </div>
    );
}

export default Status;