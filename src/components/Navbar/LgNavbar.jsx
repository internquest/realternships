"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CommonQuestionsMenu from "./CommonQuestionsMenu";
import StartupGlimpseMenu from "./Community";
import WhyRealternMenu from "./WhyRealternMenu";
// import { MediumFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import blueLogo from '@/assets/global/logo_blue.svg'
import whiteLogo from "@/assets/global/logo_white.svg";
import { delay, motion } from 'framer-motion'
import { useWindowSize } from "@uidotdev/usehooks";
import { MediumFont } from "../../utils/fonts";

function LgNavbar() {
  const [hovered, setHovered] = useState(false);
  const [hoveredlinknum, setHoveredLinknum] = useState(0)
  const [hoverprevlinknum, sethoverprevlinknum] = useState(0)
  const [initialhover, setIntitialhover] = useState(false)
  const [displayData, setDisplayData] = useState(null);
  const [height, setHeight] = useState(0);
  const [clipstate, setClipstate] = useState('')
  const navdiv = useRef(null)

  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    setDisplayData(<CommonQuestionsMenu />)
  }, [])

  useLayoutEffect(() => {
    const navdivdim = navdiv.current.getBoundingClientRect()

    setClipstate(`xywh(24px 24px ${navdivdim.width}px ${navdivdim.height}px round 2.5rem)`)
    // console.log(navdiv.nextSibling);

    // console.log(
    //   navdivdim.width,
    //   navdivdim.height
    // )
  }, [windowWidth])

  useEffect(() => {
    console.log('shhova');
    const navdataElement = document.getElementById("navdata");
    console.log(navdataElement.getBoundingClientRect());

    if (navdataElement) {
      setHeight(navdataElement.offsetHeight);
    }
  }, [hoveredlinknum]);
  console.log(height);


  const clipanim = {

    initial: {
      // clipPath: clipstate,
      opacity: 0,
      // transitionDuration: '.4s'

    },
    animate: {
      clipPath: 'xywh(0px 0px 100% 100% round 4rem)',
      opacity: 1,
      // transition: {
      //   duration: .4
      // }
    },

  }

  const bg = {
    initial: {
      opacity: 0,
      display: "none"
    },
    animate: {
      opacity: 1,
      display: 'block'
    }
  }
  // console.log(initialhover);
  // console.log(hoverprevlinknum);


  const linkhover = {
    initial: {
      transform: 'translate3d(106px,0px,0px) scale(1.01234,1)',
    },
    animate: {
      transform: 'translate3d(0px,0px,0px)',
      transition: {
        duration: '.4',

      }
    }
  }
  const left2secondlinkhover = {
    initial: {
      transform: 'translate3d(-106px,0px,0px) scale(.987423,1)'
    },
    animate: {
      transform: 'translate3d(0px,0px,0px)',
      transition: {
        duration: '.4',


      }
    }
  }


  const second2thirdlinkhover = {
    initial: {
      transform: 'translate3d(-100px,0px,0px) scale(1.1587423,1)'
    },
    animate: {
      transform: 'translate3d(0px,0px,0px)',
      transition: {
        duration: '.4',


      }
    }
  }


  const third2secondlinkhover = {
    initial: {
      transform: 'translate3d(100px,0px,0px) scale(.9287423,1)'
    },
    animate: {
      transform: 'translate3d(0px,0px,0px)',
      transition: {
        duration: '.4',


      }
    }
  }

  const edge2thirdlinkhover = {
    initial: {
      transform: 'translate3d(-200px,0px,0px) scale(1.12345,1)'
    },
    animate: {
      transform: 'translate3d(0px,0px,0px)',
      transition: {
        duration: '.4',


      }
    }
  }

  const edge2firstlinkhover = {
    initial: {
      transform: 'translate3d(200px,0px,0px) scale(.92345,1)'
    },
    animate: {
      transform: 'translate3d(0px,0px,0px)',
      transition: {
        duration: '.4',


      }
    }
  }
  console.log(hovered);
  return (
    <>
      {/* <div className={hovered ? "bg-blur" : ""}></div> */}
      <header className=" btl:block btl:sticky top-0 mt-0 mx-auto mb-[calc((85px+2.5rem+1px)*-1)] min-w-[320px] max-w-[1440px] pt-[2.5rem] px-[2rem] z-[100] items-center justify-center">
        <div className={`m-0 p-0 border-0 `}>
          {/* <div
            className="navdata-top"
            onMouseLeave={() => setHovered(false)}
            style={{
              top: hovered ? "20px" : "60px",
              height: hovered ? "100px" : "30px",
              display: hovered ? "block" : "none",
            }}
          ></div> */}
          <div onMouseLeave={() => {
            setHovered(false)
            sethoverprevlinknum(0)
            setHoveredLinknum(0)
            setIntitialhover(false)
          }} className="relative flex justify-between items-center z-[110] m-0 p-0  ">
            <div ref={navdiv}
              className={`relative  hidden w-full items-center  rounded-[2.5rem] py-3 pl-8 pr-3 text-white  md:flex ${MediumFont.className} ${hovered ? "bg-[#f8f7f3]" : "h-max bg-[#2323224d] bg-opacity-25 backdrop-blur-[20px]"} `}
            >

              <Link href="/" className=" text-white max-w-[9rem] w-full block">
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

              <nav className=" text-white ml-[6rem] mr-auto block    text-[18px] tracking-[.02em] ">
                <div className="grid grid-cols-[repeat(3,max-content)] grid-rows-[1fr]">
                  <Link
                    href="/why-realtern" style={{ transition: 'color .45s' }}
                    className={`menu-item col-[1] row-[1] z-[1]  relative ${hoveredlinknum === 1 ? 'text-white' : hovered ? 'text-black' : 'text-white'}`}
                    onMouseEnter={() => {
                      setHovered(true);
                      setHoveredLinknum(1)
                      sethoverprevlinknum(hoveredlinknum)
                      setIntitialhover(true)
                      setDisplayData(<CommonQuestionsMenu />);
                    }}
                  >
                    Employers
                  </Link>
                  {

                    (hoveredlinknum === 1) &&
                    <motion.div initial={hoverprevlinknum ? 'initial' : ''} animate={hoverprevlinknum ? 'animate' : ''} variants={hoverprevlinknum === 2 ? linkhover : edge2firstlinkhover} className={`bg-[#4a5ff7] ${initialhover && 'origin-center'} col-[1] opacity-[1] rounded-[160px] w-full h-full [grid-row:1]   `}></motion.div>
                  }
                  <Link
                    href="/community" style={{ transition: 'color .45s' }}
                    className={`menu-item z-[1] relative transition-colors delay-500  col-[2] ${hoveredlinknum === 2 ? 'text-white' : hovered ? 'text-black' : 'text-white'} row-[1] `}
                    onMouseEnter={() => {
                      setHovered(true);
                      setHoveredLinknum(2)
                      sethoverprevlinknum(hoveredlinknum)
                      setDisplayData(<StartupGlimpseMenu />);
                      setIntitialhover(true)
                    }}
                  >
                    Individuals
                  </Link>
                  {

                    hoveredlinknum === 2 &&
                    <motion.div initial={hoverprevlinknum ? 'initial' : ''} animate={hoverprevlinknum ? 'animate' : ''} variants={hoverprevlinknum === 1 ? left2secondlinkhover : third2secondlinkhover} className={`bg-[#4a5ff7]  col-[2] opacity-[1] ${initialhover && 'origin-center'} rounded-[160px] w-full h-full [grid-row:1]   `}></motion.div>
                  }
                  <Link
                    href="/common-questions" style={{ transition: 'color .45s' }}
                    className={`menu-item z-[1] relative transition-colors delay-500  col-[3] row-[1] ${hoveredlinknum === 3 ? 'text-white' :
                      hovered ? 'text-black' : 'text-white'}`}
                    onMouseEnter={() => {
                      setHovered(true);
                      setHoveredLinknum(3)
                      sethoverprevlinknum(hoveredlinknum)
                      setDisplayData(<WhyRealternMenu />);
                      setIntitialhover(true)
                    }}
                  >
                    About us
                  </Link>
                  {

                    hoveredlinknum === 3 &&
                    <motion.div initial={hoverprevlinknum ? 'initial' : ''} animate={hoverprevlinknum ? 'animate' : ''} variants={hoverprevlinknum === 2 ? second2thirdlinkhover : edge2thirdlinkhover} className={`bg-[#4a5ff7]  col-[3] ${initialhover && 'origin-center'} opacity-[1] rounded-[160px] w-full h-full [grid-row:1]   `}></motion.div>
                  }
                </div>
              </nav>
              <div className="hidden lg:block">
                <button className="group">
                  <div
                    className={`flex w-max cursor-pointer items-center justify-center gap-x-4 rounded-full group-hover:bg-white ${hovered ? "bg-[#4A5FF7]" : "bg-white"} p-2 sm:gap-x-6`}
                  >
                    <span
                      className={`pl-2 text-base font-medium ${hovered ? "text-white" : "text-[#4A5FF7]"} group-hover:text-[#303474] sm:pl-6 sm:text-xl`}
                    >
                      Contact Sales
                    </span>{" "}
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full group-hover:text-white ${hovered ? "bg-white" : "bg-[#4A5FF7]"} text-xl ${hovered ? "text-[#4A5FF7]" : "text-white"} group-hover:bg-[#303474] sm:h-10 sm:w-10`}
                    >
                      <FaArrowRightLong />
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[calc(100%+48px)] h-auto  absolute border-0 -top-[24px] left-[-24px]   z-[-1] ">
              <motion.div style={{ transitionDuration: '.6s', clipPath: clipstate }} initial='initial' animate={`${hovered ? 'animate' : ''}`} variants={clipanim} className={`   overflow-hidden  bg-white pt-24 w-full rounded-[4rem] `}>



                <div

                  style={{

                    height: hovered ? `${height}px` : "30px",
                    transitionDuration: '.6s'
                  }}
                >
                  <div
                    id="navdata"

                    style={{
                      opacity: hovered ? 1 : 0,

                    }}

                  >
                    {displayData}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div initial='initial' animate={hovered ? 'animate' : ''} variants={bg} className="fixed top-0 left-0 w-full h-full z-[99] bg-[color-mix(in_srgb,#6f7071_80%,_transparent)] bg-blend-multiply [backdrop-filter:blur(5px);] pointer-events-none"></motion.div>
      </header>
    </>
  );
}

export default LgNavbar;
