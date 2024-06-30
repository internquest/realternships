import { MediumFont } from "@/utils/fonts";

const ThroughoutJourney = () => {
  return (
    <div className="min-h-screen bg-[#2F09EF]/70 px-4 pb-32">
      <div className="mx-auto max-w-[815px] pt-12 md:pt-24 md:text-center">
        <p
          className={`${MediumFont.className} text-[23px] leading-[3rem] text-white md:text-[28px] md:leading-[3.3rem]`}
        >
          As a Realtern, you'll have the opportunity to work on a diverse range
          of projects at the forefront of innovation, collaborating with teams
          that are pushing the boundaries of what's possible. You'll be exposed
          to the latest technologies, methodologies, and industry best
          practices, while contributing your own unique ideas and solutions.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-[800px] rounded-[20px] bg-[#DDFC9D] px-4 py-2">
        <p className={`${MediumFont.className} text-[28px] md:text-[40px]`}>
          {" "}
          Throughout the Realtern journey, you'll:
        </p>
      </div>
    </div>
  );
};

export default ThroughoutJourney;
