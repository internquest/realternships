import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import Image from "next/image";
import { useSwiperSlide } from "swiper/react";

const EachSliderCard = ({ imgUrl, title, description, subText }) => {
  const swiperSlide = useSwiperSlide();
  return (

    <div className={`mx-auto w-full max-w-[450px]  flex-shrink-0 flex   flex-col items-center justify-start gap-y-3  rounded-[10px] ${swiperSlide.isActive ? "bg-[#96f0b6] text-[#2C2C2C]" : "bg-white text-white"}  px-4 pb-4 pt-6   md:gap-y-5 min-h-[500px] duration-700 transition-colors lg:px-8 lg:pb-0 lg:pt-9`}>
      <Image
        src={imgUrl}
        alt="photo"
        width={1200}
        height={1200}
        className="h-16 w-16 rounded-[10px] object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
      />
      <span
        className={`text-[28px] md:text-3xl lg:text-[32px] ${SemiBoldFont.className} w-full text-center leading-[32px] lg:!leading-[40px]`}
      >
        {title}
      </span>
      <p
        className={`text-[1.125rem] font-medium leading-[26px] text-[#2C2C2C]/80 lg:text-[20px] lg:!leading-[35px] ${MediumFont.className}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <p
        className={`text-[1.125rem] font-medium leading-[26px] text-[#2C2C2C]/80 lg:text-[20px] lg:!leading-[35px] ${MediumFont.className}`}
        dangerouslySetInnerHTML={{ __html: subText }}
      ></p>
    </div>

  );
};

export default EachSliderCard;
