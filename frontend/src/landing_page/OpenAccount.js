import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <>

            <style>
                {`
                .openAccountMain{
        background: white;
        color: #333333;
    }
    .openAccountMain:hover{
        background: linear-gradient(90deg, #1E3A8A 0%, #7DD3FC 100%);
    color: #fdbb2d;
    border-radius: 5px;
    }
     .openAccountMain:hover p{
    color: white;
    }
    .accountBtn{
    cursor: "pointer";
    minWidth: "150px";
    font-weight: 600;
    background: blue;
    color: white;
    }
    .accountBtn:hover{
    background: white;
    border: 2px solid blue;
    color: red;
    box-shadow: 0 0 25px red;
    }
    `}
            </style>

            <div className='openAccountMain' >
                <div className='container text-center p-5'>
                    <h1 className='fs-3 mt-3'>Invest Smart. Invest Simple.</h1>
                    <p className=' mt-3'>Access powerful trading platforms, ₹0 account opening, and flat ₹20 intraday & F&O trades.</p>
                    <button
                        onClick={handleSignup}
                        className='btn mt-3 px-4 py-2 fs-5 accountBtn'
                    >
                        Get Started Now
                    </button>
                </div>
                <hr style={{ margin: "0px", marginTop: "1rem", opacity: "0.07" }} />
            </div>
        </>
    );
}

export default OpenAccount;