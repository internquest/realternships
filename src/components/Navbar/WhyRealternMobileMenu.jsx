import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import { motion } from 'framer-motion'
import { RegularFont } from "../../utils/fonts";
import Link from "next/link";
const WhyRealternMobileMenu = ({ openDropdown }) => {
  // console.log(openDropdown);

  return (
    <motion.div initial={{ height: 0 }} animate={openDropdown ? { height: 'auto' } : ''} className={`  [will-change:auto]  overflow-hidden text-[#232322]`} >
      <div className={` pt-[.25rem] px-[1.5rem] pb-[1.25rem]`}>
        <h1
          className={`${SemiBoldFont.className} text-[1.75rem] sm:text-[2rem] leading-[1.2] font-[670] tracking-[-.02em] relative  mb-[1rem]`}
        >
          Transforming your workforce starts here.
        </h1>
        <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
          <h2 className={`text-lg ${MediumFont.className} m-0 p-0 leading-[1.2]  font-[570] tracking-[.02em] text-[#51A6F4]`}>
            Why Multiverse
          </h2>
        </Link>
        <p className=" text-[18px] m-0 p-0 mt-[.5rem] tracking-[.02em] leading-[1.5]">
          Future-proof your business and equip your employees with the most
          in-demand skills
        </p>
        <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
          <h2 className={`text-lg leading-[1.2] font-[570] tracking-[.02em] mt-[1rem] ${MediumFont.className}  text-[#51A6F4]`}>
            Contact sales
          </h2>
        </Link>


        <div className="mt-[1.5rem] ">
          <ul>
            <li className="m-0 p-0">
              <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Programs</a>
              <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                Explore our programs and take the first step toward transforming your teams
              </p>
            </li>
            <li className="m-0 p-0 mt-[1rem]">
              <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Blog</a>
              <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                Stay informed on the latest workforce trends
              </p>
            </li>
            <li className="m-0 p-0 mt-[1rem]">
              <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Resources</a>
              <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                Read our latest research and access practical guides for leaders
              </p>
            </li>
            <li className="m-0 p-0 mt-[1rem]">
              <a href="" className={`${MediumFont.className} text-[#4a5ff7] visited:text-[#51a6f4] text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] `}>Events and webinars</a>
              <p className="text-[1.125rem] leading-[1.5] font-normal tracking-[.02em] mt-[.5rem]">
                Access expert insights from live and on-demand events
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
  );
};

export default WhyRealternMobileMenu;
