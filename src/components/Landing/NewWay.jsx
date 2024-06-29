import { SemiBoldFont } from "@/utils/fonts";

const NewWay = () => {
  return (
    <div className="mx-auto mt-9 flex h-max w-full max-w-[900px] flex-col items-center justify-start gap-y-12 bg-white px-4 py-16 lg:gap-y-24">
      <div className="px-1 text-black lg:px-16">
        <h2
          className={`text-[36px] leading-[3rem] text-[#2C2C2C]/80 ${SemiBoldFont.className}`}
        >
          A new way to gain real time work experience
        </h2>
        <p className="mt-8 w-full text-left text-[22px] font-medium leading-[2.4rem] tracking-[0.01em] sm:text-[24px] sm:leading-[3rem]">
          Realternships empower the next generation of tech talent to become
          world-class coders. We’re here to equip students with not just
          knowledge, but work experience to solve problems of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default NewWay;
