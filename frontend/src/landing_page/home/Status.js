import React from 'react'

function Status() {
    return (
        <div style={{ backgroundColor: "#1C4D8D", color: "white" }}>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-5'>
                        <div>
                            <h2><span style={{ color: "#4988C4" }}>Why</span> investors trust Us</h2>
                            <h4 className='mt-5'>Built for investors</h4>
                            <p style={{ color: "white" }}>Our platform is designed with a customer-first mindset, ensuring transparency and reliability at every step.</p>
                        </div>
                        <div>
                            <h4 className='mt-4'>Transparent & honest</h4>
                            <p style={{ color: "white" }}>No hidden charges, no confusing terms — just straightforward pricing and clear communication.</p>
                        </div>
                        <div>
                            <h4 className='mt-4'>Powerful ecosystem</h4>
                            <p style={{ color: "white" }}>Access advanced tools, research insights, and smart investment options — all in one place.</p>
                        </div>
                        <div>
                            <h4 className='mt-4'>Helping you grow</h4>
                            <p style={{ color: "white" }}>We don’t just enable trading; we empower you to make smarter financial decisions.</p>
                        </div>
                    </div>
                    <div className='col-7'>
                        <img src='media/images/ecosystem.png' style={{ width: "70%", marginLeft: "6rem" }} className='mt-2' />
                    </div>
                </div>
                <img src='media/images/pressLogos.png' className='mt-4 mx-auto d-block' />
            </div>
        </div>
    );
}

export default Status;