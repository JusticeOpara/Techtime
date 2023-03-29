import React from "react"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

//   const swiper = new Swiper(...);





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


                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container">



                    <SwiperSlide>
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
                    </SwiperSlide>

                    <SwiperSlide>
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
                    </SwiperSlide>

                    <SwiperSlide>
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
                    </SwiperSlide>

                    <SwiperSlide>
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
                    </SwiperSlide>


                    {/* <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline">=</ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline">+</ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                </div>*/}
                </Swiper>
            </div>





        </div >

    )
}