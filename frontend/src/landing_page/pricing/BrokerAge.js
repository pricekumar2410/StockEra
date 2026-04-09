import React from 'react'

function BrokerAge() {
    return (
        <>

            <style>
                {`
                .BrokerAgeMainDiv{
        background: white;
        color: #333333;
    }
    .BrokerAgeMainDiv:hover{
    background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
color: #fdbb2d;
border-radius: 5px;
    }
.broker-card {
    background: white;
    backdrop-filter: blur(10px);
    padding: 15px;
    border-radius: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    height: 100%;
    margin-right: 2rem
}

/* Hover effect */
.broker-card:hover {
    transform: translateY(-10px) scale(1.02);
   box-shadow: 0 0 30px rgba(255, 0, 0, 0.9); /* red glow */
}

/* List styling */
.broker-card ul {
    padding-left: 20px;
}

.broker-card li {
    margin-bottom: 10px;
    color: #555;
}
`}
            </style>
            <div className='BrokerAgeMainDiv'>
                <div className='container p-5 border-top' >
                    <h2 className='text-center mb-5'>Understand Your Trading Costs</h2>
                    <div className='row'>

                        <div className='col p-2 broker-card'>
                            <h5 className='mb-4' style={{ color: "black" }}>Brokerage Calculator</h5>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <li className='text-muted'>A brokerage calculator helps you estimate the cost of a trade before placing it.</li>
                                <li className='text-muted'>It automatically calculates basic charges and fees.</li>
                                <li className='text-muted'>It gives an idea of total expenses involved in trading.</li>
                                <li className='text-muted'>It can be used for different types of trades like equity and intraday.</li>
                                <li className='text-muted'>It helps users understand profit or loss after charges.</li>
                                <li className='text-muted'>It saves time and avoids manual calculations.</li>
                                <li className='text-muted'>It is useful for beginners to learn how trading costs work.</li>
                            </ul>
                        </div>

                        <div className='col p-2 broker-card'>
                            <h5 className='mb-4' style={{ color: "black" }}>Types of Charges</h5>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <li className='text-muted'><b>Brokerage</b> - Basic fee for placing a trade</li>
                                <li className='text-muted'><b>Tax</b> - Government charges on transactions</li>
                                <li className='text-muted'><b>Exchange Charges</b> - Fees by stock exchanges</li>
                                <li className='text-muted'><b>GST</b> - Tax applied on services</li>
                                <li className='text-muted'><b>Other Charges</b> - Small additional fees depending on trade type</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default BrokerAge;