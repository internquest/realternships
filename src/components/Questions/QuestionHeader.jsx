import { MediumFont, BoldFont } from "@/utils/fonts";

const QuestionHeader = () => {
    return (
        <section className="bg-[#0061D6] p-6 md:p-12 lg:p-16">
            <div className="rounded-[10px] bg-white px-6 py-5 md:px-11 md:py-9 lg:px-20 lg:py-12">
                <div className="mx-auto flex flex-col md:flex-row">
                    <div className="mr-4 flex w-full flex-col justify-center md:w-1/2 md:text-left">
                        <h2
                            className={`text-3xl leading-[2.25rem] md:leading-[2.9rem] lg:text-5xl lg:leading-[3.5rem] ${BoldFont.className} max-w-[500px] text-[#4A5FF7CC]`}
                        >
                            Do these questions echo your own thoughts
                        </h2>
                        <p className="max-w-[550px] py-4 text-[18px] md:py-7 lg:leading-[2rem]">
                            Get answers to your burning questions in real-time from other
                            talented freelancers, and share your experience so others can
                            learn as well.
                        </p>
                        <div className="py-4">
                            <a
                                href="https://app.xolo.io/hub/signup?intention=CAREER"
                                className={`rounded-full bg-[#251C29] px-9 py-5 text-[16px] text-white ${MediumFont.className}`}
                            >
                                Join for free
                            </a>
                        </div>
                    </div>
                    <div className="ml-0 flex w-full flex-col items-center justify-center py-6 text-left md:ml-7 md:w-1/2 md:py-0 md:text-left">
                        <ol className="list-none px-4 text-2xl text-[#2C2C2CCC] md:px-0">
                            <li className="py-2 text-[17px] font-medium md:py-3 md:text-[18px]">
                                <span className="mr-3 rounded-full border px-2 py-1">1</span>How
                                much should I charge for this project?
                            </li>
                            <li className="py-2 text-[17px] font-medium md:py-3 md:text-[18px]">
                                <span className="mr-3 rounded-full border px-2 py-1">2</span>
                                Where do I find clients?
                            </li>
                            <li className="py-2 text-[17px] font-medium md:py-3 md:text-[18px]">
                                <span className="mr-3 rounded-full border px-2 py-1">3</span>How
                                do I register my company?
                            </li>
                            <li className="py-2 text-[17px] font-medium md:py-3 md:text-[18px]">
                                <span className="mr-3 rounded-full border px-2 py-1">4</span>How
                                do I build an outstanding portfolio?
                            </li>
                            <li className="py-2 text-[17px] font-medium md:py-3 md:text-[18px]">
                                <span className="mr-3 rounded-full border px-2 py-1">5</span>How
                                do I find the best person to work with on my next project?
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionHeader;
