import React from 'react'

function SupportHero() {
    return (
        <section className='container-fluid p-4' id='supoortHero'>
            <div className='container'>
                <div class='portal'>
                    <h5>Support Portal</h5>
                    <a href='#'>Track Tickets</a>
                </div>
                <div className='row' id='search-bar'>
                    <div className='col' style={{marginRight: "5rem"}}>
                        <p className='fs-5'>Search for an answer or browse help topics to create a ticket</p>
                        <input className='input' placeholder='Eg: how do i activate F&O, why is my order getting rejected...'></input>
                        <br />
                        <a href='#'>Track account opening</a>
                        <a href='#' style={{marginLeft: "1rem"}}>Track segment activation</a>
                        <br />
                        <a href='#'>Intraday margins</a>
                        <a href='#' style={{marginLeft: "1rem"}}>Kite user manual</a>

                    </div>
                    <div className='col'>
                        <p className='fs-5' style={{ marginLeft: "5rem" }}>Featured</p>
                        <ol type='number' style={{ marginLeft: "4rem" }}>
                            <li><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SupportHero;