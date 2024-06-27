import { SemiBoldFont } from "@/utils/fonts";

const Tagline = () => {
  return (
    <div className="flex items-center justify-center px-4 pb-6 md:pb-8">
      <h1
        className={`${SemiBoldFont.className} mx-auto max-w-[800px] text-[34px] text-[#2C2C2C]/50 sm:text-[48px] md:text-[56px] lg:text-[64px]`}
      >
        The future belongs to those who believe in the beauty of their dreams
      </h1>
    </div>
  );
};

export default Tagline;
