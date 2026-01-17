import React from 'react'

function Pricing() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='fs-3 mb-4'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' className='mt-2' style={{ textDecoration: "none" }}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7 justify-content-center d-flex align-items-center'>
                    <div className="row justify-content-center">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img
                                src="media/images/pricing0.svg"
                                alt="₹0"
                                style={{ width: "90px" }}
                            />
                            <p className="mb-0 text-muted" style={{ fontSize: "10px" }}>Free account opening</p>
                        </div>
                        <div className="col-5 d-flex align-items-center justify-content-center">
                            <img
                                src="media/images/pricing0.svg"
                                alt="₹0"
                                style={{ width: "90px" }}
                            />
                            <p className="mb-0 text-muted" style={{ fontSize: "10px" }}>Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <img
                                src="media/images/pricing20.svg"
                                alt="₹20"
                                style={{ width: "90px" }}
                            />
                            <p className="mb-0 text-muted" style={{ fontSize: "10px" }}>Intraday and F&O</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;