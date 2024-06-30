"use client";
import { BoldFont } from "@/utils/fonts";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollY } from "@/utils/scroll";

const CapstoneProjects = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const scrollY = useScrollY();

  useEffect(() => {
    if (inView) {
      controls1.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
      controls2.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls1, controls2, inView]);

  useEffect(() => {
    if (inView) {
      controls1.start({
        x: scrollY / 5,
        transition: { duration: 0.5, ease: "easeOut" },
      });
      controls2.start({
        x: -scrollY / 5,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls1, controls2, inView, scrollY]);

  return (
    <div className="h-screen overflow-hidden pt-8" ref={ref}>
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={controls1}
        className={`${BoldFont.className} text-[#DAF99B]/75 text-[42px] md:text-[64px] lg:text-[70px] flex items-start`}
      >
        Say Goodbye to
      </motion.h1>
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={controls2}
        className={`${BoldFont.className} text-[#495EF4]/50 text-[42px] md:text-[64px] lg:text-[70px] flex items-end justify-end`}
      >
        Capstone Projects
      </motion.h1>
    </div>
  );
};

export default CapstoneProjects;
