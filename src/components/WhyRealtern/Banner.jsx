const Banner = () => {
    return (
        <div className="w-full bg-[#F8F7F3] py-36 xl:py-28 flex items-center justify-center text-left mt-20 sm:mt-32 relative">
            <div className="sm:w-[44rem] flex flex-col gap-y-12 text-xl sm:text-2xl text-[#2C2C2C] ">
                <p className="leading-[2rem] sm:leadin-[2.6875rem] px-3 md:px-0 pt-4 sm:pt-0">
                    Basic projects typically don't address real-world challenges or
                    demonstrate how you can apply your skills to solve actual business
                    problems
                </p>
                <p className="leading-[2rem] sm:leading-[2.6875rem] px-3 md:px-0">
                    These simple projects often don't showcase your ability to work on
                    scalable, real-world applications or handle complex problems
                </p>
            </div>
            <div className=" absolute bg-white top-0 left-0 size-[4.6875rem]  ">
                {" "}
            </div>
            <div className=" absolute bg-white top-[4.6875rem] left-[4.6875rem] size-[4.6875rem]  ">
                {" "}
            </div>
            <div className=" absolute bg-white bottom-0 left-0 size-[4.6875rem]  ">
                {" "}
            </div>
            <div className=" absolute bg-white bottom-[4.6875rem] right-0 size-[4.6875rem]  ">
                {" "}
            </div>
        </div>
    )
}

export default Banner
