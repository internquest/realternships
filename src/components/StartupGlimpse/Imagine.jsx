import { MediumFont } from "@/utils/fonts";

const Imagine = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-16 pb-12">
      <div className="mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder GIF"
          className="h-36 w-36 rounded-[20px]"
        />
      </div>
      <h1
        className={`text-[32px] md:text-[48px] ${MediumFont.className} text-center text-[#2C2C2C]`}
      >
        Imagine being part of a team that's building
      </h1>
    </div>
  );
};

export default Imagine;
