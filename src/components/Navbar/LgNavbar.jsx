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
      <div className="flex justify-center items-center">
        <div className={`fixed top-0 z-50 pt-6 lg:pt-12 w-web max-w-[1300px]`}>
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
            className={`w-[94%] hidden md:flex py-3 pl-3 sm:pl-8 pr-3 text-white items-center justify-between mx-auto rounded-full absolute inset-x-0 ${MediumFont.className} ${hovered ? "bg-[#F7F6F2]" : "bg-black/30 backdrop-blur-lg bg-opacity-25 h-max"} `}
          >
            <div className="flex items-center justify-center">
              <Link href="/">
                {hovered ? (
                  <Image
                    src={blueLogo}
                    alt="photo"
                    width={1200}
                    height={1200}
                    className="w-28 sm:w-40 h-6 sm:h-8 object-contain"
                  />
                ) : (
                  <Image
                    src={whiteLogo}
                    alt="photo"
                    width={1200}
                    height={1200}
                    className="w-28 sm:w-40 h-6 sm:h-8 object-contain"
                  />
                )}
              </Link>
            </div>
            <div className="hidden md:flex gap-x-4 mx-auto text-[19px]">
              <Link
                href="/why"
                className={`menu-item hover:text-white ${hovered ? "text-[#4A5FF7]" : ""}`}
                onMouseEnter={() => {
                  setHovered(true);
                  setDisplayData(<CommonQuestionsMenu />);
                }}
              >
                Why Realtern
              </Link>
              <Link
                href="/Community"
                className={`menu-item hover:text-white ${hovered ? "text-[#4A5FF7]" : ""}`}
                onMouseEnter={() => {
                  setHovered(true);
                  setDisplayData(<StartupGlimpseMenu />);
                }}
              >
                Community
              </Link>
              <Link
                href="/why"
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
              <button className=" group ">
                <div
                  className={`w-max rounded-full flex items-center justify-center gap-x-4 sm:gap-x-6 cursor-pointer p-2 bg-white`}
                >
                  <span
                    className={`text-base sm:text-xl font-medium pl-2 sm:pl-6 text-[#4A5FF7] group-hover:text-[#303474]`}
                  >
                    Contact Sales
                  </span>{" "}
                  <div
                    className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center text-white bg-[#4A5FF7] group-hover:bg-[#303474] text-xl`}
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
