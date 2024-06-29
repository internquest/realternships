import { MediumFont } from "@/utils/fonts";
import QuestionEverythingAccordion from "./QuestionEverythingAccordion";

const QuestionEverything = () => {
  return (
    <div className="px-[5px] pb-4 sm:px-4">
      <div className="rounded-[20px] bg-[#8423FE]">
        <div>
          <h1
            className={`${MediumFont.className} flex items-center justify-center pt-12 text-[24px] text-white sm:text-[32px] md:pt-20 lg:text-[36px]`}
          >
            Question Everything
          </h1>

          <div
            className={`mx-auto mt-12 max-w-[850px] rounded-t-[10px] bg-[#FCD69C] px-[4px] pt-12 md:mt-20 md:px-12 md:pt-20 ${MediumFont.className} `}
          >
            <div className="mx-auto max-w-[700px] rounded-t-[10px] border-[#FAD49B]/50 bg-white p-8 text-[21px] leading-[2.7rem] text-[#544D49] md:border-[5px] md:text-[24px] md:leading-[3rem]">
              Innovation begins with curiosity. We seek individuals who are not
              afraid to challenge the status quo and ask the tough questions
            </div>

            <QuestionEverythingAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionEverything;
