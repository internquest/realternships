import { MediumFont, BoldFont } from "@/utils/fonts";

const Heading = () => {
  return (
    <div className="z-0 h-max  mx-auto pt-36  flex flex-col items-center justify-center gap-y-40 lg:gap-y-[150px] bg-[#f6f6f6] lg:rounded-b-[45px] ">
      <div className=" w-full xl:max-w-[1440px] h-max flex flex-col items-center justify-between gap-y-20 lg:gap-y-12 px-4 sm:px-12 lg:px-16 ">
        <h1
          className={`text-[45px] sm:text-[65px] md:text-[82px] lg:text-[105px] xl:text-9xl font-black uppercase leading-tight xl:leading-[150px] 2xl:leading-[180px] tracking-tighter lg:tracking-tight text-[#2C2C2C]/90 whitespace-nowrap ${BoldFont.className}`}
        >
          REALTERNSHIPS
        </h1>
        <div
          className={`text-lg sm:text-2xl md:text-3xl font-medium text-center text-[#2C2C2C]/80 mx-4 lg:mx-4 py-8 sm:py-10 lg:py-16 px-6 sm:px-16 lg:px-36 xl:px-40 w-auto xl:w-[1120px] bg-white rounded-2xl sm:rounded-[35px] lg:rounded-[35px] ${MediumFont.className}`}
        >
          <span className="leading-normal lg:leading-[3.75rem] tracking-[0.01em] ">
            Work Experience is the most valuable asset in today’s job market and
            students lack practical, hands-on real time work experience
          </span>
        </div>
      </div>
      <div
        className={`w-full text-3xl sm:text-4xl lg:text-5xl  py-[70px] lg:rounded-[45px] text-white bg-[#4A5FF6] text-center tracking-[0.2px] px-12 md:px-0 ${MediumFont.className}`}
      >
        Realternships are here to change this....
      </div>
    </div>
  );
};

export default Heading;
