import React from 'react'

function ProductHero() {
    return (
        <div className='container text-center border-bottom mb-5 mt-4 p-5' style={{ marginTop: "26px" }} >
            <h1>StockEra <span style={{ color: "#fdbb2d" }}>Products</span> </h1>
            <h3 style={{ opacity: "0.9" }}>Simple and modern platforms for smart investing</h3>
            <p style={{ marginBottom: "3rem", opacity: "0.8" }}>Explore our easy-to-use tools designed for beginners and learners.</p>
        </div>
    );
}

export default ProductHero;