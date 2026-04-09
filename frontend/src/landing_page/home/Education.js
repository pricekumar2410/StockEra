import React from 'react'

function Education() {
    return (
        <>
            <style>
                {`
   .EducationMainDiv{
        background: linear-gradient(135deg, #FFFFFF, #F2F4F7);
        color: #333333;
    }
    .EducationMainDiv:hover{
          background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
color: #fdbb2d;
border-radius: 5px;
    }
 .EducationMainDiv:hover p{
 color: white;
 }
    `}
            </style>
            <div className='EducationMainDiv'>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src='media/images/education.svg' />
                        </div>
                        <div className='col-6'>
                            <h1 className='fs-3 mb-4 mt-4'>Learn Stock Trading for Free</h1>
                            <p>Learn trading and investing step by step with simple lessons and easy examples. Start from basics and grow your skills with Varsity.</p>
                            <a href='#' style={{ textDecoration: "none" }}>Explore Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            <p className='mt-5'>Join TradingQ&A to ask questions, share ideas, and learn from thousands of other investors.</p>
                            <a href='#' style={{ textDecoration: "none" }}>Join TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: "0px", marginTop: "1rem", opacity: "0.07" }} />
            </div>
        </>
    );
}

export default Education;