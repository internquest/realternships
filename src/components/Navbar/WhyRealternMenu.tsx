import Link from "next/link";
import { MediumFont, RegularFont, SemiBoldFont } from "../../utils/fonts";
import Image from "next/image";
import officer from '../../assets/WhyRealtern/multiverseofficer.webp'
const WhyRealternMenu = () => {
  return <div className={`${RegularFont.className} flex gap-[3rem]`}>
    <div className=" space-y-2 md:w-1/3">
      <Link href={''} className=" text-[#4a5ff7] visited:text-[#51a6f4]">
        <h2 className={`text-lg leading-[1.2] font-[570] tracking-[.02em] ${MediumFont.className} text-[#4a5ff7]`}>
          Our Mission
        </h2>
      </Link>
      <p className="mr-2  text-[1.125rem] leading-[1.]5 font-normal tracking-[.02em] text-[#232322]">
        We're providing equitable access to economic opportunity, for everyone
      </p>
      <Link href={"/"} className=" text-[#4a5ff7] visited:text-[#51a6f4]">
        <h3
          className={`text-lg leading-[1.2] font-[570] tracking-[.02em] ${MediumFont.className} mt-6 `}
        >
          Diversity, Equity and Inclusion
        </h3>
      </Link>
      <p className="mr-2  text-[1.125rem] leading-[1.5]  font-normal tracking-[.02em] text-[#232322] ">
        It’s time for our workforces to reflect our society. Let’s make it happen
      </p>
    </div>
    <div className="space-y-2 md:w-1/3">
      <div className="space-y-2">
        <Link href={"/"} className=" text-[#4a5ff7] visited:text-[#51a6f4]">
          <h3 className={`text-lg leading-[1.2] font-[570] tracking-[.02em] ${MediumFont.className} `}>
            Careers
          </h3>
        </Link>
        <p className="mr-2  text-[1.125rem] leading-[1.5]  font-normal tracking-[.02em] text-[#232322]">
          Together we’ll change what’s possible in education and work, through the power of professional apprenticeships
        </p>
      </div>
      <div className="space-y-2">
        <Link href={"/"} className=" text-[#4a5ff7] visited:text-[#51a6f4]">
          <h3 className={`text-lg leading-[1.2] font-[570] tracking-[.02em] mt-6 ${MediumFont.className} `}>
            News & Blog
          </h3>
        </Link>
        <p className="mr-2 text-[1.125rem] leading-[1.5]  font-normal tracking-[.02em] text-[#232322]">
          The latest news and blog from Multiverse
        </p>
      </div>
      <div className="space-y-2">
        <Link href={"/"} className=" text-[#4a5ff7] visited:text-[#51a6f4]">
          <h3 className={`text-lg leading-[1.2] font-[570] tracking-[.02em] mt-6 ${MediumFont.className} `}>
            Learning Science Research Hub
          </h3>
        </Link>
        <p className="mr-2  text-[1.125rem] leading-[1.5]  font-normal tracking-[.02em] text-[#232322]">
          Find out more about our Learning Model - MAGE, and exciting research happening across our Learning Science Team
        </p>
      </div>

    </div>
    <div className="space-y-4 btl:mt-0 md:w-1/3">

      <div className="btl:block hidden mb-[2rem] ">
        <div className="rounded-[16px] overflow-hidden transition-all duration-[.3s] bg-[#e6e8fe]">
          <a href="">
            <div className="flex flex-col relative">
              <div>
                <Image src={officer} alt="" width={1080} height={720} sizes="(max-width: 800px) 100vw, 800px" />
              </div>
              <p className={`${RegularFont.className} overflow-hidden text-[1rem] line-clamp-2 leading-[1.2] tracking-[.02em] text-[#232322] font-normal pt-[1.5rem] px-[1rem] `}>Multiverse’s Chief Revenue Officer - Alex Varel</p>
              <div className="pb-[1.5rem] ">
                <p className={`${MediumFont.className} overflow-hidden text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] text-[#232322] pt-[1rem]  px-[1rem] pr-[2rem] pb-0`}>Evolving Multiverse’s Sales Team</p>
              </div>
            </div>
          </a>
        </div>
        <div className="mt-[1rem] mb-[2rem] rounded-[16px] overflow-hidden transition-all duration-[.3s] bg-[#e6e8fe]">
          <a href="">
            <div className="flex flex-col relative">
              <div className="pb-[1.5rem] ">
                <p className={`${MediumFont.className} pt-[1.5rem] overflow-hidden text-[1.125rem] leading-[1.2] font-[570] tracking-[.02em] text-[#232322]  px-[1rem] pr-[2rem] pb-0 line-clamp-3 `}>Celebrating Women in Tech at Multiverse</p>
              </div>
            </div>
          </a>
        </div>
      </div>



      {/* <div className="rounded-[13px] bg-[#E6E8FE] px-4 py-6">

        <h4 className={`text-lg ${SemiBoldFont.className} text-[#2C2C2C]`}>
          Announcing AI Jumpstart: A new AI learning module for apprentices
        </h4>
      </div>
      <div className="rounded-[13px] bg-[#E6E8FE] px-4 py-6">

        <h4 className={`text-lg ${SemiBoldFont.className} text-[#2C2C2C]`}>
          What are on the job training programs and how to find them
        </h4>
      </div>
      <div className="rounded-[13px] bg-[#E6E8FE] px-4 py-6">

        <h4 className={`text-lg ${SemiBoldFont.className} text-[#2C2C2C]`}>
          How to get a job in tech with no experience
        </h4>
      </div> */}
    </div>
  </div>;;
};

export default WhyRealternMenu;
