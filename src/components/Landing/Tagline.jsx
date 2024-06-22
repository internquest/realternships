"use client";
import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import Marquee from "react-fast-marquee";
const content = ["Learn", "Experience", "Thrive", "Solve", "Build", "Innovate"];
const Tagline = () => {
    return (
        <div className="w-full h-max flex flex-col items-center justify-center gap-y-32 pt-16 sm:pt-40 md:pt-10 lg:pt-20 pb-12 sm:pb-40 overflow-hidden">
            <div
                className={`${SemiBoldFont.className} text-3xl md:text-4xl font-semibold text-[#2C2C2C]/90  sm:leading-relaxed tracking-tight flex flex-col`}
            >
                <span
                    className={`text-6xl md:text-7xl leading-[10px] text-[#2C2C2C]/90 ${SemiBoldFont.className}`}
                >
                    &ldquo;
                </span>
                <span className="w-80 sm:w-[640px] pl-6  text-[40px] leading-[55px] sm:leading-normal tracking-[0.01em] ">
                    Realternships empower students with real-time work experience
                </span>
            </div>
            <div className="w-full -rotate-3 flex flex-col gap-y-2 overflow-hidden ">
                <Marquee autoFill pauseOnClick className=" text-[#6F71EE] ">
                    {content.map((item, index) => (
                        <div
                            className={`select-none bg-[#EAEEF9] m-0 rounded-l-full rounded-r-full flex space-x-5  py-3 px-7 sm:px-10 text-3xl sm:text-4xl lg:text-[40px] cursor-pointer tracking-[0.01em] ${MediumFont.className}`}
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
