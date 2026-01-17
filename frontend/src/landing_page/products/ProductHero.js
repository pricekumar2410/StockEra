import React from 'react'

function ProductHero() {
    return ( 
        <div className='container text-center border-bottom mb-5 mt-5 p-5'>
            <h1>StockEra Products</h1>
            <h3>Sleek, modern, and intuitive trading platforms</h3>
            <p style={{marginBottom: "3rem"}}>Check out our <a href='#' style={{textDecoration: "none"}}> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
     );
}

export default ProductHero;