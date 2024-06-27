import { MediumFont } from "@/utils/fonts";

const CardsGrid = () => {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-12 md:pb-24">
      <div className="grid min-h-[1100px] gap-4 md:grid-cols-5">
        <div className="flex items-center justify-center rounded-[20px] bg-[#FBD59B] p-6 md:col-span-2 md:row-span-2">
          <div className="flex size-full flex-col justify-between rounded-[5px] bg-white p-6">
            <h3
              className={`text-[28px] leading-[3.5rem] text-[#232323] ${MediumFont.className}`}
            >
              A fully managed platform for teams to train, deploy and scale LLMs
              in production
            </h3>
            <button
              className={`w-max rounded-[5px] bg-[#4A5FF7] px-4 py-2 text-[18px] text-white ${MediumFont.className}`}
            >
              Artificial Intelligence
            </button>
          </div>
        </div>

        <div className="relative flex justify-between overflow-hidden rounded-[20px] bg-[#4A5FF6]/90 px-6 py-9 md:col-span-3 md:row-span-2">
          <div className="flex flex-col justify-between">
            <p
              className={`text-[24px] leading-[3rem] text-white ${MediumFont.className}`}
            >
              A new app that helps you master concepts of math, data analysis,
              CS fundamentals, CS algorithms, artificial neural networks,
              machine learning & more through guided, interactive, problem
              solving courses
            </p>
            <button
              className={`w-max rounded-[5px] bg-[#DDFC9D] px-4 py-2 text-[18px] text-[#2C2C2CCC] ${MediumFont.className}`}
            >
              Edtech
            </button>
          </div>
          <div className="absolute bottom-0 right-0 h-[100px] w-[50px] bg-[#FAD49B]" />
        </div>

        <div className="relative flex justify-between overflow-hidden rounded-[20px] bg-[#DDFC9D] px-6 py-9 md:col-span-3 md:row-span-1">
          <div className="flex flex-col justify-between">
            <p
              className={`text-[24px] leading-[3rem] text-[#000000B2] ${MediumFont.className}`}
            >
              A generative AI platform to build custom APIs from user prompts
            </p>
            <button
              className={`w-max rounded-[5px] bg-[#3B3C39] px-4 py-2 text-[18px] text-[#CCCCCA] ${MediumFont.className}`}
            >
              Artificial Intelligence
            </button>
          </div>
          <div className="absolute bottom-0 right-0 size-[50px] bg-[#3B3C39]" />
        </div>

        <div className="flex justify-center rounded-[20px] bg-[#3B3B3AE5] px-6 py-9 md:col-span-2 md:row-span-3">
          <p
            className={`text-[24px] text-[#DDFC9D] ${MediumFont.className} leading-[3rem]`}
          >
            A SaaS platform automating programmatic SEO from end-to-end
            everything from identifying the right search patterns, to producing
            content at scale, to automatically monitoring performance and
            deploying updates.
          </p>
        </div>

        <div className="relative flex flex-col overflow-hidden rounded-[20px] bg-[#8424FE] px-6 pb-9 pt-20 md:col-span-3 md:row-span-3">
          <div className="mb-8 size-full bg-[#E7E8FE] p-6">
            <p
              className={`text-[24px] text-[#000003B2] ${MediumFont.className} leading-[3rem]`}
            >
              An AI-powered support platform making internal knowledge sources
              instantly accessible for customer-facing teams by automatically
              delivering relevant information
            </p>
          </div>
          <button
            className={`w-max rounded-[5px] bg-[#FAD49B] px-4 py-2 text-[18px] text-[#846548] ${MediumFont.className}`}
          >
            Artificial Intelligence
          </button>
          <div className="absolute left-0 top-0 h-[50px] w-[111px] bg-[#FAD49B]" />
        </div>

        <div className="flex rounded-[20px] bg-[#F8F7F3] px-6 py-9 md:col-span-2 md:row-span-1">
          <p
            className={`text-[24px] text-[#2C2C2CE5] ${MediumFont.className} leading-[3rem]`}
          >
            An AI dating assistant to land more dates on dating apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
