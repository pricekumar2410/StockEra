import React from 'react'

function RightSection({imageURL, productName, productDescription, tryDemo}) {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col' style={{marginLeft: "3rem", marginTop: "8rem"}}>
                    <h2 className='mb-4'>{productName}</h2>
                    <p className='text-muted' style={{wordSpacing: "2px", textJustify: "auto", lineHeight: "1.5rem"}}>{productDescription}</p>
                    <div style={{display: "flex", gap: "5rem"}}>
                        <a href={tryDemo} style={{textDecoration: "none", fontSize: "1.2rem"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col' style={{marginLeft: "1rem"}}>
                    <img src={imageURL} style={{width: "95%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;