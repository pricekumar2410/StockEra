import React from 'react'

function RightSection({ imageURL, productName, productDescription, tryDemo }) {
    return (
        <>

            <style>
                {`
.right-product-section {
background: white;
        color: #333333;
    transition: all 0.3s ease;
    border-radius: 15px;
}

.right-product-section:hover {
 background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
color: #fdbb2d;
border-radius: 5px;
    transform: scale(1.03);
   box-shadow: 0 0 25px rgba(255, 0, 0, 0.8);
}

/* Image hover effect */
.right-product-section img {
    transition: all 0.3s ease;
}

.right-product-section:hover img {
    transform: scale(1.05);
}

/* Text highlight */
.right-product-section h2 {
    transition: 0.3s;
}

.right-product-section:hover h2 {
    color: #fdbb2d;
}
    .right-product-section:hover p {
    color: white;
}

/* Link hover */
.right-product-section a {
    transition: 0.3s;
}

.right-product-section a:hover {
    letter-spacing: 1px;
}
`}
            </style>

            <div className='container p-3 right-product-section'>
                <div className='row'>
                    <div className='col' style={{ marginLeft: "3rem" }}>
                        <h2 className='mb-4 mt-5'>{productName}</h2>
                        <p style={{ wordSpacing: "2px", fontSize: "17px", textJustify: "auto", lineHeight: "1.5rem" }}>{productDescription}</p>
                        {/* <div style={{ display: "flex", gap: "5rem" }}>
                        <a href={tryDemo} style={{ textDecoration: "none", fontSize: "1.2rem" }}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div> */}
                    </div>
                    <div className='col' style={{ marginLeft: "1rem" }}>
                        <img src={imageURL} style={{ width: "80%" }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightSection;