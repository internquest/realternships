import { MediumFont } from "@/utils/fonts";

const NewWay = () => {
  return (
    <div className="mx-auto mt-9 flex h-max w-full flex-col items-center justify-start gap-y-12 bg-white py-16 lg:gap-y-24 xl:max-w-[1440px]">
      <div className="flex w-80 flex-col items-start justify-center gap-y-6 px-1 text-black sm:w-[550px] sm:px-0 md:w-[560px] lg:ml-12 lg:w-[900px] lg:px-16">
        <span
          className={`text-4xl font-semibold tracking-wide text-[#2C2C2C]/80 ${MediumFont.className}`}
        >
          A new way to gain real time work experience
        </span>
        <span className="w-full text-left text-xl font-medium leading-normal tracking-[0.01em] sm:text-2xl sm:leading-loose">
          Realternships empower the next generation of tech talent to become
          world-class coders. We’re here to equip students with not just
          knowledge, but work experience to solve problems of tomorrow.
        </span>
      </div>
    </div>
  );
};

export default NewWay;
