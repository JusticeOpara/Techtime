import React from "react"
import { useState } from "react"






export default function Testimonal() {

    const [index, setIndex] = useState(0)
    const length = 3

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    const TestimonalCard = ({ image, text, career, name }) => {
        return (

            <div className="testimonal-body">

                <p className="testimonal-text">{text}</p>

                <div className="testimonal-info">
                    <div className="testimonal-image">{image}</div>
                    <p className="testimonal-name">{name}</p>
                    <p className="testimonal-text">{career}</p>

                </div>

                <div onClick={handlePrevious}>Previous</div>
                <div onClick={handleNext}>next</div>
        
                    {/* <p>{index}</p> */}
                

            </div>
        )
    }

    return (

        <div className="testimonal-section">

            <div className="header">
                <h1>What Our Client Are Saying</h1>
                <p className="text">
                    high-defination video is video of higher resolution and quality than standard definition.
                    while there’s no standard meaning for high definition, generally any standard video image
                </p>
            </div>




            <div className="testimony-item">
                
                <TestimonalCard
                
                    text="high-defination video is video of higher resolution and quality than standard definition. 
                          high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                              the best and largest all-in-one online tutoring platform in the worldd definition. 
                                          high-defination video is video of higher resolution and quality than standard definition.
                                  build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                    image="x"

                    career="software developer"
                    name="justice opara"

                />

                <TestimonalCard
                    text="high-defination video is video of higher resolution and quality than standard definition. 
                          high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                              the best and largest all-in-one online tutoring platform in the worldd definition. 
                                          high-defination video is video of higher resolution and quality than standard definition.
                                  build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                    image="x"
                    career="software developer"
                    name="justice opara"
                />
                
                <TestimonalCard
                    text="high-defination video is video of higher resolution and quality than standard definition. 
                          high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                              the best and largest all-in-one online tutoring platform in the worldd definition. 
                                          high-defination video is video of higher resolution and quality than standard definition.
                                  build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                    image="x"
                    career="software developer"
                    name="justice opara"
                /> 


            </div>


        </div>

    )
}