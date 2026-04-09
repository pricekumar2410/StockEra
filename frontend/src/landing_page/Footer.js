import React from 'react'

function Footer() {
    return (
        <>
            <style>
                {`
                h4{
                    color: #fdbb2d;
                }
                /* Hover effect for all links in footer */
                .footer-link {
                    text-decoration: none;
                    color: white;
                    transition: color 0.3s ease;
                    display: inline-block;
                    margin-top: 10px;
                }

                .footer-link:hover {
                    color: #FF0000 !important; /* Pure Red on hover */
                    scale: 1.1 !important;
                }

                /* Social icons hover */

                .social-icon {
                    display: inline-block;
                    transition: transform 0.3s ease, color 0.3s ease;
                }
                .social-icon:hover {
                    color: #FF0000;
                    transform: scale(1.3);
                }
                `}
            </style>

            <div className='p-5 border-top footerComp' style={{ backgroundColor: "#0F2854", color: "white" }}>
                <div className='row'>
                    <div className='col'>
                        <img src='media/images/S_Logo.png' alt="Logo" style={{ width: "90px", borderRadius: "4px", marginBottom: "6px" }} />
                        <p>StockEra is a simple and secure platform <br />to invest in stocks and mutual funds.</p>
                        <div style={{ cursor: "pointer", marginTop: "1rem" }}>
                            <a className='social-icon' href="https://wa.me/918439017572" target='_blank'><i class="fa fa-whatsapp" style={{ fontSize: "22px", paddingRight: "24px" }} aria-hidden="true"></i></a>
                            <a className='social-icon' href="mailto: princekumar746586@gmail.com" target='_blank'><i class="fa fa-envelope" style={{ fontSize: "22px", paddingRight: "24px" }} aria-hidden="true"></i></a>
                            <a className='social-icon' href="tel:918439017572" target='_blank'><i class="fa fa-phone" style={{ fontSize: "22px" }} aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div className='col'>
                        <h4 style={{ marginBottom: "20px" }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: "0" }}>
                            <li><a href='/' className='footer-link'>Home</a></li>
                            <li><a href='/about' className='footer-link'>About</a></li>
                            <li><a href='/product' className='footer-link'>Products</a></li>
                            <li><a href='/pricing' className='footer-link'>Pricing</a></li>
                            <li><a href='/support' className='footer-link'>Support</a></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h4 style={{ marginBottom: "20px" }}>Products</h4>
                        <ul style={{ listStyle: 'none', padding: "0" }}>
                            <li><a href='#' className='footer-link'>Stocks</a></li>
                            <li><a href='#' className='footer-link'>Mutual Funds</a></li>
                            <li><a href='#' className='footer-link'>IPO</a></li>
                            <li><a href='#' className='footer-link'>ETFs</a></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h4 style={{ marginBottom: "20px" }}>Legal</h4>
                        <ul style={{ listStyle: 'none', padding: "0" }}>
                            <li><a href='#' className='footer-link'>Terms & Conditions</a></li>
                            <li><a href='#' className='footer-link'>Privacy Policy</a></li>
                            <li><a href='#' className='footer-link'>Disclaimer</a></li>
                            <li><a href='#' className='footer-link'>Risk Disclosure</a></li>
                        </ul>
                    </div>

                    <div className='mt-5' style={{ opacity: "0.6", padding: "0rem 4rem" }}>
                        <p>StockEra is a trusted and secure investment platform designed to help users grow their wealth with confidence. We provide easy access to stocks, mutual funds, IPOs, and ETFs.</p>
                        <p>Our mission is to deliver a smooth, transparent, and user-friendly investing experience. StockEra ensures that your financial journey is safe, informed, and successful.</p>
                    </div>
                </div>
                <hr style={{ opacity: "0.1", marginTop: "2rem" }} />
                <div style={{ textAlign: "center" }}>
                    <p>© 2025 StockEra. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;