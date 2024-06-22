import { MediumFont } from "@/utils/fonts";

const NewWay = () => {
  return (
    <div className="h-max w-full xl:max-w-[1440px] mx-auto flex flex-col items-center justify-start gap-y-12 lg:gap-y-24 bg-white py-16 mt-9 ">
      <div className="flex flex-col items-start justify-center gap-y-6 text-black w-80 sm:w-[550px] md:w-[560px] lg:w-[900px] lg:ml-12 px-1 sm:px-0 lg:px-16 ">
        <span
          className={`text-4xl font-semibold text-[#2C2C2C]/80 tracking-wide ${MediumFont.className}`}
        >
          A new way to gain real time work experience
        </span>
        <span className=" text-xl sm:text-2xl font-medium leading-normal sm:leading-loose text-left w-full tracking-[0.01em]">
          Realternships empower the next generation of tech talent to become
          world-class coders. We’re here to equip students with not just
          knowledge, but work experience to solve problems of tomorrow.
        </span>
      </div>
    </div>
  );
};

export default NewWay;
