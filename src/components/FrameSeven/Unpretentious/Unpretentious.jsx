import { MediumFont } from "@/utils/fonts";
import UnpretentiousAccordion from "./UnpretentiousAccordion";

const Unpretentious = () => {
    return (
        <div className="px-[5px] sm:px-4 pb-4">
            <div className="rounded-[20px] bg-[#DDFC9D]">
                <div>
                    <h1
                        className={`${MediumFont.className} flex items-center justify-center pt-12 text-[24px] text-[#544D49] sm:text-[32px] md:pt-20 lg:text-[36px]`}
                    >
                        Unpretentious and Honest
                    </h1>

                    <div
                        className={`mx-auto mt-12 max-w-[850px] rounded-t-[10px] bg-white px-[4px] md:px-12 pt-8 md:mt-20 ${MediumFont.className} `}
                    >
                        <div className="mx-auto max-w-[700px] bg-white pb-8 text-[21px] leading-[2.7rem] text-[#544D49] md:text-[24px] md:leading-[3rem]">
                            Authenticity and humility are at the core of our values. We value
                            students s who are:
                        </div>

                        <UnpretentiousAccordion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unpretentious;
