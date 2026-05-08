import React from 'react'


function Auother() {
    return (
        <>
            <style>
                {`
                 .AuotherMainDiv{
                   background: white;
        color: #333333;
                 padding: 60px 30px;
                 border-radius: 5px;
                }
                 .AuotherMainDiv:hover{
                 background: linear-gradient(90deg, #0F2854 0%, #2563EB 100%);
color: #fdbb2d;
                 }
.team-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.team-card {
    position: relative;
    width: 300px;
    background: #fff;
    border-radius: 15px;
    padding-top: 80px;
    text-align: center;
    transition: 0.3s;
}

.team-card:hover {
border: 2px solid red;
box-shadow: 0 0 45px red;
    transform: translateY(-10px);
}

.img-box {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #fff;
    overflow: hidden;
    background: #fff;
}

.img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-content h4 {
    margin-top: 10px;
    font-weight: 600;
}

.card-content h6 {
    color: gray;
    margin-bottom: 10px;
}

.card-content p {
    font-size: 14px;
    padding: 0 15px 20px;
    color: #555;
}
        `}
            </style>


            <section className="AuotherMainDiv">
                <h2 className="text-center mb-5">OUR TEAM</h2>

                <div className="team-container">

                    {/* Member 1 */}
                    <div className="team-card">
                        <div className="img-box">
                            <img src="media/images/vindesh-photo.png" alt="Prince Kumar" />
                        </div>
                        <div className="card-content">
                            <h4 style={{ color: "black" }}>Vindesh Shukla</h4>
                            <h6>Backend Developer</h6>
                            <p>
                                Handled backend development, APIs, and data management.
                                Ensured smooth communication between frontend and backend.
                                Focused on building a stable and functional system.
                            </p>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="team-card">
                        <div className="img-box">
                            <img src="media/images/sumit-photo.png" alt="Sumit Singh" />
                        </div>
                        <div className="card-content">
                            <h4 style={{ color: "black" }}>Sumit Kumar Singh</h4>
                            <h6>Dashboard Developer</h6>
                            <p>
                                Developed the dashboard including charts and data display.
                                Focused on presenting information clearly so users can easily
                                understand their data.
                            </p>
                        </div>
                    </div>

                    {/* Member 3 */}
                    <div className="team-card">
                        <div className="img-box">
                            <img src="media/images/dev-photo.png" alt="Nisha Rao" />
                        </div>
                        <div className="card-content">
                            <h4 style={{ color: "black" }}>Dev Narayan Singh</h4>
                            <h6>Frontend Developer</h6>
                            <p>
                                Responsible for designing and developing the user interface of the website.
                                Worked on responsive layouts and clean UI using React. Focused on making
                                the platform simple and beginner-friendly.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Auother;