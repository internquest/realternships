import { MediumFont } from "@/utils/fonts";

const GrayBanner = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-[#F4F4F4] py-24 sm:py-32">
      <div
        className={`leading-45 sm:leading-55 px-2 text-center text-[24px] text-[#2C2C2C]/75 sm:w-[800px] sm:px-0 sm:text-[28px] ${MediumFont.className}`}
      >
        Now, it’s your turn to be a realtern and gain work experience which can
        be the differentiating factor that sets you apart from the competition
      </div>
      <div className="absolute left-0 top-0 hidden h-[40px] w-[100px] bg-white sm:block"></div>
      <div className="absolute right-[80px] top-0 hidden h-[60px] w-[60px] bg-white sm:block"></div>
    </div>
  );
};

export default GrayBanner;
