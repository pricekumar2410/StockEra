import React from 'react'

function Awards() {
    return (
        <>
            <style>
                {`
    .AwardsMainDiv{
        background: linear-gradient(135deg, #FFFFFF, #F5F7FA);
        color: #333333;
    }
    .AwardsMainDiv:hover{
      background: linear-gradient(90deg, #1E3A8A 0%, #7DD3FC 100%);
    color: white;
    border-radius: 5px;
                }
    .AwardsMainDiv:hover h1{
    color: #fdbb2d
    }
    .textcolors{
    font-size: 16px;
    }
    `}
            </style>
            <div className='AwardsMainDiv'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 p-4'>
                            <img src='media/images/TrustedPartners.webp' style={{ opacity: "0.8", borderRadius: "8px", width: '30vw', height: "45vh" }} />
                        </div>
                        <div className='col-6 p-3 mt-3'>
                            <h1>Your Trusted Stock Trading Partner</h1>
                            <p className='mb-5 textcolors' >Join thousands of users trading and investing in stocks, commodities, and mutual funds with ease and safety.</p>
                            <div className='row mb-3 textcolors'>
                                <div className='col-6' >
                                    <ul>
                                        <li><p>Stocks (Buy & Sell)</p></li>
                                        <li><p>Mutual Funds</p></li>
                                        <li><p>Government Bonds</p></li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul>
                                        <li><p>Commodity Trading</p></li>
                                        <li><p>Currency Exchange</p></li>
                                        <li><p>IPOs</p></li>
                                    </ul>
                                </div>
                            </div>
                            <img src='media/images/pressLogos.png' style={{ width: "90%" }} />
                        </div>
                    </div>
                </div>
                <hr style={{ margin: "0px", marginTop: "1rem", opacity: "0.07" }} />
            </div>
        </>
    );
}

export default Awards;