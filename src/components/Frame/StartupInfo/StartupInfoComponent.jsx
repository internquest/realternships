import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

const StartupInfo = () => {
  return (
    <div className="rounded-2xl bg-[#F7F7F7] py-6 overflow-hidden">
      <div className="mx-auto my-12 flex flex-col space-y-4 px-4 md:my-16 lg:flex-row lg:space-x-4 lg:space-y-0 lg:-mr-[150px]">
        <div className="flex flex-col space-y-4 lg:w-1/3">
          <FirstCard />
          <SecondCard />
        </div>
        <ThirdCard />
      </div>
    </div>
  );
};

export default StartupInfo;
