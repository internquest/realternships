"use client";
import Marquee from "react-fast-marquee"
import { MediumFont } from "@/utils/fonts";

const RealMarquee = () => {
    return (
        <div className='bg-[#FAD49B] py-6'>
            <Marquee>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real companies</p>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real projects</p>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real skills</p>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real experience</p>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real companies</p>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real projects</p>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real skills</p>
                <p className={`text-[40px] text-[#50331E]/90 ${MediumFont.className} mr-32`}>real experience</p>
            </Marquee>
        </div >
    )
}

export default RealMarquee
