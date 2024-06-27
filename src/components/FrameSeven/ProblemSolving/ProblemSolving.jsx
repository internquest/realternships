import { MediumFont } from "@/utils/fonts";
import ProblemSolvingAccordion from "./ProblemSolvingAccordion";

const ProblemSolving = () => {
  return (
    <div className="p-4">
      <div className="min-h-screen rounded-[20px] bg-[#DDFC9D] pb-12 md:pb-20">
        <div>
          <h1
            className={`${MediumFont.className} flex items-center justify-center pt-12 text-[24px] text-[#2C2C2C] sm:text-[32px] md:pt-20 lg:text-[36px]`}
          >
            What Really Matters:
          </h1>

          <div
            className={`mx-auto mt-12 max-w-[850px] rounded-t-[20px] border-[5px] border-[#C5E28C] bg-white px-12 pt-12 md:mt-20 ${MediumFont.className} `}
          >
            <div className="mx-auto max-w-[620px] rounded-[10px] bg-[#4E51FD] p-8 text-[21px] leading-[2.7rem] text-white md:text-[24px] md:leading-[3rem]">
              Ultimately, the goal of innovation is to improve the lives of
              end-users & is fueled by a relentless desire to solve problems
            </div>
            <div className="my-12 flex items-center justify-center">
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
