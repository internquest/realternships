import { MediumFont, BoldFont } from "@/utils/fonts";

const BlueBanner = () => {
  return (
    <div className="overflow-hidden relative flex w-full items-center justify-center rounded-b-[30px] bg-white pb-0 pt-[197px] shadow-xl shadow-gray-300/85 sm:pb-44 sm:pt-56 xl:rounded-b-[40px]">
      <div className="relative flex w-full items-center justify-center bg-[#4A5FF6]/90 py-28 lg:mx-28">
        <span
          className={`leading-[2.4rem] sm:leading-[3rem] max-w-[743px] px-2 text-center text-2xl text-white lg:w-[750px] ${MediumFont.className} `}
        >
          Be a Realtern to gain relevant experience, make meaningful
          contributions, enhance your resume and improve your chances of landing
          your dream internship or getting into your dream company
        </span>
        <div className="absolute -left-[0.6px] -top-[0.5px] hidden h-[60px] w-[100px] bg-white sm:block md:w-[200px]"></div>
        <div className="absolute -right-[0.6px] -top-[0.4px] hidden h-[75px] w-[75px] bg-white sm:block"></div>
        <div className="absolute -bottom-[1px] left-[200px] hidden h-[60px] w-[150px] bg-white sm:block"></div>
        <div className="absolute bottom-0 right-[100px] hidden h-[50px] w-[50px] rounded-full bg-white sm:block"></div>
      </div>
      <span
        className={`absolute top-[97px] sm:top-[111px] text-[88px] text-[#5F71F8]/30 sm:right-[70px] sm:text-9xl lg:right-[182px] ${BoldFont.className}`}
      >
        realtern
      </span>
    </div>
  );
};

export default BlueBanner;
