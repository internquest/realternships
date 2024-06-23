"use client";
import React, { useEffect, useState } from "react";
import CommonQuestionsMenu from "./CommonQuestionsMenu";
import StartupGlimpseMenu from "./Community";
import WhyRealternMenu from "./WhyRealternMenu";
import { MediumFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import blueLogo from "@/assets/global/logo_blue.svg";
import whiteLogo from "@/assets/global/logo_white.svg";

function LgNavbar() {
  const [hovered, setHovered] = useState(false);
  const [displayData, setDisplayData] = useState(<CommonQuestionsMenu />);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const navdataElement = document.getElementById("navdata");
    if (navdataElement) {
      setHeight(navdataElement.offsetHeight);
    }
  }, [displayData]);

  return (
    <>
      <div className={hovered ? "bg-blur" : ""}></div>
      <div className="flex items-center justify-center">
        <div className={`w-web fixed top-0 z-50 max-w-[1300px] pt-6 lg:pt-12`}>
          <div
            className="navdata-top"
            onMouseLeave={() => setHovered(false)}
            style={{
              top: hovered ? "20px" : "60px",
              height: hovered ? "100px" : "30px",
              display: hovered ? "block" : "none",
            }}
          ></div>
          <div
            className="navdata-bottom"
            style={{
              display: hovered ? "block" : "none",
              height: hovered ? `${height}px` : "30px",
            }}
          ></div>
          <div
            id="navdata"
            onMouseLeave={() => setHovered(false)}
            style={{
              display: hovered ? "block" : "none",
            }}
          >
            {displayData}
          </div>
          <div
            className={`absolute inset-x-0 mx-auto hidden w-[94%] items-center justify-between rounded-full py-3 pl-3 pr-3 text-white sm:pl-8 md:flex ${MediumFont.className} ${hovered ? "bg-[#F7F6F2]" : "h-max bg-black/30 bg-opacity-25 backdrop-blur-lg"} `}
          >
            <div className="flex items-center justify-center">
              <Link href="/">
                {hovered ? (
                  <Image
                    src={blueLogo}
                    alt="photo"
                    width={1200}
                    height={1200}
                    className="h-6 w-28 object-contain sm:h-8 sm:w-40"
                  />
                ) : (
                  <Image
                    src={whiteLogo}
                    alt="photo"
                    width={1200}
                    height={1200}
                    className="h-6 w-28 object-contain sm:h-8 sm:w-40"
                  />
                )}
              </Link>
            </div>
            <div className="mx-auto hidden gap-x-4 text-[19px] md:flex">
              <Link
                href="/why-realtern"
                className={`menu-item hover:text-white ${hovered ? "text-[#4A5FF7]" : ""}`}
                onMouseEnter={() => {
                  setHovered(true);
                  setDisplayData(<CommonQuestionsMenu />);
                }}
              >
                Why Realtern
              </Link>
              <Link
                href="/community"
                className={`menu-item hover:text-white ${hovered ? "text-[#4A5FF7]" : ""}`}
                onMouseEnter={() => {
                  setHovered(true);
                  setDisplayData(<StartupGlimpseMenu />);
                }}
              >
                Community
              </Link>
              <Link
                href="/common-questions"
                className={`menu-item hover:text-white ${hovered ? "text-[#4A5FF7]" : ""}`}
                onMouseEnter={() => {
                  setHovered(true);
                  setDisplayData(<WhyRealternMenu />);
                }}
              >
                Common Questions
              </Link>
            </div>
            <div className="hidden lg:block">
              <button className="group">
                <div
                  className={`flex w-max cursor-pointer items-center justify-center gap-x-4 rounded-full bg-white p-2 sm:gap-x-6`}
                >
                  <span
                    className={`pl-2 text-base font-medium text-[#4A5FF7] group-hover:text-[#303474] sm:pl-6 sm:text-xl`}
                  >
                    Contact Sales
                  </span>{" "}
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#4A5FF7] text-xl text-white group-hover:bg-[#303474] sm:h-10 sm:w-10`}
                  >
                    <FaArrowRightLong />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LgNavbar;
