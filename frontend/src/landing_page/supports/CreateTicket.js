import React from 'react'

function CreateTicket() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <h1>To create a ticket, select a relevant topic</h1>
                <div className='col-4 p-3'>
                    <p style={{ marginTop: "2rem", marginLeft: "2px", marginBottom: "2rem" }}><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</p>
                    <ul className='all-link'>
                        <li><a href='#'>Online Account Opening</a></li>
                        <li><a href='#'>Offline Account Opening</a></li>
                        <li><a href='#'>Company, Partnership and HUF Account Opening</a></li>
                        <li><a href='#'>NRI Account Opening</a></li>
                        <li><a href='#'>Charges at Zerodha</a></li>
                        <li><a href='#'>Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                    </ul>
                </div>
                <div className='col-4 p-3'>
                    <p style={{ marginTop: "2rem", marginLeft: "2px", marginBottom: "2rem" }}><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</p>
                    <ul className='all-link'>
                        <li><a href='#'>Login Credentials</a></li>
                        <li><a href='#'>Account Modification and Segment Addition</a></li>
                        <li><a href='#'>DP ID and bank details</a></li>
                        <li><a href='#'>Your Profile</a></li>
                        <li><a href='#'>Transfer and conversion of shares</a></li>
                    </ul>
                </div>
                <div className='col-4 p-3'>
                    <p style={{ marginTop: "2rem", marginLeft: "2px", marginBottom: "2rem" }}><i class="fa fa-bar-chart" aria-hidden="true"></i> Kite</p>
                    <ul className='all-link'>
                        <li><a href='#'>Margin/leverage, Product and Orders</a></li>
                        <li><a href='#'>Kite Web and Mobile</a></li>
                        <li><a href='#'>Corporate Actions</a></li>
                        <li><a href='#'>Sentinel</a></li>
                        <li><a href='#'>Kite API</a></li>
                        <li><a href='#'>Pi and other platforms</a></li>
                    </ul>
                </div>

                <div className='row'>
                    <div className='col-4 p-3'>
                        <p style={{ marginTop: "2rem", marginLeft: "2px", marginBottom: "2rem" }}><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</p>
                        <ul className='all-link'>
                            <li><a href='#'>Adding Funds</a></li>
                            <li><a href='#'>Fund Withdrawal</a></li>
                            <li><a href='#'>eMandates</a></li>
                            <li><a href='#'>Adding Bank Accounts</a></li>
                        </ul>
                    </div>
                    <div className='col-4 p-3'>
                        <p style={{ marginTop: "2rem", marginLeft: "2px", marginBottom: "2rem" }}><i class="fa fa-dashboard"></i> Console</p>
                        <ul className='all-link'>
                            <li><a href='#'>Reports</a></li>
                            <li><a href='#'>Ledger</a></li>
                            <li><a href='#'>60 Day Challenge</a></li>
                            <li><a href='#'>Portfolio</a></li>
                            <li><a href='#'>IPO</a></li>
                            <li><a href='#'>Referral Program</a></li>
                        </ul>
                    </div>
                    <div className='col-4 p-3'>
                        <p style={{ marginTop: "2rem", marginLeft: "2px", marginBottom: "2rem" }}> <i class="fa fa-btc"></i> Coin</p>
                        <ul className='all-link'>
                            <li><a href='#'>Understanding Mutual Funds</a></li>
                            <li><a href='#'>About Coin</a></li>
                            <li><a href='#'>Buying and Selling through Coin</a></li>
                            <li><a href='#'>Starting an SIP</a></li>
                            <li><a href='#'>Managing your Portfolio</a></li>
                            <li><a href='#'>Coin App</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;