import matrix from "@/assets/Landing/matrix.svg";
import Image from "next/image";
import { BoldFont, MediumFont } from "@/utils/fonts";

const Manifesto = () => {
    return (
        <>
            <div className="w-full -space-y-12 sm:-space-y-20 md:-space-y-24 lg:-space-y-32 xl:-space-y-48 2xl:-space-y-52">
                <div className=" w-full ">
                    <Image
                        src={matrix}
                        alt="logo"
                        width={1200}
                        height={1200}
                        className=" w-full h-full object-contain "
                    />
                </div>
                <div className="w-full ">
                    <div className="w-full flex flex-col items-center justify-center gap-y-12 py-20 px-6 sm:px-16 lg:px-32 xl:px-48 2xl:px-96 bg-[#4A5FF6] rounded-[22px] relative ">
                        <span
                            className="text-[42px] font-semibold text-white/95"
                            style={BoldFont.style}
                        >
                            Our manifesto
                        </span>
                        <span
                            className={`w-auto md:w-[650px] lg:w-[896px] text-left text-xl sm:text-2xl text-white leading-normal sm:leading-[45px] ${MediumFont.className}`}
                        >
                            We exist to change what’s next for the aspiring coders & companies
                            of the world.
                        </span>
                        <div
                            className={`flex flex-col items-start justify-center gap-y-6 sm:gap-y-10 text-xl sm:text-2xl text-white leading-normal sm:leading-[45px] w-auto md:w-[650px] lg:w-[896px] ${MediumFont.className}`}
                        >
                            <p>
                                Coding is the language of creation, enabling us to build the
                                digital world around us. From the websites we browse to the apps
                                we use daily, coding is the driving force behind the technology
                                that shapes our lives, that transforms ideas into reality,
                                allowing us to innovate, communicate, and connect in ways never
                                before possible.
                            </p>
                            <p>
                                But coding needs re-coding as the landscape of work is evolving
                                at an unprecedented pace, driven by technological advancements.
                                Employers are seeking individuals who can adapt, innovate, find
                                new ways to solve problems, think creatively, challenge the
                                status quo, drive innovation forward and contribute in
                                meaningful ways.
                            </p>
                            <p>
                                As companies increasingly prioritize candidates with proven
                                real-time work experience, we're here to change the game. We are
                                reimagining new ways for students to build real-world tech
                                skills, gain real-time work experience, stand out and get one
                                step closer to dream opportunities in tech.
                            </p>
                            <span>Let’s change what’s next.</span>
                            <div
                                className={`rounded-lg w-full bg-[#DDFC9D] text-[#2C2C2CCC]/80 text-lg sm:text-2xl lg:text-[30px] leading-snug md:leading-[3rem] lg:leading-[3.4375rem] py-6 sm:py-10 lg:py-12 px-6 sm:px-16 tracking-[0.01em] ${MediumFont.className}`}
                            >
                                Creating top-notch talent with proven work experience for the
                                ambitious companies at the forefront of innovation to unlock
                                better futures.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Manifesto;
