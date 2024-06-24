import { MediumFont } from "@/utils/fonts";

const Features = () => {
  return (
    <div className="flex items-center justify-center bg-[#E6E8FE] px-4 pb-48 pt-32 sm:pb-56 lg:pb-64">
      <div className="flex h-max w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center justify-start gap-y-10">
          <div className="relative w-full space-y-2 rounded-lg bg-white p-7 pb-12 sm:w-[30rem] xl:w-[36.25rem]">
            <span
              className={`mr-10 text-[1.75rem] text-[#4A5FF7] sm:mr-0 ${MediumFont.className}`}
            >
              Connect and Collaborate
            </span>
            <p className="text-xl leading-[2.375rem] text-black">
              From discussion forums and project showcases to virtual networking
              events and peer mentorship opportunities, you'll have the chance
              to engage with a diverse group of driven students and
              professionals, exchange insights, and forge meaningful
              connections.
            </p>
            <div className="absolute -top-[8.1px] right-0 h-10 w-10 bg-[#E6E8FE]"></div>
            <div className="absolute right-[2.5rem] top-[2rem] h-[1.875rem] w-[1.875rem] bg-[#E6E8FE]"></div>
            <div className="absolute bottom-0 right-20 h-[1.875rem] w-[1.875rem] rounded-full bg-[#E6E8FE]"></div>
          </div>
          <div className="relative w-full space-y-2 rounded-lg bg-white p-7 pb-12 sm:w-[30rem] xl:w-[36.25rem]">
            <span
              className={`mr-10 text-[1.75rem] text-[#4A5FF7] sm:mr-0 ${MediumFont.className}`}
            >
              Learn & Grow
            </span>
            <p className="text-xl leading-[2.375rem] text-black">
              Personal and professional growth are at the heart of the Realtern
              experience, and we offer a wealth of resources to support your
              development. Access exclusive webinars, workshops, and
              skill-building sessions led by industry experts and experienced
              professionals. Gain valuable insights, learn new techniques, and
              stay up-to-date with the latest trends and best practices in your
              field.
            </p>
            <div className="absolute -top-2 right-[5rem] h-[1.875rem] w-[4.688rem] bg-[#E6E8FE]"></div>
            <div className="absolute right-[3.125rem] top-5 h-[1.875rem] w-[1.875rem] bg-[#E6E8FE]"></div>
            <div className="absolute -bottom-7 left-[4.2rem] h-[1.875rem] w-[3.75rem] bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div className="relative w-full space-y-2 rounded-lg bg-white p-7 pb-12 sm:w-[30rem] xl:w-[36.25rem]">
            <span
              className={`mr-10 text-[1.75rem] text-[#4A5FF7] sm:mr-0 ${MediumFont.className}`}
            >
              Share your journey
            </span>
            <p className="text-xl leading-[2.375rem] text-black">
              As a Realtern, you're on a unique journey, working alongside
              companies to tackle challenging real-world projects and contribute
              your own unique ideas. Share your experiences, successes, and
              lessons learned. Whether it's showcasing your latest project,
              seeking feedback, or offering advice to fellow Realterns, this
              space encourages open dialogue and mutual support.
            </p>
            <div className="absolute -top-[9px] right-24 h-[1.875rem] w-[1.875rem] bg-[#E6E8FE]"></div>
            <div className="absolute right-0 top-16 h-[2.813rem] w-[1.875rem] bg-[#E6E8FE]"></div>
          </div>
          <div className="relative w-full space-y-2 rounded-lg bg-white p-7 pb-12 sm:w-[30rem] xl:w-[36.25rem]">
            <span
              className={`mr-10 text-[1.75rem] text-[#4A5FF7] sm:mr-0 ${MediumFont.className}`}
            >
              Celebrate Success
            </span>
            <p className="leading-[2.375rem text-xl text-black">
              We believe in celebrating the achievements of realterns. Our
              platform showcases the outstanding work and innovative ideas of
              Realterns. From project spotlights to success stories, we shine a
              light on the remarkable contributions of every realtern, inspiring
              others and fostering a culture of recognition and excellence.
            </p>
            <div className="absolute -top-7 right-60 h-[2.5rem] w-[2.5rem] rounded-full bg-[#E6E8FE]"></div>
            <div className="absolute -bottom-[0.5px] right-16 h-[1.26rem] w-[6.25rem] bg-[#E6E8FE]"></div>
            <div className="absolute -bottom-8 -left-9 h-[2.688rem] w-[2.5rem] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
