import { MediumFont } from "@/utils/fonts";

const WhatReallyMatters = () => {
  return (
    <div className="min-h-screen bg-[#E6E8FE]">
      <div className="flex flex-col items-center justify-center px-[5px] py-12 sm:px-4 md:py-20">
        <h1
          className={`${MediumFont.className} text-[24px] text-[#2C2C2C] sm:text-[32px] lg:text-[36px]`}
        >
          What Really Matters:
        </h1>

        <div className="mx-auto mt-8 h-full w-full max-w-[900px] rounded-[20px] bg-[#4A5FF7] text-white md:mt-16">
          <div className="border-b-[5px] border-white/50 px-4 py-6 md:p-8">
            <h3
              className={`${MediumFont.className} text-[22px] sm:text-[24px] lg:text-[28px]`}
            >
              Ecosystem Awareness
            </h3>
            <ol
              className={`text-[18px] leading-[2.5rem] md:text-[20px] md:leading-[2.8rem] ${MediumFont.className}`}
            >
              <li>1. Understand the bigger picture</li>
              <li>
                2. Recognize how your work fits into and affects the larger
                system
              </li>
              <li>
                3. Cultivate a holistic view of the industry and its challenges
              </li>
            </ol>
          </div>
          <div className="px-4 py-6 md:p-8">
            <h3
              className={`${MediumFont.className} text-[22px] sm:text-[24px] lg:text-[28px]`}
            >
              Ecosystem Awareness
            </h3>
            <ol
              className={`text-[20px] leading-[2.8rem] ${MediumFont.className}`}
            >
              <li>1. Understand the bigger picture</li>
              <li>
                2. Recognize how your work fits into and affects the larger
                system
              </li>
              <li>
                3. Cultivate a holistic view of the industry and its challenges
              </li>
            </ol>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WhatReallyMatters;
