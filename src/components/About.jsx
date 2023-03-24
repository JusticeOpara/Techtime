import React from "react"
import unsplash2 from '../../assets/unsplash2.png';
import unsplash4 from '../../assets/unsplash4.png';
import unsplash3 from '../../assets/unsplash3.png'
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'
import Frame4 from '../../assets/Frame4.png'




function StatCard({ icon, tittle, description }) {
    return (
        <div className="card-body">
            <div className="card-icon">{icon}</div>
            <h3 className="card-tittle">{tittle}</h3>
            <p className="card-description">{description}</p>
        </div>
    )
}


export default function () {

    return (
        <>
            <div className="aboutPage">

                <div className="first-half-container">
                    <h1>High quality video & audio live classes</h1>
                    <p>High-Defination Video is video of higher resolution and quality than standard definition.
                        while there’s no standard meaning for high definition, generally any standard video image</p>
                    <p>View Courses</p>



                    <div>
                        <p>audio classes</p>
                        <p>recorded classes</p>
                        <p>life classes</p>
                        <p>50+ notes</p>
                    </div>

                </div>

                <div className="second-half-container">

                    <img className="firstVideoImage" src={unsplash2} alt="watchvideo" />
                    <img className="videoImage2" src={unsplash4} alt="watchvideo" />

                </div>

            </div>


            <div className="about-template">

                <div className="inner-template">
                    <div className="firstContent">
                        <h1>This is why we are best from others</h1>
                        <p>high-defination video is video of higher resolution and quality than standard definition.
                            while there’s no standard meaning for high definition,
                            generally any standard video image</p>

                        <img src={unsplash3} className="videoImage3" alt="high quality video" />
                    </div>



                    <div className="secondContent">

                        <div className="flex-card">
                            <StatCard
                                icon={<img src={Frame1} className="frame-icon" alt="frame-icon" />}
                                tittle="experienced mentors"
                                description="high-defination video is video of higher resolution and 
                        quality than standard definition. 
                        high-defination video is video of higher resolution and quality than standard definition. " />

                            <StatCard
                                icon={<img src={Frame2} className="frame-icon" alt="frame-icon" />}
                                tittle="experienced mentors"
                                description="high-defination video is video of higher resolution and quality than standard definition. 
                        high-defination video is video of higher resolution and quality than standard definition. " />

                        </div>



                        <div className="flex-card">
                            <StatCard
                            icon={<img src={Frame3} className="frame-icon" alt="frame-icon" />}
                                 
                                tittle="experienced mentors"
                                description="high-defination video is video of higher resolution and 
                                     quality than standard definition. 
                                   high-defination video is video of higher resolution and quality than standard definition. " />

                            <StatCard
                                icon={<img src={Frame4} className="frame-icon" alt="frame-icon" />}
                                tittle="experienced mentors"
                                description="high-defination video is video of higher resolution and quality than standard definition. 
                                    high-defination video is video of higher resolution and quality than standard definition. " />

                        </div>



                    </div>
                </div>
            </div>

        </>


    )
}