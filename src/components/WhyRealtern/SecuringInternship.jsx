import Image from "next/image";
import pc from "@/assets/WhyRealtern/pc.png";
import { MediumFont } from "@/utils/fonts";

const SecuringInternship = () => {
  return (
    <div className="relative flex h-max w-full items-center justify-end py-0 pt-32 sm:py-40 sm:pt-40 pl-0 xl:pl-32 2xl:justify-center max-w-[1600px] mx-auto">
      <div className="flex w-full flex-col items-center justify-between gap-10  xl:flex-row">
        <p
          className={`w-full px-[9.5px] text-center text-xl leading-9 text-[#2C2C2C]/80 sm:px-14 sm:text-[22.2px] sm:leading-[3rem] lg:px-20 xl:w-[520px] xl:px-0 xl:text-left ${MediumFont.className}`}
        >
          Securing an internship today often means proving that you can hit the
          ground running. Companies give priority to applicants with previous
          internship experience/work experience because it indicates that you
          are prepared to contribute effectively and integrate smoothly into
          their teams.
        </p>
        <div className="relative h-full w-full sm:h-[450px] sm:w-fit xl:h-[550px]">
          <Image
            src={pc}
            alt="photo"
            className="h-full w-full object-contain"
          />
          <div className="absolute -left-11 top-[175px] hidden h-[72px] w-36 bg-[#5F71F8]/80 sm:block"></div>
          <div className="absolute bottom-0 left-0 hidden h-[40px] w-[100px] bg-white sm:block"></div>
        </div>
      </div>
      <div className="absolute right-40 top-0 h-12 w-24 bg-white"></div>

      <div className="absolute -top-[1.1px] right-[120px] h-[51px] w-[100px] bg-[#4A5FF6]"></div>
      <div className="absolute bottom-0 left-[100px] h-[50px] w-[50px] bg-[#F4F4F4]"></div>
      <div className="absolute bottom-0 right-0 h-[80px] w-[80px] bg-[#F4F4F4]"></div>
    </div>
  );
};

export default SecuringInternship;
