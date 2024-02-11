import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

type props = {
  children: React.ReactNode[];
};

const SwiperScroll = (props: props) => {
  const { children } = props;

  return (
    <div className="swiperScroll">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        scrollbar={{
          hide: false,
        }}
        navigation={{
          enabled: true,
          nextEl: ".swiperNextBtn",
          prevEl: ".swiperPrevBtn",
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@2.00": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Scrollbar, Navigation]}
        className="mySwiper pb-4"
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>
            <div data-aos="fade" data-aos-delay={i * 100}>
              {child}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button className="swiperPrevBtn">
          <FaArrowAltCircleLeft />
        </button>
        <button className="swiperNextBtn">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default SwiperScroll;
