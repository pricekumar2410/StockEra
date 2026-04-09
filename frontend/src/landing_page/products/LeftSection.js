import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <>

            <style>
                {`
.left-product-section {
    transition: all 0.3s ease;
    border-radius: 15px;
    background: white;
        color: #333333;
        padding: 20px;
}

.left-product-section:hover {
 background: linear-gradient(90deg, #1E3A8A 0%, #7DD3FC 100%);
    color: white;
    border-radius: 5px;
    transform: scale(1.03);
     box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
}

/* Image hover effect */
.left-product-section img {
    transition: all 0.3s ease;
}

.left-product-section:hover img {
    transform: scale(1.05);
}

/* Text highlight */
.left-product-section h2 {
    transition: 0.3s;
}

.left-product-section:hover h2 {
    color: #fdbb2d;
}

/* Link hover */
.left-product-section a {
    transition: 0.3s;
}

.left-product-section a:hover {
    letter-spacing: 1px;
}
`}
            </style>
            <div className='leftSectionMainDiv' style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <div className='container left-product-section'>
                    <div className='row'>
                        <div className='col' style={{ marginRight: "1rem" }}>
                            <img src={imageURL} style={{ width: "80%" }} />
                        </div>
                        <div className='col' style={{ marginLeft: "5rem" }}>
                            <h2 style={{ marginTop: "3rem", marginBottom: "2rem" }}>{productName}</h2>
                            <p style={{ wordSpacing: "2px", fontSize: "17px", textJustify: "auto", lineHeight: "1.5rem" }}>{productDescription}</p>
                            {/* <div style={{ display: "flex", gap: "5rem", marginBottom: "2rem", marginTop: "1rem" }}>
                        <a href={tryDemo} style={{ textDecoration: "none", fontSize: "1.2rem" }}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{ textDecoration: "none", fontSize: "1.2rem" }}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" /></a>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSection;