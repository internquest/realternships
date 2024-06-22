import Marquee from "react-fast-marquee";
import { BoldFont, MediumFont } from "@/utils/fonts";


const content1 = [
    "yelpcamp",
    "twitter clone",
    "notion clone",
    "todo list app"
];
const content2 = [
    "chat app",
    "twitter clone",
    "hospital management system",
    "blog app",
];
const content3 = [
    "food delivery website",
    "bookstore",
    "quiz app",
    "shopping kart",
    "Linkfree",
];

const MarqueeComponent = () => {
    return (
        <div className="w-full h-max flex flex-col items-center justify-center gap-y-4 sm:gap-y-8 mt-10 lg:mt-24 overflow-hidden">
            <span className={`text-[2rem] text-[#2C2C2C] ${MediumFont.className}`}>
                You know what, that
            </span>
            <div className="w-full -rotate-2 flex flex-col gap-y-1 sm:gap-y-3 overflow-hidden custom-scrollbar-hide">
                <Marquee
                    autoFill
                    pauseOnClick
                    className="text-[#6F71EE] flex flex-col"
                >
                    {content1.map((item, i) => (
                        <div key={i} className={`select-none py-2 px-5 text-5xl cursor-pointer tracking-[0.01em] ${BoldFont.className}  ${i % 4 === 0
                            ? "text-[#5F71F8]/90"
                            : i % 4 === 1
                                ? "text-[#5F71F8]/30"
                                : i % 4 === 2
                                    ? "text-[#5F71F8]/70"
                                    : "text-[#5F71F8]/50"
                            }`}
                        >
                            {item}
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    autoFill
                    pauseOnClick
                    direction="right"
                    className=" text-[#6F71EE] flex flex-col "
                >
                    {content2.map((item, i) => (
                        <div key={i} className={`select-none py-2 px-5 text-5xl cursor-pointer tracking-[0.01em] ${BoldFont.className}  ${i % 4 === 0
                            ? "text-[#5F71F8]/90"
                            : i % 4 === 1
                                ? "text-[#5F71F8]/30"
                                : i % 4 === 2
                                    ? "text-[#5F71F8]/70"
                                    : "text-[#5F71F8]/50"
                            }`}
                        >
                            {item}
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    autoFill
                    pauseOnClick
                    className=" text-[#6F71EE] flex flex-col "
                >
                    {content3.map((item, i) => (
                        <div key={i} className={`select-none py-2 px-5 text-5xl cursor-pointer tracking-[0.01em] ${BoldFont.className} ${i % 4 === 0
                            ? "text-[#5F71F8]/90"
                            : i % 4 === 1
                                ? "text-[#5F71F8]/30"
                                : i % 4 === 2
                                    ? "text-[#5F71F8]/70"
                                    : "text-[#5F71F8]/50"
                            }`}
                        >
                            {item}
                        </div>
                    ))}
                </Marquee>
            </div>
            <span
                className="text-[#2C2C2C] text-2xl sm:text-[1.75rem] mt-4 pl-3"
            >
                project isn’t gonna help you get into your dream company
            </span>
        </div >
    );
};

export default MarqueeComponent;
