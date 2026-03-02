import React from 'react'

function Education() {
    return (
        <div style={{ backgroundColor: "#5B23FF", color: "white" }}>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-6'>
                        <img src='media/images/education.svg' />
                    </div>
                    <div className='col-6'>
                        <h1 className='fs-3 mb-4 mt-4' style={{ color: "white" }}>Learn Stock Trading for Free</h1>
                        <p>Learn trading and investing step by step with simple lessons and easy examples. Start from basics and grow your skills with Varsity.</p>
                        <a href='#' style={{ textDecoration: "none" }}>Explore Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <p className='mt-5'>Join TradingQ&A to ask questions, share ideas, and learn from thousands of other investors.</p>
                        <a href='#' style={{ textDecoration: "none" }}>Join TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;