import React from 'react'
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div className='container text-center mb-5'>
            <h5 className='p-5 mb-5 text-muted'>Want to know more about our technology stack? Check out the StockEra.tech blog.</h5>
            <h1 className='text-muted fs-3'>The StockEra Universe</h1>
            <h6 className='text-muted mb-5 p-3'>Extend your trading and investment experience even further with our partner platforms</h6>
            <div className='row p-3'>
                <div className='col-4'>
                    <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                        <img src='media/images/zerodhaFundhouse.png' style={{ width: "70%" }} alt="fundhouse"/>
                        <br />
                        <p className='text-muted p-3' style={{ fontSize: "12px", marginLeft: "3rem", marginRight: "3rem", textAlign: "center" }}>
                            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                        </p>
                    </a>
                </div>
                <div className='col-4'>
                    <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                        <img src='media/images/sensibullLogo.svg' style={{ width: "70%" }} alt="sensibull"/>
                        <br />
                        <p className='text-muted p-3' style={{ fontSize: "12px", marginLeft: "3rem", marginRight: "3rem", textAlign: "center" }}>
                            Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.

                        </p>
                    </a>
                </div>
                <div className='col-4'>
                    <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                        <img src='media/images/tijori.svg' style={{ width: "70%" }} alt="tijori"/>
                        <br />
                        <p className='text-muted p-3' style={{ fontSize: "12px", marginLeft: "3rem", marginRight: "3rem", textAlign: "center" }}>
                            Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.

                        </p>
                    </a>
                </div>
            </div>
            <div className='row p-3'>
                <div className='col-4'>
                    <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                        <img src='media/images/streakLogo.png' style={{ width: "70%" }} alt="streak"/>
                        <br />
                        <p className='text-muted p-3' style={{ fontSize: "12px", marginLeft: "3rem", marginRight: "3rem", textAlign: "center" }}>
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </a>
                </div>
                <div className='col-4 p-'>
                    <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                        <img src='media/images/smallcaseLogo.png' style={{ width: "70%" }} alt="smallcase"/>
                        <br />
                        <p className='text-muted p-3' style={{ fontSize: "12px", marginLeft: "3rem", marginRight: "3rem", textAlign: "center" }}>
                            Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </a>
                </div>
                <div className='col-4'>
                    <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                        <img src='media/images/dittoLogo.png' style={{ width: "70%" }} alt="ditto"/>
                        <br />
                        <p className='text-muted p-3' style={{ fontSize: "12px", marginLeft: "3rem", marginRight: "3rem", textAlign: "center" }}>
                            Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            Sign up for free
                        </p>
                    </a>
                </div>
            </div>
            <button 
                onClick={handleSignup}
                className='btn btn-primary mt-5 mb-5 px-4 py-2 fs-5'
                style={{cursor: "pointer", minWidth: "150px"}}
            >
                Sign up for free
            </button>
        </div>
    );
}

export default Universe;