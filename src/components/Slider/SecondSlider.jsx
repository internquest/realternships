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
              className={`flex h-[400px] flex-col ${activeIndex === 0 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 0 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                No Experience
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 0 ? "" : "hidden"}`}
              >
                It feels like every job I’m interested in requires experience,
                but as a student, it’s frustrating because I need a job to get
                experience, but I need experience to get a job.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[400px] flex-col ${activeIndex === 1 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 1 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                Competitive Job Market
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 1 ? "" : "hidden"}`}
              >
                The job market is incredibly competitive. For every position I
                apply for, there are hundreds, sometimes thousands, of other
                candidates who are just as qualified, if not more. Standing out
                in such a crowded field is tough.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[400px] flex-col ${activeIndex === 2 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 2 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                High Expectations
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 2 ? "" : "hidden"}`}
              >
                I did a lot of courses, but sometimes it feels like the skills I
                have aren’t exactly what employers are looking for. There’s
                often a gap between what I know and what the job
                descriptions require.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[400px] flex-col ${activeIndex === 3 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 3 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                Economic Factors
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 3 ? "" : "hidden"}`}
              >
                The economy plays a big role in job availability. During
                economic downturns, there are fewer job openings, and it
                feels like I have to compete even harder for the limited
                positions available.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[400px] flex-col ${activeIndex === 4 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 4 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                Limited Resources
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 4 ? "" : "hidden"}`}
              >
                Not all students have equal access to career resources. I try
                to make use of my university’s career services, but sometimes
                it feels like I’m not getting the personalized help I need to
                really improve my applications and interviews.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`flex h-[400px] flex-col ${activeIndex === 5 ? "justify-between bg-[#2F09EFBF]" : "justify-end bg-[#F8F8FE]"} rounded-[10px] p-8`}
            >
              <h2
                className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} px-3 py-1 text-[25px] ${activeIndex === 5 ? "bg-[#DDFC9D]" : "bg-none"}`}
              >
                High Expectations
              </h2>
              <p
                className={`${MediumFont.className} text-[20px] leading-[2.1rem] tracking-[1.5%] text-white transition-opacity duration-300 ${activeIndex === 5 ? "" : "hidden"}`}
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
