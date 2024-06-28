import Image from "next/image";
import poster from "@/assets/WhyRealtern/poster.png";

const Poster = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center py-20">
      <Image
        src={poster}
        alt="photo"
        className="md:w-ful h-[477px] w-full object-cover sm:h-[620px] sm:object-contain md:h-[585px]"
      />
      <div className="absolute m-4 flex w-auto flex-col items-start gap-y-4 rounded-[20px] bg-[#FFFFFF] p-4 text-lg text-[#2C2C2C] sm:m-10 sm:gap-y-7 sm:p-6 md:m-0 md:w-[735px] md:gap-y-12 md:p-12 md:text-xl">
        <p className="leading-[2.3rem] sm:leading-[2.5rem]">
          Employers are looking for candidates who can demonstrate their ability
          to tackle complex problems, think critically, and deliver innovative
          solutions
        </p>
        <p className="leading-[2.3rem] sm:leading-[2.5rem]">
          To differentiate yourself, you need to present something that isn't
          commonly seen on every other resume.
        </p>
        <p className="leading-[2.3rem] sm:leading-[2.5rem]">
          To stand out, you need to go beyond the basics and showcase meaningful
          contributions that highlight your unique abilities and experiences.
        </p>
      </div>
    </div>
  );
};

export default Poster;
