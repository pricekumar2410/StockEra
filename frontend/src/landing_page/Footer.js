import React from 'react'

function Footer() {
    return (
        <div className='p-5 border-top footerComp' style={{ backgroundColor: "#0F2854", color: "white" }}>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/S_Logo.png' style={{ width: "90px", borderRadius: "4px", marginBottom: "6px" }} />
                    <p>StockEra is a simple and secure platform <br />to invest in stocks and mutual funds.</p>
                    <div style={{ cursor: "pointer" }}>
                        <i class="fa fa-facebook-official p-3" aria-hidden="true"></i>
                        <i class="fa fa-instagram p-3" aria-hidden="true"></i>
                        <i class="fa fa-twitter p-3" aria-hidden="true"></i>
                        <i class="fa fa-envelope p-3" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='col'>
                    <h4 style={{ marginBottom: "20px" }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: "0" }}>
                        <li>
                            <a href='/' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Home</a>
                        </li>
                        <li>
                            <a href='/about' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>About</a>
                        </li>
                        <li>
                            <a href='/product' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Products</a>
                        </li>
                        <li>
                            <a href='/pricing' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Pricing</a>
                        </li>
                        <li>
                            <a href='/support' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Support</a>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 style={{ marginBottom: "20px" }}>Products</h4>
                    <ul style={{ listStyle: 'none', padding: "0" }}>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Stocks</a>
                        </li>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Mutual Funds</a>
                        </li>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>IPO</a>
                        </li>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>ETFs</a>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 style={{ marginBottom: "20px" }}>Legal</h4>
                    <ul style={{ listStyle: 'none', padding: "0" }}>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Terms & Conditions</a>
                        </li>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Disclaimer</a>
                        </li>
                        <li>
                            <a href='#' style={{ textDecoration: "none", marginTop: "18px", color: "white" }}>Risk Disclosure</a>
                        </li>
                    </ul>
                </div>
                <div className='mt-3' style={{ opacity: "0.6", padding: "0rem 4rem 0rem 4rem" }}>
                    <p>StockEra is a trusted and secure investment platform designed to help users grow their wealth with confidence. We provide easy access to stocks, mutual funds, IPOs, and ETFs, making investing simple for beginners as well as experienced investors.</p>
                    <p>Our mission is to deliver a smooth, transparent, and user-friendly investing experience. With advanced tools, real-time market insights, and dedicated customer support, StockEra ensures that your financial journey is safe, informed, and successful.</p>
                </div>
            </div>
            <hr style={{ opacity: "0.1" }} />
            <div style={{ textAlign: "center" }}>
                <p>© 2025 StockEra. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;