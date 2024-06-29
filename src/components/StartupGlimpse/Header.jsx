import { MediumFont } from "@/utils/fonts";

const Header = () => {
  return (
    <div className="relative mx-[5px] mt-24 flex flex-col justify-center rounded-[10px] bg-[#F4DFC1]/90 px-[12px] py-8 sm:px-11 md:mx-4 md:pb-44 md:pt-24 lg:px-28 xl:px-36">
      <h1
        className={`mb-9 text-[36px] leading-[3.8rem] text-[#333] sm:text-[48px] sm:leading-[4.5rem] md:text-[64px] md:leading-[5.6rem] lg:mb-16 ${MediumFont.className} z-30 max-w-[880px]`}
      >
        where learning meets impact - Be a part of something bigger
      </h1>

      <div className="z-30 max-w-[644px] rounded-[20px] bg-white px-6 pb-8 pt-5">
        <p
          className={`text-[28px] leading-[3rem] text-[#2C2C2C]/80 ${MediumFont.className}`}
        >
          As a Realtern, you'll be a key player working alongside passionate
          teams on projects that could change the way we live, work, and
          interact with the world around us
        </p>
      </div>

      <div className="absolute bottom-0 hidden size-[340px] rounded-full bg-[#FFFFFF] opacity-50 md:ml-[150px] md:block" />
      <div className="absolute bottom-0 right-0">
        <svg
          width="655"
          height="963"
          viewBox="0 0 655 963"
          fill="none"
          className="opacity-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M654.426 962.919H378.147L0.289062 0H276.568L654.426 962.919Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
