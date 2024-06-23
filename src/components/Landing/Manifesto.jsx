import matrix from "@/assets/Landing/matrix.svg";
import Image from "next/image";
import { BoldFont, MediumFont } from "@/utils/fonts";

const Manifesto = () => {
  return (
    <>
      <div className="w-full -space-y-12 sm:-space-y-20 md:-space-y-24 lg:-space-y-64">
        <div className="w-full">
          <Image
            src={matrix}
            alt="logo"
            width={900}
            height={900}
            className="w-full object-contain"
          />
        </div>
        <div className="w-full">
          <div className="relative flex w-full flex-col items-center justify-center gap-y-12 rounded-[22px] bg-[#4A5FF6] px-6 py-20 sm:px-16 lg:px-32 xl:px-48 2xl:px-96">
            <span
              className="text-[42px] font-semibold text-white/95"
              style={BoldFont.style}
            >
              Our manifesto
            </span>
            <span
              className={`w-auto text-left text-xl leading-normal text-white sm:text-2xl sm:leading-[45px] md:w-[650px] lg:w-[896px] ${MediumFont.className}`}
            >
              We exist to change what’s next for the aspiring coders & companies
              of the world.
            </span>
            <div
              className={`flex w-auto flex-col items-start justify-center gap-y-6 text-xl leading-normal text-white sm:gap-y-10 sm:text-2xl sm:leading-[45px] md:w-[650px] lg:w-[896px] ${MediumFont.className}`}
            >
              <p>
                Coding is the language of creation, enabling us to build the
                digital world around us. From the websites we browse to the apps
                we use daily, coding is the driving force behind the technology
                that shapes our lives, that transforms ideas into reality,
                allowing us to innovate, communicate, and connect in ways never
                before possible.
              </p>
              <p>
                But coding needs re-coding as the landscape of work is evolving
                at an unprecedented pace, driven by technological advancements.
                Employers are seeking individuals who can adapt, innovate, find
                new ways to solve problems, think creatively, challenge the
                status quo, drive innovation forward and contribute in
                meaningful ways.
              </p>
              <p>
                As companies increasingly prioritize candidates with proven
                real-time work experience, we're here to change the game. We are
                reimagining new ways for students to build real-world tech
                skills, gain real-time work experience, stand out and get one
                step closer to dream opportunities in tech.
              </p>
              <span>Let’s change what’s next.</span>
              <div
                className={`w-full rounded-lg bg-[#DDFC9D] px-6 py-6 text-lg leading-snug tracking-[0.01em] text-[#2C2C2CCC]/80 sm:px-16 sm:py-10 sm:text-2xl md:leading-[3rem] lg:py-12 lg:text-[30px] lg:leading-[3.4375rem] ${MediumFont.className}`}
              >
                Creating top-notch talent with proven work experience for the
                ambitious companies at the forefront of innovation to unlock
                better futures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manifesto;
