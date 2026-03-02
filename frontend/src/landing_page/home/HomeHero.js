import React from "react";
import { useNavigate } from "react-router-dom";

function HomeHero() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div style={{ backgroundColor: "#1C4D8D", color: "white" }}>
            <div className="container p-5">
                <div className="row text-center">
                    <img src="media/images/homeHero.png" className="mb-5" alt="homeHero" />
                    <h1>Invest Smartly with StockEra</h1>
                    <p>Simple and secure platform to invest in stocks, mutual funds and ETFs.</p>
                    <button
                        onClick={handleSignup}
                        className="p-2 btn btn-primary fs-5 mt-4"
                        style={{ maxWidth: "10rem", margin: "0 auto", cursor: "pointer", padding: "10px 30px !important" }}
                    >
                        Signup now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;