import { MediumFont } from "@/utils/fonts";
import Textanimation from "./Textanimation";

const Hero = () => {
  return (
    <header>
      <div
        className="flex h-screen w-full flex-col justify-center bg-opacity-0 bg-cover bg-center px-4 md:pl-16 lg:pl-32 xl:pl-36"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/37cd/866f/a5135ff063ae77069840cc637770cada?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JZHBN8~d1BwwwD1FSC~ZEQoKSAYcFczDejSC3XhcJLMU07swf-d4jAIiLxDlkUIQAhAXjphurxW2SCobLP64Jblpt3hZfbKZiboXw2KxOMxs~xq~p7BV9C3jNxYg17JDtYlwOZk2KHPRAoLklH3a0dSYmDpM72GtRQsS4JRoWhpVdUJaygNMvUBGoJrpyipDFXibsh-4uxnj~sjeo8abEu7xm8P8OUsSSzqXEzV2g1r6CCni~4CnkmzMh~Bh-iO~Vd5QidEVgsiD3LuCkVnB5jR037wvSD9VLbgUTASx0~O4rySD0RYM-GPyJHPZJtMZ3MGHWD2U~ZanQ6EM~xzilA__")',
        }}
      >
        <div className="flex max-w-[650px] flex-col justify-between rounded-[20px] bg-white p-5 md:p-8">
          <h2
            className={`${MediumFont.className} max-w-[500px] text-[30px] leading-[3.2rem] text-[#251C29]/90 md:text-[35px] lg:text-[40px] lg:leading-[4rem]`}
          >
            Realtern as
            <Textanimation />
            {/* <span className="rounded-[20px] bg-[#DDFC9D] px-2 py-1 md:px-4">
              ML Engineer{" "}
            </span> */}

            with real companies to gain real work experience
          </h2>
          <p
            className={`text-[24px] leading-[2.5rem] md:text-[28px] md:leading-[3rem] ${MediumFont.className} mt-6 text-[#544D49] md:mt-9 lg:mt-12`}
          >
            Get that work experience to stand out and land your dream
            opportunities
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
