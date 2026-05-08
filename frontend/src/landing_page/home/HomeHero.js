import React from "react";
import { useNavigate } from "react-router-dom";

function HomeHero() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <>
            <style>
                {`
    .HomeHeroMainDiv{
        background: white;
        color: #333333;
        margin-top: 26px;
    }
    .HomeHeroMainDiv:hover{
    background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
color: #fdbb2d;
border-radius: 5px;
    }
.HomeHeroMainDiv:hover p{
color: white;
    }
.homesignup{
    cursor: "pointer";
    font-weight: 600;
    background: blue;
    color: white;
    }
    .homesignup:hover{
    background: white;
    border: 2px solid blue;
    color: red;
    box-shadow: 0 0 25px red;
    }

    `}
            </style>
            <div className="HomeHeroMainDiv">
                <div className="container" style={{ paddingTop: "1rem" }}>
                    <div className="row text-center">
                        <img src="media/images/homeHero.png" className="mb-5" alt="homeHero" />
                        <h1>Invest Smartly with StockEra</h1>
                        <p>Simple and secure platform to invest in stocks, mutual funds and ETFs.</p>
                        <button
                            onClick={handleSignup}
                            className="btn mt-3 px-4 py-2 fs-5 homesignup"
                            style={{ width: "12rem", marginLeft: "30rem" }}
                        >
                            Signup now
                        </button>
                    </div>

                </div>
                <hr style={{ margin: "0px", marginTop: "1rem", opacity: "0.07" }} />
            </div>
        </>
    );
}

export default HomeHero;