import React from "react";
// import heroImage from '../../assets/heroImage.png';
import Dropbox from '../../assets/Dropbox svg.png';
import monday from '../../assets/monday.png';
 import Vector from '../../assets/Vector.png';
import Group1 from '../../assets/Group1.png';
import Group from '../../assets/Group.png'
import TechTime from '../../assets/techtime.png'
import Avatar1 from '../../assets/Frame95.png'
import Avatar2 from '../../assets/Frame96.png'
import Avater3 from '../../assets/Frame97.png'
import Avater4 from '../../assets/Frame98.png'
import Avater5 from '../../assets/Frame99.png'
import heroImg from '../../assets/HeroImg.webp'




export default function Homepage() {

    return (
        <>
            <div className="main-container">



                <div className="navbar">

                    <div className="nav-logo">

                        <img className="tech-time" src={TechTime} alt="tech-tme" />
                    </div>

                    <div className="nav-content">

                        <p>Home</p>
                        <p>About Us</p>
                        <p>Courses</p>
                        <p>Testimonal</p>
                        <p>Community</p>

                        <div className="nav-btn">
                            Enroll Now
                        </div>

                    </div>


                </div>








                <div className="hero-container">

                    <div className="inner-container">

                        <div className="hero-textbox">

                            <h1 className="hero-header">Grow your skills to advance your career path</h1>
                            <p className="hero-text">
                                Build Your Future With  Our Quality Education.The Best And Largest All-In-One Online Tutoring Platform In The World
                            </p>

                            <div className="hero-btn">
                                <div className="now">Get Started Now</div>

                                <div className="nav-btn">
                                    Enroll Now
                                </div>
                            </div>


                            {/*Avatar with card  */}
                            <div className="avatar-group">
                                <div className="hidden-avatar">
                                    255k+ previews
                                </div>
                                <img className="avatar" src={Avatar1} alt="avatar-image" />
                                <img className="avatar" src={Avatar2} alt="avatar-image" />
                                <img className="avatar" src={Avater3} alt="avatar-image" />
                                <img className="avatar" src={Avater4} alt="avatar-image" />
                                <img className="avatar" src={Avater5} alt="avatar-image" />


                            </div>

                        </div>

                     <div className="hero-imagebox"> 

                            <img className="hero-image" src={heroImg} alt="HeroImage" />

                         </div> 
                    </div>


                </div>

            </div>

            <div className="hero-footer">

                <div className="sub-footer">

                 <img className="group-icon" src={Vector} alt="groupIcon" /> 
                    <img className="group-icon" src={Group} alt="groupIcon" />
                    <img className="group-icon" src={Group1} alt="groupIcon" />
                    <img className="group-icon" src={monday} alt="groupIcon" />
                    <img className="group-icon" src={Dropbox} alt="groupIcon" />

                </div>


            </div>

        </>


    )
}