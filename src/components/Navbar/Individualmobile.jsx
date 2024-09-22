import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import { motion } from 'framer-motion'
import Link from "next/link";
import React from 'react'

const Individualmobile = ({ openDropdown }) => {
    return (
        <motion.div initial={{ height: 0 }} animate={openDropdown ? { height: 'auto' } : ''} className={`  [will-change:auto]  overflow-hidden text-[#232322]`} >
            <div className={` pt-[.25rem] px-[1.5rem] pb-[1.25rem]`}>
                <h1
                    className={`${SemiBoldFont.className}  text-[1.75rem] sm:text-[2rem] leading-[1.2] font-[670] tracking-[-.02em] relative  mb-[1rem]`}
                >
                    We have one thing on our minds. Your success.
                </h1>
                <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
                    <h2 className={`text-lg ${MediumFont.className} m-0 p-0 leading-[1.2]  font-[570] tracking-[.02em] text-[#51A6F4]`}>
                        Start your career
                    </h2>
                </Link>
                <p className=" text-[18px] m-0 p-0 mt-[.5rem] tracking-[.02em] leading-[1.5]">
                    Set the foundation for a successful career
                </p>
                <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
                    <h2 className={`text-lg leading-[1.2] font-[570] tracking-[.02em] mt-[1rem] ${MediumFont.className}  text-[#51A6F4]`}>
                        Uplevel your skills
                    </h2>
                </Link>
                <p className=" text-[18px] m-0 p-0 mt-[.5rem] tracking-[.02em] leading-[1.5]">
                    Supercharge your career by acquiring in-demand data and tech skills
                </p>


                <div className="mt-[1.5rem] ">
                    <ul>
                        <li className="m-0 p-0">
                            <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Programs</a>
                            <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                                Explore our diverse range of programs tailored to your professional growth
                            </p>
                        </li>
                        <li className="m-0 p-0 mt-[1rem]">
                            <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Community</a>
                            <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                                The Multiverse Community is a powerful network of apprentices and alumni who support each other to achieve their goals
                            </p>
                        </li>
                        <li className="m-0 p-0 mt-[1rem]">
                            <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>The Help Center</a>
                            <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                                Visit our support page for general information, FAQs, and contact options to help you get the support you need
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

export default Individualmobile
