// import { MediumFont, BoldFont } from "@/utils/fonts";
import { MediumFont, BoldFont } from '../../utils/fonts'

const Heading = () => {
  return (
    <div className="z-2 mx-auto flex h-max flex-col items-center justify-center bg-[#f6f6f6] pt-36 lg:rounded-b-[45px]">
      <div className="flex h-max w-full flex-col items-center justify-between gap-y-8 px-4 sm:px-12 lg:gap-y-12 lg:px-16 xl:max-w-[1440px]">
        <h1
          className={`whitespace-nowrap text-[45px] font-black uppercase leading-tight tracking-tighter text-[#2C2C2C]/90 sm:text-[65px] md:text-[82px] lg:text-[105px] lg:tracking-tight xl:text-9xl xl:leading-[150px] 2xl:leading-[180px] ${BoldFont.className}`}
        >
          REALTERNSHIPS
        </h1>
        <div
          className={`mx-4 w-auto rounded-2xl bg-white px-6 py-8 text-[19px] leading-[2.3rem] text-[#2C2C2C]/80 sm:rounded-[35px] sm:px-16 sm:py-10 sm:text-[24px] sm:leading-[2.6rem] md:text-center md:text-[30px] md:leading-[2.9rem] lg:mx-4 lg:rounded-[35px] lg:px-36 lg:py-16 xl:w-[1120px] xl:px-40 ${MediumFont.className}`}
        >
          <span className="tracking-[0.01em] lg:leading-[3.75rem]">
            Work Experience is the most valuable asset in today’s job market and
            students lack practical, hands-on real time work experience
          </span>
        </div>
      </div>
      <div
        className={`mt-12 w-full bg-[#4A5FF6] px-12 py-[70px] text-center text-3xl tracking-[0.2px] text-white sm:text-4xl md:mt-28 md:px-0 lg:rounded-[45px] lg:text-5xl ${MediumFont.className}`}
      >
        Realternships are here to change this....
      </div>
    </div>
  );
};

export default Heading;
