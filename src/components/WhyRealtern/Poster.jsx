import Image from "next/image";
import poster from "@/assets/WhyRealtern/poster.png";

const Poster = () => {
  return (
    <div className="max-h-[588px] my-24 p-8 flex items-center justify-center max-w-[814px] mx-auto w-full bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/55f9/aa45/85e505efc8308a1e0f18ef2e1f95aa6c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBUmUqbpPm~OQJaeVrUAvae4emzDBo7wqUhITrBiOdPB9zYk0DZnY0oV96Wc4FSobiNfu3RBxrMLyemImsVJ72nX76UemqRUzcdlE4v3buBUDy4rKyX3c0bsfCdlf6UDxQPmCNkBkNBMGH0yav0NfefA-7BZlzPNHdFpVo0RtNgdESOKG19cCSLd7IdnuTW5hSRfMZpl5lNBiDt29HxQQRkuf6XT0lPNr-RvA0etzQE4X0mFZWfmpxaPrGwRssQH9Gv0zGLa3l5TxebSLjIVogf92VVyz5G08p6Eo8mPcNOAqCe7nz8tLdmqjJ6YbWsNSUuRpPiq2eAiEZm28pNASg__")',
      }}
    >
      <div className=" m-4 flex w-auto flex-col items-start gap-y-4 rounded-[20px] bg-[#FFFFFF] p-4 text-lg text-[#2C2C2C] sm:p-4 md:m-0 max-w-[735px] md:p-12 md:text-xl">
        <p className="leading-[2.6rem] sm:leading-[2.8rem]">
          Employers are looking for candidates who can demonstrate their ability
          to tackle complex problems, think critically, and deliver innovative
          solutions
        </p>
        <p className="leading-[2.6rem] sm:leading-[2.8rem]">
          To differentiate yourself, you need to present something that isn't
          commonly seen on every other resume.
        </p>
        <p className="leading-[2.6rem] sm:leading-[2.8rem]">
          To stand out, you need to go beyond the basics and showcase meaningful
          contributions that highlight your unique abilities and experiences.
        </p>
      </div>
    </div>
  );
};

export default Poster;
