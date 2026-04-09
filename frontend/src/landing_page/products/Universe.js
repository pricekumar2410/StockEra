import React from 'react'
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <>

            <style>
                {`
                 .UniverseMainDiv1{
        background: white;
        color: #333333;
    }
    .UniverseMainDiv1:hover{
    background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
    }
    .UniverseMainDiv1:hover p{
    color: white;
    }
    UniverseMainDiv2{
        background: white;
        color: #333333;
    }
    .UniverseMainDiv2:hover{
    background: linear-gradient(90deg, #1E3A8A 0%, #7DD3FC 100%);
    }
    .UniverseMainDiv2:hover p{
    color: white;
    }
.universe-card {
    padding: 20px;
    border-radius: 15px;
    background: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
}

.universe-card img {
    width: 70%;
    margin-bottom: 15px;
    transition: 0.3s;
}

.universe-card p {
    font-size: 13px;
    color: #555;
}

/* Hover Effect */
.universe-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(255, 0, 0, 0.8);
}


.signup-btn {
width: auto;
    background: blue;
    color: white;
    border: none;
    padding: 12px 28px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Hover Effect */
.signup-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(255, 0, 0, 0.8) !important;
    background: white;
    color: red;
    border: 2px solid blue;
}

/* Click Effect */
.signup-btn:active {
    transform: scale(1);
}

`}
            </style>

            <div className='container text-center mb-5'>

                <h5 className='p-5 mb-1 mt-2 text-muted' >
                    Want to learn more about how this project is built? Check out the StockEra blog.
                </h5>

                <h1 className='fs-3'>The StockEra Universe</h1>

                <h6 className='mb-5 p-3 text-muted'>
                    Explore additional sections and features that enhance your learning experience.
                </h6>

                <div className='row p-3'>
                    <div className='col-4 universe-card UniverseMainDiv1'>
                        <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                            <img src='media/images/universe1.avif' style={{ width: "70%" }} />
                            <br />
                            <p className='p-3' style={{ fontSize: "13px", marginLeft: "3rem", marginRight: "3rem" }}>
                                A simple section to understand how funds work and how people invest for long-term goals.
                            </p>
                        </a>
                    </div>

                    <div className='col-4 universe-card UniverseMainDiv2'>
                        <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                            <img src='media/images/universe2.svg' style={{ width: "70%" }} />
                            <br />
                            <p className='p-3' style={{ fontSize: "13px", marginLeft: "3rem", marginRight: "3rem" }}>
                                A basic platform to explore trading ideas and understand simple market strategies.
                            </p>
                        </a>
                    </div>

                    <div className='col-4 universe-card UniverseMainDiv1'>
                        <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                            <img src='media/images/universe3.jfif' style={{ width: "70%" }} />
                            <br />
                            <p className='p-3' style={{ fontSize: "13px", marginLeft: "3rem", marginRight: "3rem" }}>
                                A learning section that provides simple information about stocks and market trends.
                            </p>
                        </a>
                    </div>
                </div>

                <div className='row p-3 '>
                    <div className='col-4 universe-card UniverseMainDiv2' >
                        <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                            <img src='media/images/universe4.png' style={{ width: "60%" }} />
                            <br />
                            <p className='p-3' style={{ fontSize: "13px", marginLeft: "3rem", marginRight: "3rem" }}>
                                A simple feature to understand how trading strategies can be created and tested.
                            </p>
                        </a>
                    </div>

                    <div className='col-4 universe-card UniverseMainDiv1'>
                        <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                            <img src='media/images/universe5.jpg' style={{ width: "100%" }} />
                            <br />
                            <p className='p-3' style={{ fontSize: "13px", marginLeft: "3rem", marginRight: "3rem" }}>
                                A section to explore grouped investments and learn how diversification works.
                            </p>
                        </a>
                    </div>

                    <div className='col-4 universe-card UniverseMainDiv2'>
                        <a href='#' style={{ textDecoration: "none", textAlign: "center" }}>
                            <img src='media/images/universe6.jfif' style={{ width: "70%" }} />
                            <br />
                            <p className='p-3' style={{ fontSize: "13px", marginLeft: "3rem", marginRight: "3rem" }}>
                                A simple guide to understand basic insurance concepts and financial planning.
                            </p>
                        </a>
                    </div>
                </div>
                <button
                    onClick={handleSignup}
                    className='signup-btn mt-5 mb-5'
                >
                    Sign up for free
                </button>
            </div >
        </>
    );
}

export default Universe;