"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const MobileBanner = () => {
  const textRef = useRef < HTMLElement > null;
  const { scrollYProgress } = useScroll({ target: textRef });
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const tweenConfig = {
    type: "tween",
    duration: 0.5,
  };

  const x1Tween = useSpring(x1, tweenConfig);
  const x2Tween = useSpring(x2, tweenConfig);

  return (
    <div className="relative my-6 flex h-max w-full flex-col items-center justify-center gap-10 overflow-hidden rounded-lg bg-[#6F71EE] py-10 sm:rounded-[1.25rem]">
      <motion.div style={{ x: x1Tween }} className="flex h-56 gap-x-8">
        <div className="h-full w-96 rounded-r-[1.25rem] bg-[#E6E8FE]/40"></div>
        <div className="h-full w-96 rounded-[0.625rem] bg-white p-5 text-base leading-[1.65rem] text-[#2C2C2C] sm:w-[450px] sm:text-lg md:w-[500px] md:leading-[2rem]">
          The competition for tech jobs is insane, and having just basic
          capstone projects on your resume isn't enough anymore. With companies
          even giving priority to students with previous work experience,
          Realternships are a gamechanger for students to get real work
          experience
        </div>
        <div className="flex h-full w-72 items-center justify-end rounded-l-[1.25rem] bg-[#E6E8FE]/40">
          <div className="h-[1.5rem] w-[220px] rounded-l-[0.938rem] bg-[#6F71EE]"></div>
        </div>
      </motion.div>
      <motion.div style={{ x: x2Tween }} className="flex h-48 gap-x-8 sm:h-56">
        <div className="hidden h-full w-96 rounded-r-[1.25rem] bg-[#E6E8FE]/40 md:block"></div>
        <div className="flex w-60 items-start justify-center rounded-[0.625rem] bg-white p-5 text-base leading-[2.25rem] text-[#2C2C2C] sm:flex-none sm:text-lg">
          Realternships are a must for anyone serious about pursuing a career
          with top tech companies
        </div>
        <div className="w-60 rounded-[0.625rem] bg-white p-5 text-base text-[#2C2C2C] sm:text-lg sm:leading-[1.75rem]">
          If you're aiming for{" "}
          <span className="font-semibold tracking-wide text-[#4A5FF6]">
            FAANG
          </span>
          , Realternships are the way to stand out, gain experience & become a
          strong candidate for FAANG roles
        </div>
        <div className="flex h-full w-72 items-center justify-end rounded-l-[1.25rem] bg-[#E6E8FE]/40">
          <div className="h-[1.5rem] w-[220px] rounded-l-[0.938rem] bg-[#6F71EE]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileBanner;
