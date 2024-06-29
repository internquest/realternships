import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import Marquee from "react-fast-marquee";
const content = ["Learn", "Experience", "Thrive", "Solve", "Build", "Innovate"];
const Tagline = () => {
  return (
    <div className="flex h-max w-full flex-col items-center justify-center gap-y-12 overflow-hidden pb-12 pt-16 sm:pb-40 sm:pt-40 md:gap-y-24 md:pt-10 lg:gap-y-32 lg:pt-20">
      <div
        className={`${SemiBoldFont.className} flex flex-col px-4 text-3xl font-semibold tracking-tight text-[#2C2C2C]/90 sm:leading-relaxed md:text-4xl`}
      >
        <span
          className={`text-6xl leading-[10px] text-[#2C2C2C]/90 md:text-7xl ${SemiBoldFont.className}`}
        >
          &ldquo;
        </span>
        <span className="mx-auto max-w-[640px] pl-6 text-[30px] leading-[3.5rem] tracking-[0.01em] sm:leading-normal md:text-[40px] md:leading-[4rem]">
          Realternships empower students with real-time work experience
        </span>
      </div>
      <div className="w-full -rotate-3">
        <Marquee autoFill pauseOnClick className="text-[#6F71EE]">
          {content.map((item, index) => (
            <div
              className={`select-none rounded-full bg-[#EAEEF9] px-5 text-[28px] sm:px-10 sm:text-[32px] lg:text-[40px] ${MediumFont.className}`}
              key={index}
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Tagline;
