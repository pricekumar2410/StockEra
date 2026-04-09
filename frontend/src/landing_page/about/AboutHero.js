import React from 'react'

function AboutHero() {
    return (
        <>
            <style>
                {`
    .AboutHeroMainDiv1{
        background: white;
        color: #333333;
        border-radius: 12px;
        margin-top: 26px;
    }
    .AboutHeroMainDiv1:hover{
        background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
color: #fdbb2d;
    }
         .AboutHeroMainDiv2{
        background: white;
        color: #333333;
        border-radius: 5px;
    }
    .AboutHeroMainDiv2:hover{
        background: linear-gradient(90deg, #1E3A8A 0%, #7DD3FC 100%);
    color: white;
                }
    `}
            </style>
            <div  >
                <div className='container '>
                    <div className='row p-5 AboutHeroMainDiv1'>
                        <h3 className=' text-center'>
                            Making investing simple for everyone.
                            <br /> Easy. Transparent. Beginner-friendly.
                        </h3>
                    </div>

                    <div className='row border-top p-1 AboutHeroMainDiv2' style={{ fontSize: "18px" }}>
                        <div className='col p-5 '>
                            <p>
                                Our journey started with a simple goal — to make investing easy and accessible for everyone.
                                We wanted to remove confusion, high costs, and complicated processes from trading.
                            </p>

                            <p>
                                Our platform is designed especially for beginners, with a clean interface and easy-to-use features.
                                Anyone can start their investment journey without feeling overwhelmed.
                            </p>

                            <p>
                                We focus on transparency and simplicity, so users always understand what they are doing
                                and feel confident while investing.
                            </p>
                        </div>

                        <div className='col p-5' style={{ fontSize: "18px" }}>
                            <p>
                                Along with trading, we also aim to spread financial awareness and help users
                                make better money decisions.
                            </p>

                            <p>
                                We provide simple tools, basic market insights, and a secure environment
                                to support your learning and growth.
                            </p>

                            <p>
                                Our goal is to keep improving and build a platform that makes investing
                                easier every day.
                            </p>
                        </div>
                    </div>

                </div>
                <hr style={{ margin: "0px", opacity: "0.07" }} />
            </div>
        </>

    );
}

export default AboutHero;