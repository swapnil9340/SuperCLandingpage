import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Container } from 'react-bootstrap';

const PreviousWinners = () => {
    const winners = [
        {
            name: 'Aarav Mehta',
            class: '5th',
            image: '/w1.png',
            quote: '“A fun learning experience: he looked forward to practice every day!”',
        },
        {
            name: 'Diya Sharma',
            class: '4th',
            image: '/w2.png',
            quote: '“It was exciting and challenging – I loved solving the puzzles!”',
        },
        {
            name: 'Vivaan Patel',
            class: '2nd',
            image: '/w3.png',
            quote: '“I had so much fun learning new things every day!”',
        },
    ];

    const WinnerCard = ({ winner, index }) => {
        return (
            <div key={index} className="col-md-4 mb-4 winnerContent">
                <div className="card border-0" style={{ backgroundImage: `url('${winner.image}')`, backgroundSize: "cover", height: "350px", width: "350px" }}>
                    <div className="h-100 imgOverlay"></div>
                    <div className="tagContainer position-absolute" style={{ bottom: "10%", left: "5%" }}>
                        <p className="position-absolute bottom-100 quote">{winner.quote}</p>
                        <svg width="237" height="76" viewBox="0 0 237 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.277344 37.977L31.3412 0.890625H236.252L204.872 37.977L236.252 75.0635H31.2885L0.277344 37.977Z" fill="#FFECE2" />
                        </svg>
                        <p className="text-start position-absolute detail" style={{ left: "15%", top: "20%" }}>
                            <strong>Name:</strong> {winner.name}
                            <br />
                            <strong>Class:</strong> {winner.class}
                        </p>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Container fluid className='text-center py-5 '>
            <div className="prevWinnerContainer container text-center my-5 winnerCard d-flex flex-column gap-5">
                <h2 style={{ fontSize: "32px", fontWeight: 400 }}>
                    Previous Winners <span style={{ color: "#14516E" }}>Who Made It Big!</span>
                </h2>
                <div className="deskSwiper row justify-content-center mt-4">
                    {winners.map((winner, index) => (
                        <WinnerCard winner={winner} index={index} />
                    ))}
                </div>
                <div style={{ paddingLeft: "5%", paddingRight: "5%" }} className='mobileSwiper'>
                    <Swiper
                        speed={1100}
                        slidesPerGroup={1}
                        slidesPerView={1}
                        spaceBetween={40}
                        autoplay={{delay : 2000}}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        centeredSlides={true}
                        className="mySwiper mobSwiper"
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                    >
                        {winners.map((winner, index) => (
                            <SwiperSlide>
                                <WinnerCard winner={winner} index={index} />
                            </SwiperSlide>
                        ))}


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
            </div>
        </Container>
    );
};

export default PreviousWinners;
