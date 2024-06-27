"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content:
      "Phenomenal job. We are a very niche market and I'm sure it took some extra digging to find all the information for the market research report. The report is incredibly detailed, accurate and well written. Very very happy with the work!",
    author: "Nelson Dunk",
    position: "Chief Creative Office at Skylight Visual Media",
    image:
      "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef758024fac2a534c086_Deshawn%20Robinson.jpg",
  },
  {
    id: 2,
    content:
      "Phenomenal job. We are a very niche market and I'm sure it took some extra digging to find all the information for the market research report. The report is incredibly detailed, accurate and well written. Very very happy with the work!",
    author: "Nelson Dunk",
    position: "Chief Creative Office at Skylight Visual Media",
    image:
      "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef758024fac2a534c086_Deshawn%20Robinson.jpg",
  },
  {
    id: 3,
    content:
      "Phenomenal job. We are a very niche market and I'm sure it took some extra digging to find all the information for the market research report. The report is incredibly detailed, accurate and well written. Very very happy with the work!",
    author: "Nelson Dunk",
    position: "Chief Creative Office at Skylight Visual Media",
    image:
      "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef758024fac2a534c086_Deshawn%20Robinson.jpg",
  },
  {
    id: 4,
    content:
      "Phenomenal job. We are a very niche market and I'm sure it took some extra digging to find all the information for the market research report. The report is incredibly detailed, accurate and well written. Very very happy with the work!",
    author: "Nelson Dunk",
    position: "Chief Creative Office at Skylight Visual Media",
    image:
      "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef758024fac2a534c086_Deshawn%20Robinson.jpg",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

function ThirdSlider() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="relative w-full max-w-2xl">
        <Swiper spaceBetween={30} slidesPerView={1}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="relative flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg"
                style={{
                  zIndex: testimonials.length - index,
                  transform: `translateY(${index * -20}px)`,
                }}
              >
                <p className="mb-4 text-lg text-gray-800">
                  {testimonial.content}
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ThirdSlider;
