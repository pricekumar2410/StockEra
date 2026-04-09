import React from 'react'

function Pricing() {
    return (
        <>
            <style>
                {`
    .pricingmaindiv{
        background: linear-gradient(135deg, #FFFFFF, #F5F7FA);
        color: #333333;
    }
    .pricingmaindiv:hover{
        background: linear-gradient(90deg, #1E3A8A 0%, #7DD3FC 100%);
    color: #fdbb2d;
    border-radius: 5px;
    }
     .pricingmaindiv:hover p{
    color: white;
    }
    `}
            </style>
            <div className='pricingmaindiv'>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-5'>
                            <h1 className='fs-3 mb-4'>Low Costs. Maximum Value.</h1>
                            <p>Invest smarter with zero account fees and flat ₹20 per trade. Built for beginners and experienced traders alike.</p>
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
                                    <p className="mb-0 text-muted" style={{ fontSize: "10px", color: "white" }}>Free account opening</p>
                                </div>
                                <div className="col-5 d-flex align-items-center justify-content-center">
                                    <img
                                        src="media/images/pricing0.svg"
                                        alt="₹0"
                                        style={{ width: "90px" }}
                                    />
                                    <p className="mb-0 text-muted" style={{ fontSize: "10px", color: "white" }}>Free equity delivery <br /> and direct mutual funds</p>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-center">
                                    <img
                                        src="media/images/pricing20.svg"
                                        alt="₹20"
                                        style={{ width: "90px" }}
                                    />
                                    <p className="mb-0 text-muted" style={{ fontSize: "10px", color: "white" }}>Intraday and F&O</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr style={{ margin: "0px", marginTop: "1rem", opacity: "0.07" }} />
            </div>
        </>
    );
}

export default Pricing;