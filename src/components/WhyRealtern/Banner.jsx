const Banner = () => {
  return (
    <div className="relative mt-20 flex w-full items-center justify-center bg-[#F8F7F3] py-36 text-left sm:mt-32 xl:py-28">
      <div className="flex flex-col gap-y-8 text-xl text-[#2C2C2C] sm:w-[44rem] sm:text-2xl">
        <p className="px-3 pt-4 leading-[2.4rem] sm:pt-0 sm:leading-[2.8rem] md:px-0">
          Basic projects typically don't address real-world challenges or
          demonstrate how you can apply your skills to solve actual business
          problems
        </p>
        <p className="px-3 leading-[2.4rem] sm:leading-[2.8rem] md:px-0">
          These simple projects often don't showcase your ability to work on
          scalable, real-world applications or handle complex problems
        </p>
      </div>
      <div className="absolute left-0 top-0 size-[4.6875rem] bg-white"> </div>
      <div className="absolute left-[4.6875rem] top-[4.6875rem] size-[4.6875rem] bg-white">
        {" "}
      </div>
      <div className="absolute bottom-0 left-0 size-[4.6875rem] bg-white">
        {" "}
      </div>
      <div className="absolute bottom-[3rem] right-0 size-[4.6875rem] bg-white">
        {" "}
      </div>
    </div>
  );
};

export default Banner;
