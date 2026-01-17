import React from 'react'

function BrokerAge() {
    return (
        <div className='container p-5 mb-3 border-top'>
            <div className='row'>
                <div className='col p-3'>
                    <h5 className='mb-4'>Brokerage Calculator</h5>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>A brokerage calculator helps estimate the total cost of a trade before execution.</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>It calculates brokerage charges, taxes, and other statutory fees automatically.</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>It includes charges like STT, exchange transaction charges, GST, SEBI fees, and stamp duty.</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>It works for different segments such as equity delivery, intraday, futures, and options.</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>It helps traders know the net profit or loss after all deductions.</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>It saves time by avoiding manual calculations.</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>It improves financial planning and decision-making for traders.</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}>It is mostly free and available online on broker websites.</li>
                    </ul>
                </div>
                <div className='col p-3'>
                    <h5 className='mb-4'>List of charges</h5>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>Brokerage</b> - Fee charged by the broker for executing trades</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>Securities Transaction Tax (STT)</b> - Tax charged by the government on buy/sell of securities</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>Exchange Transaction Charges</b> - Charges levied by stock exchanges (NSE/BSE)</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>GST (Goods and Services Tax)</b> - Charged on brokerage and exchange transaction charges</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>SEBI Turnover Fees</b> - Regulatory fee charged by SEBI</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>Stamp Duty</b> - State government tax on contract value</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>Clearing Charges</b> - Charges for clearing and settlement of trades (if applicable)</li>
                        <li className='text-muted' style={{ marginRight: "3rem" }}><b>DP (Depository Participant) Charges</b> - Applied when shares are sold from a demat account</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BrokerAge;