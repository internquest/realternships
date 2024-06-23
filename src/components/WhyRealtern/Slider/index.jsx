import SliderComponent from "./SliderComponent";
import { SemiBoldFont } from "@/utils/fonts";
import Image from "next/image";
import code from "@/assets/WhyRealtern/code.png";

const FeaturedInternships = () => {
    return (
        <div className="w-full -space-y-12 sm:-space-y-16 md:-space-y-20 lg:-space-y-24 xl:-space-y-[135px] 2xl:-space-y-48">
            <Image src={code} alt="logo" className="h-full w-full" />
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-[#4A5FF6] pb-20 pt-36">
                <div className="flex w-full flex-col items-center justify-center gap-y-12 px-4 pb-6 sm:px-0 md:w-[41.375rem] md:pb-16">
                    <div className="flex flex-col items-start justify-center gap-y-6 text-white">
                        <span
                            className={`ml-3 text-4xl leading-relaxed tracking-tight md:whitespace-nowrap md:tracking-normal ${SemiBoldFont.className}`}
                        >
                            The{" "}
                            <span className="rounded-lg bg-[#DDFC9D] px-3 text-black">
                                new standard
                            </span>{" "}
                            for intern applicants
                        </span>
                        <p className="sm:leading-45 ml-3 text-[1.375rem] leading-[40px]">
                            Increasingly, companies are seeking students who already have
                            previous internship experiences or have made significant
                            contributions through meaningful projects
                        </p>
                        <p className="sm:leading-45 ml-3 text-[1.375rem] leading-[40px]">
                            Here are the requirements for internship roles at some of the
                            leading tech companies & startups
                        </p>
                    </div>
                </div>
                <SliderComponent />
                <div className="absolute -bottom-1 right-10 h-9 w-20 bg-white"></div>
                <div className="absolute -top-[0.5px] left-20 h-7 w-24 bg-white sm:left-40"></div>
            </div>
        </div>
    );
};

export default FeaturedInternships;
