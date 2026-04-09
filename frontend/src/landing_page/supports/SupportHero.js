import React, { useState, useEffect, useRef } from 'react';

function SupportHero() {
    const [query, setQuery] = useState("");
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const faqs = [
        { q: "How to create an account?", a: "Click on the 'Sign Up' button on the homepage, enter your mobile number, and verify it using the OTP sent to you." },
        { q: "Why is my order rejected?", a: "Orders can be rejected due to insufficient funds, incorrect price limits, or if the market is closed for that specific stock." },
        { q: "How to add funds?", a: "Go to the 'Funds' section, click 'Add Money', choose your payment method like UPI or Net Banking, and confirm the transaction." },
        { q: "How to withdraw money?", a: "Navigate to 'Funds', select 'Withdraw', enter the amount, and it will be credited to your linked bank account within 24 hours." },
        { q: "What is intraday trading?", a: "Intraday trading involves buying and selling stocks within the same trading day to profit from short-term price movements." },
        { q: "How to reset password?", a: "Click 'Forgot Password' on the login page, enter your email/ID, and follow the link sent to your inbox to set a new password." },
        { q: "Is KYC mandatory?", a: "Yes, as per SEBI guidelines, completing your KYC with Aadhaar and PAN is mandatory to start trading in the stock market." },
        { q: "What are the brokerage charges?", a: "We offer zero brokerage on equity delivery and a flat ₹20 fee for intraday and F&O trades." },
        { q: "How to buy stocks?", a: "Search for a stock in the watchlist, click 'Buy', select the quantity and order type (Market or Limit), and swipe to confirm." },
        { q: "What is a Limit Order?", a: "A Limit Order allows you to set a specific price at which you want to buy or sell a stock, instead of the current market price." },
        { q: "When does the market open?", a: "The Indian stock market (NSE/BSE) opens at 9:15 AM and closes at 3:30 PM, Monday to Friday." },
        { q: "Can I trade on weekends?", a: "No, the equity markets are closed on Saturdays, Sundays, and national holidays announced by the exchange." },
        { q: "How to update my bank account?", a: "Go to 'Profile' > 'Bank Details' and upload a cancelled cheque or bank statement to request a change in your linked account." },
        { q: "What is a Stop Loss?", a: "A Stop Loss is an order placed to limit your loss by automatically selling a stock once it reaches a certain price point." },
        { q: "How to view my portfolio?", a: "Click on the 'Portfolio' tab at the bottom or top navigation bar to see all your current holdings and profit/loss status." }
    ];

    // Dynamic Tags List
    const popularTags = ["KYC", "Withdraw", "Funds", "Brokerage", "Market", "Order", "account"];

    const filtered = faqs.filter(item =>
        item.q.toLowerCase().includes(query.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (item) => {
        setSelectedFaq(item);
        setQuery(item.q);
        setShowDropdown(false);
    };

    // Dynamic Tag Click Handler
    const handleTagClick = (tag) => {
        setQuery(tag); // Search bar me tag name set karega
        setShowDropdown(true); // Dropdown open karega filtered results ke sath
        setSelectedFaq(null); // Purana selected answer hide karega taaki user naya select kare
    };

    return (
        <>
            <style>
                {`
                .support-hero {
                    background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
                    color: white;
                    padding: 80px 0;
                    min-height: 600px;
                     margin-top: 26px;
                }
                .search-container {
                    position: relative;
                    max-width: 600px;
                }
                .input-group-custom {
                    display: flex;
                    align-items: center;
                    background: white;
                    border-radius: 30px;
                    padding-right: 15px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    overflow: hidden;
                }
                .support-input {
                    flex: 1;
                    padding: 15px 20px;
                    border: none;
                    font-size: 1.1rem;
                    outline: none;
                    color: #333;
                }
                .dropdown-btn {
                    background: none;
                    border: none;
                    color: #0F2854;
                    font-size: 1.2rem;
                    cursor: pointer;
                    padding: 5px 10px;
                }
                .suggestions-box {
                    position: absolute;
                    top: 110%;
                    width: 100%;
                    background: white;
                    color: #333;
                    border-radius: 15px;
                    z-index: 1000;
                    max-height: 300px;
                    overflow-y: auto;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
                }
                .suggestion-item {
                    padding: 12px 20px;
                    cursor: pointer;
                    border-bottom: 1px solid #eee;
                }
                .suggestion-item:hover {
                    background: #f8f9fa;
                    color: #007bff;
                }
                .answer-card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    padding: 25px;
                    margin-top: 30px;
                    border: 1px solid rgba(255,255,255,0.2);
                    animation: fadeIn 0.4s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .tag-chip {
                    display: inline-block;
                    background: rgba(255,255,255,0.2);
                    padding: 6px 16px;
                    border-radius: 20px;
                    margin: 5px;
                    color: white;
                    cursor: pointer;
                    font-size: 0.85rem;
                    border: 1px solid transparent;
                    transition: 0.3s;
                }
                .tag-chip:hover {
                    background: #fff;
                    color: #b21f1f;
                    border-color: #fff;
                }
                .featured-list {
                    list-style: none;
                    padding: 0;
                }
                .featured-list li {
                    padding: 15px;
                    background: rgba(0,0,0,0.2);
                    margin-bottom: 12px;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: 0.3s;
                    color: #fdbb2d;
                }
                .featured-list li:hover {
                    background: rgba(255,255,255,0.1);
                    transform: translateX(8px);
                }
                .social-icon {
                    display: inline-block;
                    color: white;
                    transition: transform 0.3s ease, color 0.3s ease;
                }
                .social-icon:hover {
                    color: #FF0000;
                    transform: scale(1.3);
                }
                `}
            </style>

            <section className='container-fluid support-hero'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <h2 className="fw-bold m-0"><span style={{ color: "red" }}>Stock</span>Era <span style={{ color: '#fdbb2d' }}>Support</span></h2>
                        {/* <button className="btn btn-outline-light btn-sm rounded-pill px-4">Track Tickets</button> */}
                        <div>
                            <h5 style={{ color: '#fdbb2d' }}>Contact Us:</h5>
                            <div style={{ cursor: "pointer" }}>
                                <a className='social-icon' href="https://wa.me/918887683280" target='_blank'><i class="fa fa-whatsapp" style={{ fontSize: "22px", paddingRight: "24px" }} aria-hidden="true"></i></a>
                                <a className='social-icon' href="mailto: sumitsingh312005@gmail.com" target='_blank'><i class="fa fa-envelope" style={{ fontSize: "22px", paddingRight: "24px" }} aria-hidden="true"></i></a>
                                <a className='social-icon' href="tel:918887683280" target='_blank'><i class="fa fa-phone" style={{ fontSize: "22px" }} aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='row align-items-center'>
                        <div className='col-lg-7'>
                            <h1 className='display-5 fw-bold mb-3'>How can we help?</h1>
                            <p className='lead mb-4'>Search your question or choose a popular topic below.</p>

                            <div className="search-container" ref={dropdownRef}>
                                <div className="input-group-custom">
                                    <input
                                        className='support-input'
                                        placeholder='Type to search (e.g. KYC)'
                                        value={query}
                                        onFocus={() => setShowDropdown(true)}
                                        onChange={(e) => {
                                            setQuery(e.target.value);
                                            setShowDropdown(true);
                                        }}
                                    />
                                    <button
                                        className="dropdown-btn"
                                        onClick={() => setShowDropdown(!showDropdown)}
                                    >
                                        {showDropdown ? "▲" : "▼"}
                                    </button>
                                </div>

                                {showDropdown && (
                                    <div className="suggestions-box">
                                        {(query.length > 0 ? filtered : faqs).length > 0 ? (
                                            (query.length > 0 ? filtered : faqs).map((item, index) => (
                                                <div key={index} className="suggestion-item" onClick={() => handleSelect(item)}>
                                                    <strong>{item.q}</strong>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="suggestion-item">No results found for "{query}"</div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Answer Area */}
                            {selectedFaq && (
                                <div className="answer-card">
                                    <h5 className="text-warning">Q: {selectedFaq.q}</h5>
                                    <p className="mb-0 mt-2 opacity-90">{selectedFaq.a}</p>
                                </div>
                            )}

                            {/* Dynamic Popular Tags Section */}
                            <div className="mt-4">
                                <span className="d-block mb-2 small opacity-75">Popular Topics:</span>
                                {popularTags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="tag-chip"
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Section: Featured Articles */}
                        <div className='col-lg-4 offset-lg-1 mt-5 mt-lg-0'>
                            <div className="p-4 rounded-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <h4 className='mb-4 border-bottom pb-2 border-secondary'>Featured Articles</h4>
                                <ul className='featured-list'>
                                    <li onClick={() => handleSelect(faqs[8])}>🚀 Guide to your first trade</li>
                                    <li onClick={() => handleSelect(faqs[10])}>🕒 Market Timings & Holidays</li>
                                    <li onClick={() => handleSelect(faqs[7])}>💰 Understanding Brokerage</li>
                                    <li onClick={() => handleSelect(faqs[13])}>🛡️ Using Stop Loss effectively</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SupportHero;