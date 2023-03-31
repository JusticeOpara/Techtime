import React from "react"
import CourseImg1 from '../../assets/courses1.png'
import CourseImg2 from '../../assets/courses2.png'
import CourseImg3 from '../../assets/courses3.png'
import CourseImg4 from '../../assets/courses4.png'
import CourseImg5 from '../../assets/courses5.png'
import CourseImg6 from '../../assets/courses6.png'
import Tutor from '../../assets/Tutor.png'
import Tutor2 from '../../assets/Tutor2.png'
import Tutor3 from '../../assets/Tutor3.png'
import Tutor4 from '../../assets/Tutor4.png'
import Tutor5 from '../../assets/Tutor5.png'
import Tutor6 from '../../assets/Tutor6.png'


const CardCourses = ({ image, topic, path, rate, time, lessons, tutor, prize  }) => {
    return (

        <div className="courses-body">

            <div className="courses-image">{image}</div>

            <div className="courses-info">
                <div className="tag">
                    <p className="courses-path">{path}</p>
                    <p className="courses-rate">{rate}</p>
                </div>

                <h2 className="courses-topic">{topic}</h2>

                <div className="tag">
                    <p className="courses-time">{time}</p>
                    <p className="courses-lessons">{lessons}</p>
                </div>

                <div className="tag">
                    <p className="courses-name">{tutor}</p>
                    <p className="courses-prize">{prize}</p>

                </div>

            </div>

        </div>
    )
}

export default function Courses() {

    return (
        <div className="courses-section">

            <div className="header">
                <h1>Browse Our Popular Courses</h1>

                <p className="text"> high-defination video is video of higher resolution and quality than standard definition.
                    while there’s no standard meaning for high definition, generally any standard video image</p>

            </div>

            <div className="courses-subheader">
                <p>All categories</p>
                <p>Design</p>
                <p>Development</p>
                <p>Marketing</p>
            </div>

            
            <div className="courses-template">

                <div className="flex-row">
                    <CardCourses
                        image={<img src={CourseImg5} className="courseImg" alt="courses-image" />}
                        topic="introduction to outroom  marketing analysis"
                        path="market"
                        rate="4.7k(32.7k+)"
                        time="23hrs 50mins"
                        lessons="15 lessons"
                        tutor={<img src={Tutor} className="profileImg" alt="profile-image" />}
                        prize="$15.00"
                    />


                    <CardCourses
                        image={<img src={CourseImg2} className="courseImg" alt="courses-image" />}
                        topic="introduction to  new marketing audience "
                        path="market"
                        rate="4.7k(32.7k+)"
                        time="23hrs 50mins"
                        lessons="15 lessons"
                        tutor={<img src={Tutor2} className="profileImg" alt="profile-image" />}
                        prize="$32.00"
                    />



                    <CardCourses
                        image={<img src={CourseImg3} className="courseImg" alt="courses-image" />}
                        topic="introduction to html, css & bootstrap"
                        path="design"
                        rate="4.7k(32.7k+)"
                        time="23hrs 60mins"
                        lessons="15 lessons"
                        tutor={<img src={Tutor3} className="profileImg" alt="profile-image" />}
                        prize="$55.00"
                    />


                </div>




                <div className="flex-row">
                    <CardCourses
                        image={<img src={CourseImg4} className="courseImg" alt="courses-image" />}
                        topic="introduction to javascript, git & GitHub"
                        path="developer"
                        rate="4.7k(32.7k+)"
                        time="23hrs 45mins"
                        lessons="15 lessons"
                        tutor={<img src={Tutor4} className="profileImg" alt="profile-image" />}
                        prize="$32.00"
                    />


                    <CardCourses
                        image={<img src={CourseImg1} className="courseImg" alt="courses-image" />}
                        topic="introduction to user research in ux design"
                        path="design"
                        rate="4.7k(32.7k+)"
                        time="23hrs 66mins"
                        lessons="15 lessons"
                        tutor={<img src={Tutor5} className="profileImg" alt="profile-image" />}
                        prize="$35.00"
                    />



                    <CardCourses
                        image={<img src={CourseImg6} className="courseImg" alt="courses-image" />}
                        topic="introduction to live  marketing analysis"
                        path="marketing"
                        rate="4.7k(32.7k+)"
                        time="23hrs 46mins"
                        lessons="15 lessons"
                        tutor={<img src={Tutor6} className="profileImg" alt="profile-image" />}
                        prize="$25.00"
                    />


                </div>

                <button className="course-btn">Explore all courses</button>
            </div>
        </div>
    )
}