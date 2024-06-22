import Image from "next/image";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import footer from "@/assets/global/footer.svg";

import { MediumFont, SemiBoldFont } from "@/utils/fonts";

const Footer = () => {
  return (
    <div className="w-full bg-[#F8F7F3] h-auto">
      <div className="h-max px-0 lg:px-16 xl:px-0 w-full xl:w-[1150px] 2xl:w-[1311px] mx-auto pt-10">
        <div className="hidden lg:inline-block w-full h-max ">
          <div className=" w-full flex flex-col pt-10 2xl:pt-0 pb-16 px-4 lg:px-0   ">
            <div className=" w-full flex items-start justify-between ">
              <Image
                src={footer}
                alt="image"
                width={2000}
                height={2000}
                className="w-16 h-16 object-contain"
              />
              <div className="w-max flex items-start justify-end gap-x-6 lg:gap-x-20">
                <div
                  style={SemiBoldFont.style}
                  className=" text-lg hover:underline"
                >
                  Employers
                </div>
                <div className=" flex flex-col items-start justify-start gap-y-3 w-32 ">
                  <span style={SemiBoldFont.style} className=" text-lg ">
                    Candidates
                  </span>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Start your career</span>
                  </Link>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Learn new skills</span>
                  </Link>
                </div>
                <div
                  style={SemiBoldFont.style}
                  className=" text-lg hover:underline"
                >
                  Community
                </div>
                <div className=" flex flex-col items-start justify-start gap-y-3 w-32 ">
                  <span className=" text-lg " style={SemiBoldFont.style}>
                    About
                  </span>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Our Mission</span>
                  </Link>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Blog</span>
                  </Link>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>
                      Diversity, Equity and Inclusion
                    </span>
                  </Link>
                </div>
                <div
                  style={SemiBoldFont.style}
                  className=" text-lg hover:underline "
                >
                  Join the team
                </div>
                <div className=" hidden xl:flex flex-col items-end justify-end gap-y-3 w-32  ">
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Privacy Policy</span>
                  </Link>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Contact Us</span>
                  </Link>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Press Enquiries</span>
                  </Link>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Terms</span>
                  </Link>
                  <Link href="" className=" hover:underline ">
                    <span style={MediumFont.style}>Privacy Settings</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-full flex xl:hidden items-center justify-start gap-x-4 py-6">
              <span style={MediumFont.style}>Privacy Policy</span>
              <span style={MediumFont.style}>Contact Us</span>
              <span style={MediumFont.style}>Press Enquiries</span>
              <span style={MediumFont.style}>Terms</span>
              <span style={MediumFont.style}>Privacy Settings</span>
            </div>
            <div className=" w-full items-center justify-between ">
              <div className=" flex flex-col items-start justify-center gap-y-10 ">
                <div className=" flex items-center justify-center gap-x-4 ">
                  <span style={SemiBoldFont.style} className=" text-lg ">
                    Choose country
                  </span>
                </div>
                <div className=" w-full flex items-start justify-between">
                  <div className=" w-80 text-sm " style={MediumFont.style}>
                    <span>
                      Multiverse • US |{" "}
                      <Link
                        href=""
                        className="hover:underline"
                        style={MediumFont.style}
                      >
                        info@multiverse.io
                      </Link>{" "}
                    </span>
                    <span style={MediumFont.style}>© Multiverse 2024</span>
                  </div>
                  <div className=" flex items-center justify-center gap-x-5 text-3xl text-[#4A5FF7]">
                    <Link href="">
                      <FaFacebook />
                    </Link>
                    <Link href="">
                      <FaTwitter />
                    </Link>
                    <Link href="">
                      <FaLinkedin />
                    </Link>
                    <Link href="">
                      <FaInstagram />
                    </Link>
                    <Link href="">
                      <FaYoutube />
                    </Link>
                    <Link href="">
                      <FaTiktok />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 items-start justify-start lg:hidden w-full h-max pt-8 pb-2 sm:pb-12 px-6 ">
          <Image
            src={footer}
            alt="image"
            width={1200}
            height={1200}
            className="w-16 h-16 object-contain"
          />
          <div className=" ">
            <span className=" text-lg font-medium " style={SemiBoldFont.style}>
              Employers
            </span>
            <FaAngleRight />
          </div>
          <div className=" w-full flex flex-col gap-y-3 ">
            <span className=" text-lg font-medium " style={SemiBoldFont.style}>
              Candidates
            </span>
            <div className=" w-full flex items-center justify-between ">
              <span style={MediumFont.style}>Start your carrer</span>
              <FaAngleRight />
            </div>
            <div className=" w-full flex items-center justify-between ">
              <span style={MediumFont.style}>Learn new skills</span>
              <FaAngleRight />
            </div>
          </div>

          <div className=" ">
            <span className=" text-lg font-medium " style={SemiBoldFont.style}>
              Community
            </span>
            <FaAngleRight />
          </div>
          <div className=" w-full flex flex-col gap-y-3 ">
            <span className=" text-lg font-medium " style={SemiBoldFont.style}>
              About
            </span>
            <div className=" w-full flex items-center justify-between ">
              <span style={MediumFont.style}>Our Mission</span>
              <FaAngleRight />
            </div>
            <div className=" w-full flex items-center justify-between ">
              <span style={MediumFont.style}>Blog</span>
              <FaAngleRight />
            </div>
            <div className=" w-full flex items-center justify-between ">
              <span style={MediumFont.style}>
                Diversity,Equity and Inclusion
              </span>
              <FaAngleRight />
            </div>
          </div>
          <div className=" ">
            <span className=" text-lg font-medium " style={SemiBoldFont.style}>
              Join the team
            </span>
            <FaAngleRight />
          </div>
          <div className=" w-full flex flex-col gap-y-3 ">
            <div className=" w-full flex items-center justify-start gap-x-20 ">
              <span style={MediumFont.style}>Privacy Policy</span>
              <span style={MediumFont.style}>Contact Us</span>
            </div>
            <div className=" w-full flex items-center justify-start gap-x-20 ">
              <span style={MediumFont.style}>Press Enquiries</span>
              <span style={MediumFont.style}>Terms</span>
            </div>
            <div className=" w-full flex items-center justify-start gap-x-6 ">
              <span style={MediumFont.style}>Privacy Settings</span>
            </div>
          </div>
          <div className=" w-full flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className=" text-lg font-medium " style={SemiBoldFont.style}>
              Choose country
            </span>
          </div>
          <div className=" w-full flex items-center justify-center gap-x-5 text-3xl text-[#4A5FF7] ">
            <Link href="">
              <FaFacebook />
            </Link>
            <Link href="">
              <FaTwitter />
            </Link>
            <Link href="">
              <FaLinkedin />
            </Link>
            <Link href="">
              <FaInstagram />
            </Link>
            <Link href="">
              <FaYoutube />
            </Link>
            <Link href="">
              <FaTiktok />
            </Link>
          </div>
          <div className=" w-full flex flex-col items-center justify-center gap-y-2 ">
            <div className=" text-xs font-medium ">
              <span style={MediumFont.style}>
                Multiverse • US | <Link href="">info@multiverse.io</Link>
              </span>
            </div>
            <div className=" text-xs font-medium ">
              <span style={MediumFont.style}>© Multiverse 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
