import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div className='container text-center p-5 mt-5'>
            <h1 className='fs-3 mt-3' style={{opacity: "0.9"}}>Open a StockEra account</h1>
            <p className='text-muted mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button 
                onClick={handleSignup}
                className='btn btn-primary mt-3 px-4 py-2 fs-5'
                style={{cursor: "pointer", minWidth: "150px"}}
            >
                Sign up for free
            </button>
        </div>
    );
}

export default OpenAccount;