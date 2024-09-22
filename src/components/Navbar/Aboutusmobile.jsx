import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import { motion } from 'framer-motion'
import Link from "next/link";
import React from 'react'

const Aboutusmobile = ({ openDropdown }) => {
    return (
        <motion.div initial={{ height: 0 }} animate={openDropdown ? { height: 'auto' } : ''} className={`  [will-change:auto]  overflow-hidden text-[#232322]`} >
            <div className={` pt-[.25rem] px-[1.5rem] pb-[1.25rem]`}>

                <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
                    <h2 className={`text-lg ${MediumFont.className} m-0 p-0 leading-[1.2]  font-[570] tracking-[.02em] text-[#51A6F4]`}>
                        Our Mission
                    </h2>
                </Link>
                <p className=" text-[18px] m-0 p-0 mt-[.5rem] tracking-[.02em] leading-[1.5]">
                    We're providing equitable access to economic opportunity, for everyone
                </p>
                <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
                    <h2 className={`text-lg leading-[1.2] font-[570] tracking-[.02em] mt-[1rem] ${MediumFont.className}  text-[#51A6F4]`}>
                        Diversity, Equity and Inclusion
                    </h2>
                </Link>
                <p className=" text-[18px] m-0 p-0 mt-[.5rem] tracking-[.02em] leading-[1.5]">
                    It’s time for our workforces to reflect our society. Let’s make it happen
                </p>


                <div className="mt-[1.5rem] ">
                    <ul>
                        <li className="m-0 p-0">
                            <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Careers</a>
                            <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                                Together we’ll change what’s possible in education and work, through the power of professional apprenticeships
                            </p>
                        </li>
                        <li className="m-0 p-0 mt-[1rem]">
                            <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>News & Blog</a>
                            <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                                The latest news and blog from Multiverse
                            </p>
                        </li>
                        <li className="m-0 p-0 mt-[1rem]">
                            <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Learning Science Research Hub</a>
                            <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                                Find out more about our Learning Model - MAGE, and exciting research happening across our Learning Science Team
                            </p>
                        </li>

                    </ul>
                </div>
                <div className="mt-[1.5rem]"></div>

                {/* <h2 className={`text-lg ${MediumFont.className} mt-4 text-[#4a5ff7]`}>
          Book a consultation
        </h2>
        <h2 className={`text-lg ${MediumFont.className} mt-5 text-[#51A6F4]`}>
          Book a consultation
        </h2>
        <p className="pt-2 text-[19px] leading-[1.8rem]">
          Future-proof your business and equip your employees with the most
          in-demand skills
        </p> */}
            </div>
        </motion.div>
    )
}

export default Aboutusmobile
