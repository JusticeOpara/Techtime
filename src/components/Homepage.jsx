import React from "react";
import heroImage from '../../assets/heroImage.png';



export default function () {

    return (
        <>
            <div className="main-container">

                <div className="navbar">

                    <div className="nav-logo">
                        <h3>TechTime</h3>
                    </div>

                    <div className="nav-content">

                        <p>Home</p>
                        <p>About Us</p>
                        <p>Courses</p>
                        <p>Testimonal</p>

                        <div className="nav-btn">
                            Enroll Now
                        </div>

                    </div>

                </div>


                <div className="hero-container">
                    <div className="inner-container">
                        <div className="hero-text">
                            <h1>Grow your skills to advance your career path</h1>
                            <p>
                                Build Your Future With  Our Quality Education.The Best And Largest All-In-One Online Tutoring Platform In The World
                            </p>

                            <button>Get Started Now</button>

                            <button>Enroll Now</button>

                        </div>

                        {/* <div> */}

                        <img className="hero-image" src={heroImage} alt="HeroImage" />

                        {/* </div> */}
                    </div>


                </div>

            </div>

            <div className="hero-footer">

                <div className="sub-footer">
                    <h3>Zoom</h3>
                    <h3>strip</h3>
                    <h3>monday</h3>
                    <h3>slack</h3>
                    <h3>Dropbox</h3>
                </div>


            </div>

        </>


    )
}