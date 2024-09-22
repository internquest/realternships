"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import whiteLogo from "@/assets/global/logo_white.svg";
import blueLogo from '@/assets/global/logo_blue.svg'
import WhyRealternMobileMenu from "./WhyRealternMobileMenu";
import { motion } from 'framer-motion'
import { useWindowSize } from "@uidotdev/usehooks";
import Individualmobile from './Individualmobile'
import Aboutusmobile from './Aboutusmobile'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("why-realtern");
  const [clipstate, setClipstate] = useState('')
  const mobnavdiv = useRef(null)

  const { width: windowWidth } = useWindowSize()


  useLayoutEffect(() => {
    const navdivdim = mobnavdiv.current.getBoundingClientRect()

    setClipstate(`xywh(12px 56px ${navdivdim.width}px ${navdivdim.height}px round 2rem)`)

  }, [windowWidth])


  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };


  const clipanim = {

    initial: {
      // clipPath: `xywh(0px 56px ${navWidth}px ${navheight}px round 2rem)`,
      opacity: 0,
      // transitionDuration: '.4s'

    },
    animate: {
      clipPath: 'xywh(0px 0px 100% 100% )',
      opacity: 1,
      // transition: {
      //   duration: .4
      // }
    },

  }

  // console.log(navWidth);
  // console.log(navheight);
  return (
    <header className="  sticky top-0 mt-0 mx-auto mb-[calc((56px+1.25rem+1px)*-1)] min-w-[320px] max-w-[1440px] pt-[1.25rem] px-[.75rem] sm:pt-[1.5rem] sm:px-[2.25rem] pb-0    z-[100]">
      <div className=" flex ">
        <div ref={mobnavdiv} className={`relative ${isOpen ? 'bg-[#3636354d]' : 'bg-[#2323224d]'}  drop-shadow-[rgba(0,0,0,0)_0px_4px_54px] backdrop-blur-[10px] py-[.5rem] pl-[1rem] pr-[.5rem] rounded-[2rem]   flex items-center justify-between    w-full`}>
          <div className="flex items-center max-w-[8rem] w-full justify-between">
            <Link href="/">
              {
                isOpen ?
                  <Image
                    src={blueLogo}
                    alt="logo"
                    width={1200}
                    height={1200}
                    className=" object-contain"
                  />
                  :
                  <Image
                    src={whiteLogo}
                    alt="logo"
                    width={1200}
                    height={1200}
                    className=" object-contain "
                  />
              }

            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-full ${isOpen ? 'bg-[#2b326d]' : 'bg-white'}  group rounded-[160px] transition-all duration-[.2s] inline-flex justify-center items-center  h-[40px] w-[40px] text-[#4A5FF6] focus:outline-none`}
          >
            <div className="h-[20px] w-[20px] flex">
              <svg className={`${isOpen ? 'text-white' : ' text-[#4a5ff7] group-hover:text-[#2b326d]'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.5 15 15 .002M2.5 10l15 .002M2.5 5l15 .002"></path></svg>
            </div>
          </button>

        </div>
        <motion.div style={{ transitionDuration: '.2s', clipPath: clipstate }} initial='initial' animate={`${isOpen ? 'animate' : ''}`} variants={clipanim} className="w-full absolute h-[calc(100vh)]    top-[0px] left-[0px] pt-[7rem] px-[1.5rem] sm:px-[3rem]   pb-[calc(100lvh-100svh+5rem)] bg-white overflow-auto z-[-1] ">
          {/* <motion.div  className={`   overflow-hidden bg-white pt-24 w-full h-min rounded-[4rem] `}> */}


          <div className=" flex  flex-col gap-y-4 overflow-auto    ">
            <div
              className={`flex flex-col justify-between rounded-[35px] bg-[#E6E8FE]  text-xl`}
            >
              <div
                className="flex flex-row py-[1.25rem] px-[1.5rem] items-center justify-between"
                onClick={() => toggleDropdown("why-realtern")}
              >
                <Link href={"/why-realtern"}>Employers</Link>
                {openDropdown === "why-realtern" ? (
                  <FiChevronUp color="#505050CC" />
                ) : (
                  <FiChevronDown color="#505050CC" />
                )}
              </div>
              {/* {openDropdown === "why-realtern" && ( */}
              <>
                <WhyRealternMobileMenu openDropdown={openDropdown === "why-realtern"} />
              </>
              {/* )} */}
            </div>
            <div className=" flex  flex-col gap-y-4 overflow-auto ">
              <div
                className={`flex flex-col justify-between rounded-[35px] bg-[#E6E8FE]  text-xl`}
              >
                <div
                  className="flex flex-row py-[1.25rem] px-[1.5rem] items-center justify-between"
                  onClick={() => toggleDropdown("community")}
                >
                  <Link href={"/community"}>Individuals</Link>
                  {openDropdown === "community" ? (
                    <FiChevronUp color="#505050CC" />
                  ) : (
                    <FiChevronDown color="#505050CC" />
                  )}
                </div>
                {/* {openDropdown === "community" && ( */}
                <>

                  <Individualmobile openDropdown={openDropdown === "community"} />
                </>
                {/* )} */}
              </div>
            </div>
            <div className=" flex  flex-col gap-y-4 overflow-auto    ">
              <div
                className={`flex flex-col justify-between rounded-[35px] bg-[#E6E8FE]  text-xl`}
              >
                <div
                  className="flex flex-row py-[1.25rem] px-[1.5rem] items-center justify-between"
                  onClick={() => toggleDropdown("startup-glimpse")}
                >
                  <Link href={"/startup-glimpse"}>About us</Link>
                  {openDropdown === "startup-glimpse" ? (
                    <FiChevronUp color="#505050CC" />
                  ) : (
                    <FiChevronDown color="#505050CC" />
                  )}
                </div>
                {/* {openDropdown === "startup-glimpse" && ( */}
                <>
                  <Aboutusmobile openDropdown={openDropdown === "startup-glimpse"} />
                </>
                {/* )} */}
              </div>
            </div>
          </div>

        </motion.div>
        {/* </motion.div> */}
      </div>
    </header >
  );
}

export default MobileMenu;
