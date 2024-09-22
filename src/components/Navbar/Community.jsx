import Link from "next/link";
import { MediumFont, SemiBoldFont } from "../../utils/fonts";
const CommunityMenu = () => {
  return <div className="flex gap-[3rem]">
    <div className=" md:w-1/3">
      <h1 className={`text-[32px] xl:text-[36px] ${SemiBoldFont.className} mb-[1rem] leading-[38.4px]  tracking-[-.02em] text-[#232322] `}>
        We have one thing on our minds. Your success.
      </h1>
      <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
        <h2 className={`text-lg ${SemiBoldFont.className} `}>
          Start your career
        </h2>
      </Link>
      <p className="mt-2 text-[1.15rem] leading-[1.6rem] text-[#232322]">
        Set the foundation for a successful career
      </p>
      <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
        <h3
          className={`text-lg mt-[1rem] ${SemiBoldFont.className}  text-[#4a5ff7]`}
        >
          Uplevel your skills
        </h3>
      </Link>
      <p className="mt-2 text-[1.15rem] leading-[1.6rem] text-[#232322]">
        Supercharge your career by acquiring in-demand data and tech skills
      </p>
    </div>
    <div className="space-y-6 md:w-1/3">
      <div>
        <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
          <h3 className={`text-lg ${SemiBoldFont.className} text-[#4a5ff7]`}>
            Programs
          </h3>
        </Link>
        <p className="mt-2 text-[1.15rem] leading-[1.6rem] text-[#232322]">
          Explore our diverse range of programs tailored to your professional growth
        </p>
      </div>
      <div>
        <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
          <h3 className={`text-lg mt-[1rem] ${SemiBoldFont.className} text-[#4a5ff7]`}>
            Community
          </h3>
        </Link>
        <p className="mt-2 text-[1.15rem] leading-[1.6rem] text-[#232322]">
          The Multiverse Community is a powerful network of apprentices and alumni who support each other to achieve their goals
        </p>
      </div>
      <div>
        <Link href={"/"} className="text-[#4a5ff7] visited:text-[#51a6f4]">
          <h3 className={`text-lg mt-[1rem] ${SemiBoldFont.className} text-[#4a5ff7]`}>
            The Help Center
          </h3>
        </Link>
        <p className="mt-2 text-[1.15rem] leading-[1.6rem] text-[#232322]">
          Visit our support page for general information, FAQs, and contact options to help you get the support you need
        </p>
      </div>

    </div>
    <div className="space-y-4 md:w-1/3">
      <div className="rounded-[13px] bg-[#E6E8FE] px-4 py-6">

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
      </div>
    </div>
  </div>;
};

export default CommunityMenu;
