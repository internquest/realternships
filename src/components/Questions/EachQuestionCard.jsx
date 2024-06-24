import { MediumFont } from "@/utils/fonts";

const EachQuestionCard = ({ Heading, Content }) => {
    return (
        <div className="flex w-full flex-col border border-[#d7d7d7] px-5 py-6 text-start">
            <h2
                className={`${MediumFont.className} text-[20px] leading-[27.25px] text-[#4A5FF7]`}
            >
                {Heading}
            </h2>
            <p className="flex-grow pt-6 text-[17px] leading-[26px] text-[#251C29]">
                {Content}
            </p>
        </div>
    );
};

export default EachQuestionCard;
