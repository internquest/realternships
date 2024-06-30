import { MediumFont, SemiBoldFont } from "@/utils/fonts";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-12 pt-28 md:pb-20 lg:pt-40">
      <h1
        className={`${MediumFont.className} text-[24px] text-[#544D49] sm:text-[32px] lg:text-[36px]`}
      >
        It's Not Just About the 'Eureka' Moment
      </h1>

      <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:py-12 lg:grid-cols-3">
        <div className="rounded-[20px] bg-[#E6E8FE] px-4 py-9">
          <p
            className={`text-[26px] leading-[3rem] text-black ${MediumFont.className}`}
          >
            Innovation isn't always a lightning strike of genius
          </p>
        </div>
        <div className="rounded-[20px] bg-[#3B3B3A] px-4 py-9">
          <p
            className={`text-[26px] leading-[3rem] text-[#DDFC9D] ${MediumFont.className}`}
          >
            Real progress comes from dedication and persistence
          </p>
        </div>
        <div className="rounded-[20px] bg-[#DDFC9D] px-4 py-9">
          <p
            className={`text-[26px] leading-[3rem] text-[#2C2C2C] ${MediumFont.className}`}
          >
            The most impactful solutions often evolve over time
          </p>
        </div>
      </div>

      <h2
        className={`mx-auto max-w-[708px] pb-16 pt-8 text-[26px] leading-[3.5rem] text-[#6F71EE] md:text-[32px] ${SemiBoldFont.className}`}
      >
        Empowering students to make a lasting impact & develop skills that drive
        innovation forward
      </h2>

      <div className="mx-auto max-w-[708px] rounded-[10px] border-[5px] border-[#4A5FF7]/50 p-8">
        <p
          className={`text-[24px] leading-[3.1rem] ${MediumFont.className} text-[#544449]/90`}
        >
          Realternships aren't just about gaining experience – they're about
          equipping you with the skills and abilities that drive real progress.
        </p>
      </div>
    </div>
  );
};

export default Header;
