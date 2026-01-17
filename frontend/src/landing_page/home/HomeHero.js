import React from "react";
import { useNavigate } from "react-router-dom";

function HomeHero() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div className="container p-5 mb-3">
            <div className="row text-center">
                <img src="media/images/homeHero.png" className="mb-5" alt="homeHero"/>
                <h1>Invest in everything in StockEra</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button 
                    onClick={handleSignup}
                    className="p-2 btn btn-primary fs-5 mt-4" 
                    style={{minWidth: "150px", margin: "0 auto", cursor: "pointer", padding: "10px 30px !important"}}
                >
                    Signup now
                </button>
            </div>
        </div>
    );
}

export default HomeHero;