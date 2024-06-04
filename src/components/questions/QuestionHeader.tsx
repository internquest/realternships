const QuestionHeader = () => {
    return (
        <section className="bg-[#0061D6] p-6 md:p-12 lg:p-16">
            <div className="py-5 md:py-9 lg:py-12 px-6 md:px-11 lg:px-20 bg-white rounded-[10px]">
                <div className="flex flex-col md:flex-row mx-auto">
                    <div className="flex flex-col justify-center md:text-left w-full md:w-1/2 mr-4">
                        <h2 className="text-3xl lg:text-5xl leading-[2.25rem] md:leading-[2.9rem] lg:leading-[3.5rem] font-extrabold text-[#4A5FF7CC]">Freelancers’ most<br className="hidden md:inline-block" /> frequent questions</h2>
                        <p className="py-4 md:py-7 text-[18px] lg:leading-[2rem] max-w-[550px]">Get answers to your burning questions in real-time from other talented freelancers, and share your experience so others can learn as well.</p>
                        <div className="py-4">
                            <a href="https://app.xolo.io/hub/signup?intention=CAREER" className="px-9 py-5 rounded-full bg-[#251C29] text-white text-[16px] font-semibold">Join for free</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center ml-0 md:ml-7 text-left md:text-left w-full md:w-1/2 py-6 md:py-0">
                        <ol className="list-decimal text-2xl text-[#251C29] px-4 md:px-0">
                            <li className="text-[17px] md:text-[18px]  font-semibold py-2 md:py-3">How much should I charge for this project?</li>
                            <li className="text-[17px] md:text-[18px]  font-semibold py-2 md:py-3">Where do I find clients?</li>
                            <li className="text-[17px] md:text-[18px]  font-semibold py-2 md:py-3">How do I register my company?</li>
                            <li className="text-[17px] md:text-[18px]  font-semibold py-2 md:py-3">How do I build an outstanding portfolio?</li>
                            <li className="text-[17px] md:text-[18px]  font-semibold py-2 md:py-3">How do I find the best person to work with on my next project?</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuestionHeader
