"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MediumFont } from "@/utils/fonts";

const FirstSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="mt-36 flex h-screen items-center justify-center rounded-[50px] bg-[#6F71EE]">
      <div className="mx-auto max-w-[1350px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={5}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          onSlideChange={handleSlideChange}
          className="w-full"
          loop={true}
        >
          <SwiperSlide>
            <div
              className={`flex h-[300px] flex-col items-center justify-center ${activeIndex === 0 ? "bg-white" : "bg-[#E6E8FE99]"} rounded-[10px] p-8`}
            >
              <p
                className={`${MediumFont.className} text-[24px] leading-[2.7rem] tracking-[1.5%] text-[#544D49E5] transition-opacity duration-300 ${activeIndex === 0 ? "opacity-100" : "opacity-0"}`}
              >
                Who will raise my child in the event of the unthinkable?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[300px] flex-col items-center justify-center ${activeIndex === 1 ? "bg-white" : "bg-[#E6E8FE99]"} rounded-[10px] p-8`}
            >
              <p
                className={`${MediumFont.className} text-[24px] leading-[2.7rem] tracking-[1.5%] text-[#544D49E5] transition-opacity duration-300 ${activeIndex === 1 ? "opacity-100" : "opacity-0"}`}
              >
                How to land a job when every other job asks for experience?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[300px] flex-col items-center justify-center ${activeIndex === 2 ? "bg-white" : "bg-[#E6E8FE99]"} rounded-[10px] p-8`}
            >
              <p
                className={`${MediumFont.className} text-[24px] leading-[2.7rem] tracking-[1.5%] text-[#544D49E5] transition-opacity duration-300 ${activeIndex === 2 ? "opacity-100" : "opacity-0"}`}
              >
                How to land a job when every other job asks for experience?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[300px] flex-col items-center justify-center ${activeIndex === 3 ? "bg-white" : "bg-[#E6E8FE99]"} rounded-[10px] p-8`}
            >
              <p
                className={`${MediumFont.className} text-[24px] leading-[2.7rem] tracking-[1.5%] text-[#544D49E5] transition-opacity duration-300 ${activeIndex === 3 ? "opacity-100" : "opacity-0"}`}
              >
                How to land a job when every other job asks for experience?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[300px] flex-col items-center justify-center ${activeIndex === 4 ? "bg-white" : "bg-[#E6E8FE99]"} rounded-[10px] p-8`}
            >
              <p
                className={`${MediumFont.className} text-[24px] leading-[2.7rem] tracking-[1.5%] text-[#544D49E5] transition-opacity duration-300 ${activeIndex === 4 ? "opacity-100" : "opacity-0"}`}
              >
                How to land a job when every other job asks for experience?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[300px] flex-col items-center justify-center ${activeIndex === 5 ? "bg-white" : "bg-[#E6E8FE99]"} rounded-[10px] p-8`}
            >
              <p
                className={`${MediumFont.className} text-[24px] leading-[2.7rem] tracking-[1.5%] text-[#544D49E5] transition-opacity duration-300 ${activeIndex === 5 ? "opacity-100" : "opacity-0"}`}
              >
                How to land a job when every other job asks for experience?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination mt-8 flex justify-center"></div>
      </div>
    </div>
  );
};

export default FirstSlider;
