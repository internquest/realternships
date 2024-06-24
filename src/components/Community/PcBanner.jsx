"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MediumFont } from "@/utils/fonts";

const PcBanner = () => {
  const textRef = useRef < HTMLElement > null;
  const { scrollYProgress } = useScroll({ target: textRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, 600]);
  const y2 = useTransform(scrollYProgress, [0, 1], [450, 50]);

  const tweenConfig = {
    type: "tween",
    duration: 0.8,
  };

  const y1Tween = useSpring(y1, tweenConfig);
  const y2Tween = useSpring(y2, tweenConfig);

  return (
    <div className="flex h-[650px] w-full items-center justify-center overflow-hidden rounded-[2.25rem] bg-[#6F71EE] shadow-lg shadow-slate-400/50 xl:rounded-[3.125rem]">
      <div className="flex h-full w-max items-end justify-center gap-x-4">
        <motion.div
          style={{ y: y1Tween }}
          className="flex w-64 flex-col gap-y-5 sm:w-[24rem] xl:w-[27.125rem]"
        >
          <div className="flex h-[20rem] items-start justify-center rounded-b-[1.25rem] bg-[#E6E8FE]/40">
            <div className="h-[15rem] w-8 rounded-b-full bg-[#6F71EE]"></div>
          </div>
          <div className="rounded-[0.625rem] bg-white p-6 text-base text-[#2C2C2C] sm:text-[1.188rem] sm:leading-loose xl:p-8">
            The competition for tech jobs is insane, and having just basic
            capstone projects on your resume isn't enough anymore. With
            companies even giving priority to students with previous work
            experience, Realternships are a gamechanger for students to get real
            work experience
          </div>
          <div className="flex h-[34rem] w-full items-end justify-center rounded-t-[1.25rem] bg-[#E6E8FE]/40">
            <div className="h-[450px] w-[1.875rem] rounded-t-[0.938rem] bg-[#6F71EE]"></div>
          </div>
        </motion.div>
        <motion.div
          style={{ y: y2Tween }}
          className="flex w-[12rem] flex-col items-center justify-end gap-y-4 sm:w-[15rem] lg:w-[20.813rem]"
        >
          <div className="h-[8rem] w-full rounded-b-[1.25rem] bg-[#E6E8FE]/40"></div>
          <div className="rounded-[0.625rem] bg-white p-4 text-base leading-[1.75rem] text-[#2C2C2C] sm:text-xl sm:leading-[2rem] md:leading-[2.5rem]">
            Realternships are a must for anyone serious about pursuing a career
            with top tech companies
          </div>
          <div
            className={`relative rounded-[0.313rem] bg-white px-5 py-5 text-xl leading-[1.75rem] text-[#2C2C2C]/80 sm:py-8 sm:text-2xl sm:leading-[2.75rem] ${MediumFont.className}`}
          >
            <span className="text-[#4A5FF6]/90">Realternships</span> are exactly
            what students need in today's job market.
            <div className="absolute right-5 top-0 h-5 w-5 bg-[#6F71EE]"></div>
          </div>
          <div className="relative rounded-[0.625rem] bg-white px-5 py-6 text-base leading-[1.75rem] text-[#2C2C2C] sm:text-xl sm:leading-[2.25rem]">
            If you're aiming for{" "}
            <span className="font-semibold tracking-wide text-[#4A5FF6]">
              FAANG
            </span>
            , Realternships are the way to stand out, gain experience & become a
            strong candidate for FAANG roles
            <div className="absolute -bottom-[0.5px] -right-[0.5px] h-4 w-[4.688rem] bg-[#6F71EE]"></div>
          </div>{" "}
          <div className="h-[8rem] w-full rounded-t-[1.25rem] bg-[#E6E8FE]/40"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default PcBanner;
