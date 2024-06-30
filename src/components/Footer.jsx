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
import { MediumFont } from "@/utils/fonts";

const Footer = () => {
  return (
    <div className="h-auto w-full bg-[#F8F7F3]">
      <div className="mx-auto h-max w-full px-6 pt-10 lg:px-16 xl:w-[1150px] xl:px-0 2xl:w-[1311px]">
        <div className="hidden h-max w-full lg:inline-block">
          <div className="flex w-full flex-col px-4 pb-16 pt-10 lg:px-0 2xl:pt-0">
            <div className="flex w-full items-start justify-between">
              <Image
                src={footer}
                alt="image"
                className="h-16 w-16 object-contain"
              />
              <div className="flex w-max items-start justify-end gap-x-6 lg:gap-x-20">
                <div
                  style={MediumFont.style}
                  className="text-lg hover:underline"
                >
                  Employers
                </div>
                <div className="flex w-32 flex-col items-start justify-start gap-y-3">
                  <span style={MediumFont.style} className="text-lg">
                    Candidates
                  </span>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Start your career</span>
                  </Link>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Learn new skills</span>
                  </Link>
                </div>
                <div
                  style={MediumFont.style}
                  className="text-lg hover:underline"
                >
                  Community
                </div>
                <div className="flex w-32 flex-col items-start justify-start gap-y-3">
                  <span className="text-lg" style={MediumFont.style}>
                    About
                  </span>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Our Mission</span>
                  </Link>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Blog</span>
                  </Link>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">
                      Diversity, Equity and Inclusion
                    </span>
                  </Link>
                </div>
                <div
                  style={MediumFont.style}
                  className="text-lg hover:underline"
                >
                  Join the team
                </div>
                <div className="hidden w-32 flex-col items-end justify-end gap-y-3 xl:flex">
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Privacy Policy</span>
                  </Link>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Contact Us</span>
                  </Link>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Press Enquiries</span>
                  </Link>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Terms</span>
                  </Link>
                  <Link href="" className="hover:underline">
                    <span className="text-[17px]">Privacy Settings</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-x-4 py-6 xl:hidden">
              <Link href="" className="hover:underline">
                <span>Privacy Policy</span>
              </Link>
              <Link href="" className="hover:underline">
                <span>Contact Us</span>
              </Link>
              <Link href="" className="hover:underline">
                <span>Press Enquiries</span>
              </Link>
              <Link href="" className="hover:underline">
                <span>Terms</span>
              </Link>
              <Link href="" className="hover:underline">
                <span>Privacy Settings</span>
              </Link>
            </div>
            <div className="w-full items-center justify-between">
              <div className="flex flex-col items-start justify-center gap-y-10">
                <div className="flex w-full items-start justify-between mt-16">
                  <div className=" text-sm">
                    <span>
                      Multiverse • US |{" "}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-x-5 text-3xl text-[#4A5FF7]">
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
        <div className="flex h-max w-full flex-col items-start justify-start gap-y-6 pb-2 pt-8 sm:pb-12 lg:hidden">
          <Image
            src={footer}
            alt="image"
            className="h-16 w-16 object-contain"
          />
          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-medium" style={MediumFont.style}>
              Employers
            </span>
            <FaAngleRight />
          </div>
          <div className="flex w-full flex-col gap-y-3">
            <span className="text-lg font-medium" style={MediumFont.style}>
              Candidates
            </span>
            <div className="flex w-full items-center justify-between">
              <Link href="" className="hover:underline">
                <span>Start your career</span>
              </Link>
              <FaAngleRight />
            </div>
            <div className="flex w-full items-center justify-between">
              <Link href="" className="hover:underline">
                <span>Learn new skills</span>
              </Link>
              <FaAngleRight />
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-medium" style={MediumFont.style}>
              Community
            </span>
            <FaAngleRight />
          </div>
          <div className="flex w-full flex-col gap-y-3">
            <span className="text-lg font-medium" style={MediumFont.style}>
              About
            </span>
            <div className="flex w-full items-center justify-between">
              <Link href="" className="hover:underline">
                <span>Our Mission</span>
              </Link>
              <FaAngleRight />
            </div>
            <div className="flex w-full items-center justify-between">
              <Link href="" className="hover:underline">
                <span>Blog</span>
              </Link>
              <FaAngleRight />
            </div>
            <div className="flex w-full items-center justify-between">
              <Link href="" className="hover:underline">
                <span>
                  Diversity, Equity and Inclusion
                </span>
              </Link>
              <FaAngleRight />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-medium" style={MediumFont.style}>
              Join the team
            </span>
            <FaAngleRight />
          </div>
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex w-full items-center justify-start gap-x-20">
              <Link href="" className="hover:underline">
                <span>Privacy Policy</span>
              </Link>
              <Link href="" className="hover:underline">
                <span>Contact Us</span>
              </Link>
            </div>
            <div className="flex w-full items-center justify-start gap-x-20">
              <Link href="" className="hover:underline">
                <span>Press Enquiries</span>
              </Link>
              <Link href="" className="hover:underline">
                <span>Terms</span>
              </Link>
            </div>
            <div className="flex w-full items-center justify-start gap-x-6">
              <Link href="" className="hover:underline">
                <span>Privacy Settings</span>
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-x-5 text-3xl text-[#4A5FF7]">
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
          <div className="flex w-full flex-col items-center justify-center gap-y-2">
            <div className="text-xs font-medium">
              <span>
                Multiverse • US | <Link href="">info@multiverse.io</Link>
              </span>
            </div>
            <div className="text-xs font-medium">
              <span>© Multiverse 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
