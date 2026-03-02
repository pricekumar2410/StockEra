import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div style={{ backgroundColor: "#4988C4", color: "white" }}>
            <div className='container text-center p-5'>
                <h1 className='fs-3 mt-3'>Invest Smart. Invest Simple.</h1>
                <p className=' mt-3'>Access powerful trading platforms, ₹0 account opening, and flat ₹20 intraday & F&O trades.</p>
                <button
                    onClick={handleSignup}
                    className='btn btn-primary mt-3 px-4 py-2 fs-5'
                    style={{ cursor: "pointer", minWidth: "150px" }}
                >
                    Get Started Now
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;