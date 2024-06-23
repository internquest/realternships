"use client";
import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import Marquee from "react-fast-marquee";
const content = ["Learn", "Experience", "Thrive", "Solve", "Build", "Innovate"];
const Tagline = () => {
  return (
    <div className="flex h-max w-full flex-col items-center justify-center gap-y-32 overflow-hidden pb-12 pt-16 sm:pb-40 sm:pt-40 md:pt-10 lg:pt-20">
      <div
        className={`${SemiBoldFont.className} flex flex-col text-3xl font-semibold tracking-tight text-[#2C2C2C]/90 sm:leading-relaxed md:text-4xl`}
      >
        <span
          className={`text-6xl leading-[10px] text-[#2C2C2C]/90 md:text-7xl ${SemiBoldFont.className}`}
        >
          &ldquo;
        </span>
        <span className="w-80 pl-6 text-[40px] leading-[55px] tracking-[0.01em] sm:w-[640px] sm:leading-normal">
          Realternships empower students with real-time work experience
        </span>
      </div>
      <div className="flex w-full -rotate-3 flex-col gap-y-2 overflow-hidden">
        <Marquee autoFill pauseOnClick className="text-[#6F71EE]">
          {content.map((item, index) => (
            <div
              className={`m-0 flex cursor-pointer select-none space-x-5 rounded-l-full rounded-r-full bg-[#EAEEF9] px-7 py-3 text-3xl tracking-[0.01em] sm:px-10 sm:text-4xl lg:text-[40px] ${MediumFont.className}`}
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
