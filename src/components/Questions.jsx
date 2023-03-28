import React from "react"
import { useState } from "react"

const Collapsible = ({ question, answer}) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    };

    return (

        <div className="question-item">

            <div className="question-part" style={{ color: !open ? '#000' : '#004DB3' }}>

                <h4 >{question}</h4>
                <button className="toggle-btn" onClick={toggle}   >{open ? "-" : "+"}</button>
               
            </div>

            {open && <div className="answer-part">
                <p>{answer}</p>
            </div>}


        </div>

    )
}

export default function Questions() {




    return (
        
            <div className="question-container">

                <div className="header">
                    <h1>Frequently Asked Questions</h1>
                    <p className="text">high-defination video is video of higher resolution and quality than standard definition.
                        while there’s no standard meaning for high definition, generally any standard video image</p>
                </div>

                <div className="question-description">

                    <Collapsible
                        question="Can i change my plan later?"
                        answer="high-defination video is video of higher resolution and quality than standard definition. 
        high-defination video is video of higher resolution and quality than standard definition. 
        hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "

                        icon="toggle"
                    />

                    <hr />

                    <Collapsible
                        question="Do i get certficate after taking courses?"
                        answer="high-defination video is video of higher resolution and quality than standard definition. 
        high-defination video is video of higher resolution and quality than standard definition. 
        hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "

                        icon="toggle"
                    />

                    <hr />

                    <Collapsible
                        question="Are the courses life time?"
                        answer="high-defination video is video of higher resolution and quality than standard definition.
              while there’s no standard meaning for high definition, generally any standard video image"

                        icon="toggle"
                    />

                    <hr />

                    <Collapsible
                        question="How do i reach out to mentors?"
                        answer="high-defination video is video of higher resolution and quality than standard definition. 
        high-defination video is video of higher resolution and quality than standard definition. 
        hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "

                        icon="toggle"
                    />

                    <hr />

                    <Collapsible
                        question="Do we get job ready after taking courses?"
                        answer="high-defination video is video of higher resolution and quality than standard definition. 
        high-defination video is video of higher resolution and quality than standard definition. 
        hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "

                        icon="toggle"
                    />


                </div>


            </div>
        

    )
}