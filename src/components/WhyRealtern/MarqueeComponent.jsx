import Marquee from "react-fast-marquee";
import { BoldFont, MediumFont } from "@/utils/fonts";

const content1 = ["yelpcamp", "twitter clone", "notion clone", "todo list app"];
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
    <div className="mt-10 flex h-max w-full flex-col items-center justify-center gap-y-4 overflow-hidden sm:gap-y-8 lg:mt-24">
      <span className={`text-[2rem] text-[#2C2C2C] ${MediumFont.className}`}>
        You know what, that
      </span>
      <div className="custom-scrollbar-hide flex w-full -rotate-2 flex-col gap-y-1 overflow-hidden sm:gap-y-3">
        <Marquee autoFill pauseOnClick className="flex flex-col text-[#6F71EE]">
          {content1.map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer select-none px-5 py-2 text-5xl tracking-[0.01em] ${BoldFont.className} ${
                i % 4 === 0
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
          className="flex flex-col text-[#6F71EE]"
        >
          {content2.map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer select-none px-5 py-2 text-5xl tracking-[0.01em] ${BoldFont.className} ${
                i % 4 === 0
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
        <Marquee autoFill pauseOnClick className="flex flex-col text-[#6F71EE]">
          {content3.map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer select-none px-5 py-2 text-5xl tracking-[0.01em] ${BoldFont.className} ${
                i % 4 === 0
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
      <span className="mt-4 pl-3 text-2xl text-[#2C2C2C] sm:text-[1.75rem]">
        project isn’t gonna help you get into your dream company
      </span>
    </div>
  );
};

export default MarqueeComponent;
