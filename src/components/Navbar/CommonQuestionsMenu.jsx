import Link from "next/link";
import { BoldFont, MediumFont, RegularFont, SemiBoldFont } from "../../utils/fonts";
import officer from '../../assets/WhyRealtern/multiverseofficer.webp'
import Image from "next/image";

const CommonQuestionsMenu = () => {
  return (
    <div className="flex gap-[3rem]">
      <div className=" md:w-1/3">
        <h1 className={` text-[32px] mb-[1rem] xl:text-[36px] ${SemiBoldFont.className} leading-[38.4px]  tracking-[-.02em] text-[#232322]`}>
          Transforming your workforce starts here.
        </h1>
        <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
          <h2 className={`text-lg  ${SemiBoldFont.className} `}>
            Why Multiverse
          </h2>
        </Link>
        <p className=" text-[1.15rem] mt-2 leading-[1.6rem] text-[#251C29]">
          Future-proof your business and equip your employees with the most
          in-demand skills
        </p>
        <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
          <h3
            className={`text-lg ${SemiBoldFont.className} mt-3 `}
          >
            Contact sales
          </h3>
        </Link>
      </div>
      <div className="space-y-6 md:w-1/3">
        <div>
          <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
            <h3 className={`text-lg ${SemiBoldFont.className} `}>
              Programs
            </h3>
          </Link>
          <p className=" text-[1.125rem] leading-[1.5] mt-1 font-normal tracking-[.01em] text-[#232322]">
            Explore our programmes and take the first step towards transforming
            your teams
          </p>
        </div>
        <div>
          <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
            <h3 className={`text-lg ${SemiBoldFont.className} `}>
              Blog
            </h3>
          </Link>
          <p className=" text-[1.125rem] mt-1 leading-[1.5] font-normal tracking-[.02em] text-[#232322]">
            Stay informed on the latest workforce trends
          </p>
        </div>
        <div>
          <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
            <h3 className={`text-lg ${SemiBoldFont.className} `}>
              Resources
            </h3>
          </Link>
          <p className="text-[1.125rem] mt-1 leading-[1.5] font-normal tracking-[.02em] text-[#232322]">
            Read our latest research and access practical guides for leaders
          </p>
        </div>
        <div>
          <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
            <h3 className={`text-lg ${SemiBoldFont.className} `}>
              Events and webinars
            </h3>
          </Link>
          <p className="text-[1.125rem] mt-1 leading-[1.5] font-normal tracking-[.01em] text-[#232322]">
            Access expert insights from live and on-demand events
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

      {/* <div className="space-y-4 md:w-1/3">
        <div className="rounded-[13px] bg-[#E6E8FE] px-4 py-6">
          <p className="mb-4 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
            How to build a future-proof skills strategy
          </p>
          <h4 className={`text-lg ${SemiBoldFont.className} text-[#2C2C2C]`}>
            Preparing for the AI revolution
          </h4>
        </div>
        <div className="rounded-[13px] bg-[#E6E8FE] px-4 py-6">
          <p className="mb-4 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
            Become an AI-enabled organisation
          </p>
          <h4 className={`text-lg ${SemiBoldFont.className} text-[#2C2C2C]`}>
            Announcing AI Jumpstart: A new AI learning module
          </h4>
        </div>
        <div className="rounded-[13px] bg-[#E6E8FE] px-4 py-6">
          <p className="mb-4 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
            Three trends shaping the future of work
          </p>
          <h4 className={`text-lg ${SemiBoldFont.className} text-[#2C2C2C]`}>
            The power of on-the-job learning
          </h4>
        </div>
      </div> */}
    </div>
  );
};

export default CommonQuestionsMenu;
