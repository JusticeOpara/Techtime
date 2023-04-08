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
// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll'
import { Link as LinkR } from "react-router-dom"



export default function Homepage() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }



    return (
        <>
            <div className="main-container">



                <div className="navbar" scrollNav={scrollNav}>

                    <div className="nav-logo">

                        <img className="tech-time" src={TechTime} alt="tech-tme" />
                    </div>


                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" className="nav-icon"
                        onClick={() => { setIsNavExpanded(!isNavExpanded) }}
                    >
                        <path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 
                        5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 
                    1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"/>
                    </svg>

                    <div className={isNavExpanded ?  "close-nav":"nav-menu"}>



                        <a className="nav-item" to="home"> Home </a>

                        <Link className="nav-item" to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            
                                About Us

                        </Link>

                        <Link className="nav-item" to="courses"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Courses
                        </Link>

                        <Link className="nav-item" to="testimonal"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Testimonal
                        </Link>

                        <Link className="nav-item" to="community"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Community
                        </Link>



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
                                    
                                    <LinkR to="/SignUp">Enroll Now</LinkR>
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