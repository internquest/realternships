"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MediumFont, SemiBoldFont } from "@/utils/fonts";

const SecondSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto max-w-[1150px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".custom-pagination-second" }}
          onSlideChange={handleSlideChange}
          className="w-full"
          loop={true}
        >
          <SwiperSlide>
            <div
              className={`flex h-[380px] flex-col ${activeIndex === 0 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 0 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                High Expectations
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 0 ? "opacity-100" : "hidden"}`}
              >
                I used to have high expectations believing that I will land my
                dream job or a prestigious job straight out of college. But the
                reality is for some it does happen but for most it does not
                because of lack of experience, and connections.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[380px] flex-col ${activeIndex === 1 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 1 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                High Expectations
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 1 ? "opacity-100" : "hidden"}`}
              >
                I used to have high expectations believing that I will land my
                dream job or a prestigious job straight out of college. But the
                reality is for some it does happen but for most it does not
                because of lack of experience, and connections.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[380px] flex-col ${activeIndex === 2 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 2 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                High Expectations
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 2 ? "opacity-100" : "hidden"}`}
              >
                I used to have high expectations believing that I will land my
                dream job or a prestigious job straight out of college. But the
                reality is for some it does happen but for most it does not
                because of lack of experience, and connections.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[380px] flex-col ${activeIndex === 3 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 3 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                High Expectations
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 3 ? "opacity-100" : "hidden"}`}
              >
                I used to have high expectations believing that I will land my
                dream job or a prestigious job straight out of college. But the
                reality is for some it does happen but for most it does not
                because of lack of experience, and connections.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination-second mt-8 flex justify-center"></div>
      </div>
    </div>
  );
};

export default SecondSlider;
