import { MediumFont } from "@/utils/fonts";

const Header = () => {
  return (
    <div className="min-h-screen bg-[#2F09EF]/70">
      <div className="mx-auto max-w-[815px] px-4 pt-32 md:pt-44 md:text-center">
        <p
          className={`${MediumFont.className} text-[23px] leading-[2.5rem] text-white md:text-[28px] md:leading-[2.8rem]`}
        >
          As a Realtern, you'll have the opportunity to work on a diverse range
          of projects at the forefront of innovation, collaborating with teams
          that are pushing the boundaries of what's possible. You'll be exposed
          to the latest technologies, methodologies, and industry best
          practices, while contributing your own unique ideas and solutions.
        </p>
      </div>
      <div className="mx-auto mt-12 w-max max-w-[800px] rounded-[20px] bg-[#DDFC9D] px-4 py-1">
        <p
          className={`${MediumFont.className} whitespace-nowrap text-[2.5rem]`}
        >
          {" "}
          Throughout the Realtern journey, you'll:
        </p>
      </div>
    </div>
  );
};

export default Header;
