import Link from "next/link";
import { MediumFont, SemiBoldFont } from "@/utils/fonts";

const CommonQuestionsMenu = () => {
  return (
    <div className="flex gap-x-4">
      <div className="space-y-4 md:w-1/3">
        <h1 className={`text-[30px] ${MediumFont.className} text-gray-800`}>
          Transforming your workforce starts here
        </h1>
        <h2 className={`text-lg ${SemiBoldFont.className} text-[#51A6F4]`}>
          Why Multiverse
        </h2>
        <p className="mr-2 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
          Future-proof your business and equip your employees with the most
          in-demand skills
        </p>
        <Link href={"/"}>
          <h3
            className={`text-lg ${SemiBoldFont.className} mt-3 text-[#4a5ff7]`}
          >
            Book a consultation
          </h3>
        </Link>
      </div>
      <div className="space-y-6 md:w-1/3">
        <div>
          <Link href={"/"}>
            <h3 className={`text-lg ${SemiBoldFont.className} text-[#51A6F4]`}>
              Programmes
            </h3>
          </Link>
          <p className="mr-2 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
            Explore our programmes and take the first step towards transforming
            your teams
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <h3 className={`text-lg ${SemiBoldFont.className} text-[#4a5ff7]`}>
              Blog
            </h3>
          </Link>
          <p className="mr-2 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
            Stay informed on the latest workforce trends
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <h3 className={`text-lg ${SemiBoldFont.className} text-[#4a5ff7]`}>
              Resources
            </h3>
          </Link>
          <p className="mr-2 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
            Read our latest research and access practical guides for leaders
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <h3 className={`text-lg ${SemiBoldFont.className} text-[#4a5ff7]`}>
              Events and webinars
            </h3>
          </Link>
          <p className="mr-2 text-[1.15rem] leading-[1.6rem] text-[#251C29]">
            Access expert insights from live and on-demand events
          </p>
        </div>
      </div>
      <div className="space-y-4 md:w-1/3">
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
      </div>
    </div>
  );
};

export default CommonQuestionsMenu;
