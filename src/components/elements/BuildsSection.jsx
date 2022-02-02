// import components
import {Col, Image} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";

// import styles
import "swiper/css";
import "swiper/css/pagination";

// import custom UI modules
import WeaponItem from "./WeaponItem";
import ArtifactItem from "./ArtifactItem";

// import Swiper core and required modules
import SwiperCore, {Pagination} from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const BuildsSection = (props) => {
    return (
        <>
            <Col md={11} xs={12} lg={8} className='pt-3'>
                <div className='w-100'>{props.build.description}</div>
                <div className='w-100 d-flex justify-content-around align-items-start fs-8'>
                    {props.build.priority.map((item) => (
                        <div
                            key={item.name}
                            className='mt-3 flex-wrap d-flex align-items-center flex-column justify-content-center'>
                            <Image
                                src={require(`../../assets/images/stats/${item.name}.png`)}

                            />
                            <p className='mb-0 text-center'>{item.stat_1}</p>
                            <p className='mb-0 text-center'>{item.stat_2}</p>
                        </div>
                    ))}
                </div>
                <div
                    id={"items"}
                    className='hstack pt-3 pb-0 d-flex align-items-start px-0 mb-0'>
                    <Swiper
                        spaceBetween={20}
                        breakpoints={{
                            300: {
                                spaceBetween: 10,
                                slidesPerView: 2,
                            },
                            400: {
                                spaceBetween: 10,
                                slidesPerView: 3,
                            },
                            510: {
                                spaceBetween: 15,
                                slidesPerView: 4,
                            },
                            670: {
                                spaceBetween: 20,
                                slidesPerView: 5,
                            },
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        className='w-100 pb-5 pt-1 px-3 h-auto'>
                        {props.build.artifacts.map((item) => (
                            <SwiperSlide key={item.title}>
                                <ArtifactItem artifact={item}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Col>
            <Col
                md={11}
                sm={12}
                lg={4}
                xs={12}
                id={"items"}
                className='hstack d-flex align-items-start py-4 px-0 mb-0'>
                <Swiper
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                        },
                        400: {
                            slidesPerView: 3,
                        },
                        510: {
                            slidesPerView: 4,
                        },
                        670: {
                            slidesPerView: 5,
                        },
                        990: {
                            slidesPerView: 2,
                        },
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    className='w-100 pb-5 pt-1 px-3 h-auto'>
                    {props.build.weapons.map((item) => (
                        <SwiperSlide key={item.link}>
                            <WeaponItem weapon={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Col>
        </>
    );
};

export default BuildsSection;
