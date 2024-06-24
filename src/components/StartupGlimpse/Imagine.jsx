import { MediumFont } from "@/utils/fonts";

const Imagine = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 md:py-24">
      <div className="mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder GIF"
          className="h-48 w-48 rounded-[20px]"
        />
      </div>
      <h1
        className={`text-[32px] md:text-[48px] ${MediumFont.className} mb-2 text-center text-[#2C2C2C]`}
      >
        Imagine being part of a team that's building
      </h1>
    </div>
  );
};

export default Imagine;
