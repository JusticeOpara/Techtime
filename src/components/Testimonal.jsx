import React from "react"
import { useState,useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Test1 from '../../assets/Frame 180 (1).png'
import Test2 from '../../assets/Frame 180 (2).png'
import Test3 from '../../assets/Frame 180.png'
import Test4 from '../../assets/community10.png'

//   const swiper = new Swiper(...);





export default function Testimonal() {
    const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);



    

    const TestimonalCard = ({ image, text }) => {
        return (

            <div className="testimonal-body">

                <p className="testimonal-text">{text}</p>

         <div className="testimonal-info"> 
                    <div className="testimonal-image">{image}</div>

         </div> 



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
                    modules={[Autoplay, Pagination, A11y]}
                    spaceBetween={isMobile ? 16 : 24}
                    slidesPerView={isMobile ? 1 : 3}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="swiper_container">



                    <SwiperSlide>
                        <TestimonalCard

                            text="high-defination video is video of higher resolution and quality than standard definition. 
                       high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                      high-defination video is video of higher resolution and quality than standard definition.
                      build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                            image={<img src={Test1} className="TestimonyImage" alt="TestimonyImage" />}


                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <TestimonalCard

                            text="high-defination video is video of higher resolution and quality than standard definition. 
                       high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                      high-defination video is video of higher resolution and quality than standard definition.
                      build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                      image={<img src={Test1} className="TestimonyImage" alt="TestimonyImage" />}


                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <TestimonalCard

                            text="high-defination video is video of higher resolution and quality than standard definition. 
                       high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                      high-defination video is video of higher resolution and quality than standard definition.
                      build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                      image={<img src={Test2} className="TestimonyImage" alt="TestimonyImage" />}


                         
                        />
                    </SwiperSlide>

                     <SwiperSlide>
                        <TestimonalCard

                            text="high-defination video is video of higher resolution and quality than standard definition. 
                       high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                      high-defination video is video of higher resolution and quality than standard definition.
                      build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                      image={<img src={Test3} className="TestimonyImage" alt="TestimonyImage" />}

                        />
                    </SwiperSlide>
                    


                    <SwiperSlide>
                        <TestimonalCard

                            text="high-defination video is video of higher resolution and quality than standard definition. 
                       high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                      high-defination video is video of higher resolution and quality than standard definition.
                      build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"

                      image={<img src={Test4} className="TestimonyImage" alt="TestimonyImage" />}

                        />
                    </SwiperSlide> 


                </Swiper>
            </div >





        </div >

    )
}