"use client";
import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import { useState } from "react";

const items = [
  {
    title: "Embrace Challenges",
    content:
      "See problems as opportunities for innovation and growth. Your ability to tackle difficult issues head- on is what will set you apart",
  },
  {
    title: "Pursue Excellence",
    content:
      "See problems as opportunities for innovation and growth. Your ability to tackle difficult issues head- on is what will set you apart",
  },
  {
    title: "Empathy in Action",
    content:
      "See problems as opportunities for innovation and growth. Your ability to tackle difficult issues head- on is what will set you apart",
  },
];

const ProblemSolvingAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="mx-auto max-w-[850px] rounded-[30px] bg-[#3B3B3A]/80 px-4 md:px-9 md:py-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`py-6 ${index < items.length - 1 ? "border-b border-white/30" : ""}`}
        >
          <button
            onClick={() => handleClick(index)}
            className={`flex w-full justify-between px-4 py-2 text-left text-[22px] text-[#DDFC9D] md:text-[28px] ${SemiBoldFont.className}`}
          >
            {item.title}
            <span className="ml-2 rounded-full bg-[#4A5FF7] p-1 md:p-3">
              {openIndex === index ? (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 15l-7-7-7 7"></path>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div
              className={`px-4 py-2 text-[20px] leading-[2.4rem] text-white/80 ${MediumFont.className} max-w-[700px]`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProblemSolvingAccordion;
