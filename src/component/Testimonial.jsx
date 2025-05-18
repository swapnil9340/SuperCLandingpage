import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const cardContents = [
    {
        image: "/t3.png",
        comment: "My daughter loved the daily quizzes!",
        commentBy: "– Mrs. Mehta (Parent, Class 4)"
    },
    {
        image: "/t2.png",
        comment: "I practiced every day and improved my math.",
        commentBy: "– Aryan, Class 5"
    },
    {
        image: "/t3.png",
        comment: "Fun and engaging! My son looks forward to it daily.",
        commentBy: "– Mr. Sharma (Parent, Class 3)"
    },
    {
        image: "/t2.png",
        comment: "It helped me prepare better for my exams.",
        commentBy: "– Sneha, Class 6"
    },
    {
        image: "/t3.png",
        comment: "Very useful for building consistency in studies.",
        commentBy: "– Mrs. Iyer (Parent, Class 5)"
    },
    {
        image: "/t2.png",
        comment: "Clear explanations and great practice material!",
        commentBy: "– Rohan, Class 4"
    },
    {
        image: "/t3.png",
        comment: "My child’s confidence has increased a lot.",
        commentBy: "– Mrs. Kapoor (Parent, Class 2)"
    },
    {
        image: "/t2.png",
        comment: "It made learning fun and stress-free.",
        commentBy: "– Ananya, Class 3"
    }
];


const Card = ({ cardContent }) => {
    const { image, comment, commentBy } = cardContent
    return (
        <div className='TestimonialCard card-section d-flex justify-content-end gap-4' >
            <div>
                <img src={image} className='stu-img' style={{ width: "250px", borderRadius: "20px" }} />
            </div>
            <div className='cardContent d-flex flex-column' style={{ textAlign: "left", marginTop: "40px", width: "40%" }}>
                <div>
                    <img src="/colun.svg" style={{ width: "50px", marginBottom: "15px" }} />
                    <p style={{ fontSize: "24px" }}>“{comment}”</p>
                </div>
                <p style={{ fontSize: "16px", fontWeight: "300" }}>{commentBy}</p>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (
        <Container fluid className='testimonialContainer text-center py-5 '>
            <h3 style={{ fontSize: "32px", fontWeight: 400 }}>Testimonials</h3>
            <div style={{ paddingLeft: "5%", paddingRight: "5%", marginTop: "100px" }}>
                <Swiper
                    speed={1100}
                    slidesPerGroup={2}
                    slidesPerView={2}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper deskSwiper"
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                >
                    {
                        cardContents.map((cardContent) => {
                            return <SwiperSlide
                                className={`swiperSlide`}
                            ><Card cardContent={cardContent} /></SwiperSlide>
                        })
                    }


                    <div
                        className="custom-next"
                        style={{
                            position: "absolute",
                            top: "50%",
                            cursor: "pointer",
                            zIndex: 10,
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        <img src="/arrow 4.svg" />
                    </div>
                    <div
                        className="custom-prev"
                        style={{
                            position: "absolute",
                            top: "50%",
                            cursor: "pointer",
                            zIndex: 10,
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        <img src="/arrow 3.svg" />
                    </div>

                </Swiper>


                <Swiper
                    speed={1100}
                    slidesPerGroup={1}
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation]}
                    centeredSlides={true}
                    className="mySwiper mobSwiper"
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                >
                    {
                        cardContents.map((cardContent) => {
                            return <SwiperSlide
                                className={`swiperSlide`}
                            ><Card cardContent={cardContent} /></SwiperSlide>
                        })
                    }


                    <div
                        className="custom-next"
                        style={{
                            position: "absolute",
                            top: "36%",
                            cursor: "pointer",
                            zIndex: 10,
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        <img src="/arrow 4.svg" />
                    </div>
                    <div
                        className="custom-prev"
                        style={{
                            position: "absolute",
                            top: "36%",
                            cursor: "pointer",
                            zIndex: 10,
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        <img src="/arrow 3.svg" />
                    </div>

                </Swiper>
            </div>
        </Container>
    )
}

export default Testimonial