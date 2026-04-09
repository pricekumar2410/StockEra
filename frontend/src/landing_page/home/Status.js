import React from 'react'

function Status() {
    return (
        <>
            <style>
                {`
    .StatusMainDiv{
        background: linear-gradient(135deg, #FFFFFF, #F2F4F7);
        color: #333333;
    }
    .StatusMainDiv:hover{
          background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
color: #fdbb2d;
border-radius: 5px;
    }
 .StatusMainDiv:hover p{
 color: white;
 }
    `}
            </style>
            <div className='StatusMainDiv'>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-5'>
                            <div>
                                <h2><span style={{ color: "#4988C4" }}>Why</span> investors trust Us</h2>
                                <h4 className='mt-5'>Built for investors</h4>
                                <p style={{ opacity: "0.9" }}>Our platform is designed with a customer-first mindset, ensuring transparency and reliability at every step.</p>
                            </div>
                            <div>
                                <h4 className='mt-4'>Transparent & honest</h4>
                                <p style={{ opacity: "0.9" }}>No hidden charges, no confusing terms — just straightforward pricing and clear communication.</p>
                            </div>
                            <div>
                                <h4 className='mt-4'>Powerful ecosystem</h4>
                                <p style={{ opacity: "0.9" }}>Access advanced tools, research insights, and smart investment options — all in one place.</p>
                            </div>
                            <div>
                                <h4 className='mt-4'>Helping you grow</h4>
                                <p style={{ opacity: "0.9" }}>We don’t just enable trading; we empower you to make smarter financial decisions.</p>
                            </div>
                        </div>
                        <div className='col-7'>
                            <img src='media/images/ecosystem.png' style={{ width: "70%", marginLeft: "6rem" }} className='mt-2' />
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' className='mt-4 mx-auto d-block' />
                </div>
                <hr style={{ margin: "0px", marginTop: "1rem", opacity: "0.07" }} />
            </div>
        </>
    );
}

export default Status;