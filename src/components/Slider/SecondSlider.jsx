"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { MediumFont, SemiBoldFont } from '@/utils/fonts';

const SecondSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='max-w-[1150px] mx-auto'>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides={true}
                    pagination={{ clickable: true, el: '.custom-pagination-second' }}
                    onSlideChange={handleSlideChange}
                    className="w-full"
                    loop={true}
                >
                    <SwiperSlide>
                        <div className={`h-[380px] flex flex-col ${activeIndex === 0 ? 'bg-[#2F09EFBF] justify-between' : 'bg-[#F8F8FE] justify-end'} p-8 rounded-[10px]`}>
                            <h2 className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} text-[25px] px-3 py-1 ${activeIndex === 0 ? 'bg-[#DDFC9D]' : 'bg-none'}`}>High Expectations</h2>
                            <p className={`${MediumFont.className} text-white tracking-[1.5%] text-[20px] leading-[2.1rem] transition-opacity duration-300 ${activeIndex === 0 ? 'opacity-100' : 'hidden'}`}>
                                I used to have high expectations
                                believing that I will land my dream job
                                or a prestigious job straight out of
                                college. But the reality is for some it
                                does happen but for most it does not
                                because of lack of experience, and
                                connections.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`h-[380px] flex flex-col ${activeIndex === 1 ? 'bg-[#2F09EFBF] justify-between' : 'bg-[#F8F8FE] justify-end'} p-8 rounded-[10px]`}>
                            <h2 className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} text-[25px] px-3 py-1 ${activeIndex === 1 ? 'bg-[#DDFC9D]' : 'bg-none'}`}>High Expectations</h2>
                            <p className={`${MediumFont.className} text-white tracking-[1.5%] text-[20px] leading-[2.1rem] transition-opacity duration-300 ${activeIndex === 1 ? 'opacity-100' : 'hidden'}`}>
                                I used to have high expectations
                                believing that I will land my dream job
                                or a prestigious job straight out of
                                college. But the reality is for some it
                                does happen but for most it does not
                                because of lack of experience, and
                                connections.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`h-[380px] flex flex-col ${activeIndex === 2 ? 'bg-[#2F09EFBF] justify-between' : 'bg-[#F8F8FE] justify-end'} p-8 rounded-[10px]`}>
                            <h2 className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} text-[25px] px-3 py-1 ${activeIndex === 2 ? 'bg-[#DDFC9D]' : 'bg-none'}`}>High Expectations</h2>
                            <p className={`${MediumFont.className} text-white tracking-[1.5%] text-[20px] leading-[2.1rem] transition-opacity duration-300 ${activeIndex === 2 ? 'opacity-100' : 'hidden'}`}>
                                I used to have high expectations
                                believing that I will land my dream job
                                or a prestigious job straight out of
                                college. But the reality is for some it
                                does happen but for most it does not
                                because of lack of experience, and
                                connections.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`h-[380px] flex flex-col ${activeIndex === 3 ? 'bg-[#2F09EFBF] justify-between' : 'bg-[#F8F8FE] justify-end'} p-8 rounded-[10px]`}>
                            <h2 className={`w-max rounded-[10px] tracking-[1%] ${SemiBoldFont.className} text-[25px] px-3 py-1 ${activeIndex === 3 ? 'bg-[#DDFC9D]' : 'bg-none'}`}>High Expectations</h2>
                            <p className={`${MediumFont.className} text-white tracking-[1.5%] text-[20px] leading-[2.1rem] transition-opacity duration-300 ${activeIndex === 3 ? 'opacity-100' : 'hidden'}`}>
                                I used to have high expectations
                                believing that I will land my dream job
                                or a prestigious job straight out of
                                college. But the reality is for some it
                                does happen but for most it does not
                                because of lack of experience, and
                                connections.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="custom-pagination-second mt-8 flex justify-center"></div>
            </div>
        </div>
    );
}

export default SecondSlider
