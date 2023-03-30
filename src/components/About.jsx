import React from "react"
// import unsplash2 from '../../assets/unsplash2.png';
// import unsplash4 from '../../assets/unsplash4.png';
import unsplash3 from '../../assets/unsplash3.png'
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'
import Frame4 from '../../assets/Frame4.png'
import Live from '../../assets/live.png'
import Audio from '../../assets/audio.png'
import Recorder from '../../assets/video.png'
import Notes from '../../assets/notes.png'
import Student from '../../assets/FeaturesImg.svg'


function StatCard({ icon, tittle, description }) {
    return (
        <div className="card-body">
            <div className="card-icon">{icon}</div>

            <div>
                <h4 className="card-tittle">{tittle}</h4>
                <p className="card-description">{description}</p>
            </div>

        </div>
    )
}


export default function About() {

    return (
        <>
            <div className="aboutPage">

                <div className="first-half-container">

                    <h1>High quality video , audio & live classes</h1>

                    <p className="template-text">High-Defination Video is video of higher resolution and quality than standard definition.
                        while there’s no standard meaning for high definition, generally any standard video image</p>

                    <div className="view-btn">

                        View Courses

                    </div>




                    <div className="class-section">

                        <div className="class-layout">

                            <div className="class">

                                <img src={Audio} className="class-icon" alt="frame-icon" />

                                <p>audio classes</p>

                            </div>

                            <div className="class">

                                <img src={Recorder} className="class-icon" alt="frame-icon" />

                                <p>recorded classes</p>

                            </div>

                        </div>

                        <div className="class-layout">

                            <div className="class">

                                <img src={Live} className="class-icon" alt="frame-icon" />

                                <p>live classes</p>
                                
                            </div>

                            <div className="class">
                                <img src={Notes} className="class-icon" alt="frame-icon" />
                                <p>50+ notes</p>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="second-half-container">

                    <img className="enrolled-student" src={Student} alt="watchvideo" />
                    {/* <img className="videoImage2" src={unsplash4} alt="watchvideo" /> */}

                </div>

            </div>


            <div className="about-template">

                <div className="inner-template">
                    <div className="firstContent">
                        <h1>This is why we are best from others</h1>
                        <p className="template-text">high-defination video is video of higher resolution and quality than standard definition.
                            while there’s no standard meaning for high definition,
                            generally any standard video image</p>

                        <img src={unsplash3} className="videoImage3" alt="high quality video" />
                    </div>



                    <div className="secondContent">

                        <div className="flex-card">
                            <StatCard
                                icon={<img src={Frame1} className="frame-icon" alt="frame-icon" />}
                                tittle="Experienced Mentors"
                                description="high-defination video is video of higher resolution and 
                        quality than standard definition. 
                        high-defination video is video of higher resolution and quality than standard definition. " />

                            <StatCard
                                icon={<img src={Frame2} className="frame-icon" alt="frame-icon" />}
                                tittle="One On One Meeting"
                                description="high-defination video is video of higher resolution and quality than standard definition. 
                        high-defination video is video of higher resolution and quality than standard definition. " />

                        </div>



                        <div className="flex-card">
                            <StatCard
                                icon={<img src={Frame3} className="frame-icon" alt="frame-icon" />}

                                tittle="One On One Meeting"
                                description="high-defination video is video of higher resolution and 
                                     quality than standard definition. 
                                   high-defination video is video of higher resolution and quality than standard definition. " />

                            <StatCard
                                icon={<img src={Frame4} className="frame-icon" alt="frame-icon" />}
                                tittle="Affordable Prices"
                                description="high-defination video is video of higher resolution and quality than standard definition. 
                                    high-defination video is video of higher resolution and quality than standard definition. " />

                        </div>



                    </div>
                </div>
            </div>

        </>


    )
}