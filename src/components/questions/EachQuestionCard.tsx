
interface EachQuestionCardProps {
    Heading: string;
    Content: string;
}

const EachQuestionCard = ({ Heading, Content }: EachQuestionCardProps) => {
    return (
        <div className="text-start border border-[#d7d7d7] w-full px-5 py-6 flex flex-col">
            <h2 className="font-medium text-[20px] leading-[27.25px] text-[#4A5FF7]">{Heading}</h2>
            <p className="text-[17px] text-[#251C29] leading-[26px] pt-6 flex-grow">
                {Content}
            </p>
        </div>
    )
}

export default EachQuestionCard
