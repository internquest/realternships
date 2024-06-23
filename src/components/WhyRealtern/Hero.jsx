import hero from "@/assets/WhyRealtern/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex h-max w-full flex-col">
      <div className="relative h-[65vh] w-full lg:h-full">
        <Image
          src={hero}
          alt="image"
          className="relative h-[65vh] w-full object-cover lg:h-[92vh]"
        />
        <div className="absolute left-0 top-0 h-[3.25rem] w-[6.4rem] rounded-br-[2px] bg-white sm:w-[12.5rem]">
          {" "}
        </div>
        <div className="absolute -bottom-[1px] left-0 h-[3.8rem] w-[14rem] rounded-tr-[2px] bg-white sm:h-[5.75rem] sm:w-[28.5rem] md:w-[35rem] lg:w-[42rem] xl:h-[6.25rem] xl:w-[50.375rem]">
          {" "}
        </div>
        <div className="absolute -bottom-[0.5px] left-[14rem] h-12 w-12 rounded-full bg-white sm:left-[28.5rem] sm:h-16 sm:w-16 md:left-[35rem] lg:left-[42rem] xl:left-[50.375rem] xl:h-20 xl:w-20">
          {" "}
        </div>
      </div>
      <span className="mt-5 w-full pl-2 text-lg !leading-loose tracking-[-0.01em] text-[#2C2C2C] sm:mt-5 sm:w-[555px] sm:pl-4 sm:text-xl md:ml-6 md:w-[40rem] md:text-2xl lg:ml-20 lg:mt-8 xl:mt-0">
        In today's competitive job market, simply having a portfolio of basic
        projects is no longer enough to stand out or land that dream internship
        opportunity.
      </span>
    </div>
  );
};

export default Hero;
