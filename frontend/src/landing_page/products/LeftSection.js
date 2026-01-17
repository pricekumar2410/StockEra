import React from 'react'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col' style={{marginRight: "1rem"}}>
                    <img src={imageURL} style={{width: "95%"}}/>
                </div>
                <div className='col' style={{marginLeft: "5rem"}}>
                    <h2 style={{marginTop: "2rem", marginBottom :"2rem"}}>{productName}</h2>
                    <p className='text-muted' style={{wordSpacing: "2px", textJustify: "auto", lineHeight: "1.5rem"}}>{productDescription}</p>
                    <div style={{display: "flex", gap: "5rem", marginBottom: "2rem", marginTop: "1rem"}}>
                        <a href={tryDemo} style={{textDecoration: "none", fontSize: "1.2rem"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{textDecoration: "none", fontSize: "1.2rem"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div style={{display: "flex", gap: "2rem"}}>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;