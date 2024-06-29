import { MediumFont } from "@/utils/fonts";
import ProblemSolvingAccordion from "./ProblemSolvingAccordion";

const ProblemSolving = () => {
  return (
    <div className="px-[5px] py-4 sm:p-4">
      <div className="min-h-screen rounded-[20px] bg-[#DDFC9D] pb-12 md:pb-20">
        <div>
          <h1
            className={`${MediumFont.className} flex items-center justify-center pt-8 text-[24px] text-[#2C2C2C] sm:text-[32px] md:pt-20 lg:text-[36px]`}
          >
            Intense Problem-Solving Drive
          </h1>

          <div
            className={`mx-auto mt-8 max-w-[850px] rounded-t-[20px] border-[5px] border-[#C5E28C] bg-white px-[4px] pt-8 md:mt-20 md:px-12 md:pt-12 ${MediumFont.className} `}
          >
            <div className="mx-auto max-w-[620px] rounded-[10px] bg-[#4E51FD] p-4 text-[21px] leading-[2.7rem] text-white md:p-8 md:text-[24px] md:leading-[3rem]">
              Ultimately, the goal of innovation is to improve the lives of
              end-users & is fueled by a relentless desire to solve problems
            </div>
            <div className="my-8 flex items-center justify-center md:my-12">
              <h2
                className={`${MediumFont.className} text-[22px] text-[#544D49]`}
              >
                We seek students who:
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-[850px]">
          <ProblemSolvingAccordion />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolving;
