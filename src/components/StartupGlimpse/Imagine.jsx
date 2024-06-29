import { MediumFont } from "@/utils/fonts";

const Imagine = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-12 pt-16">
      <div className="mb-8">
        <img
          src="https://s3-alpha-sig.figma.com/img/29ba/fddd/6ee1ea39249c5e20a2f236c49a97af32?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SM3EUC-NSNu4TJX2ztuOKarolqYIXOxHGRIpu34juyk2unDMEBo~xjoDCJJhG8fwi6BL7UWoQZAoy4wVjWncPhLXC4aSXuBERlqLn9OmQbaDZ3ZvjlMzc3DxqalYzwfg15XN9MjNoBTA~8ZU3b45~zoqe9xR-95r51Bmnmex4PSbmXZXS96e85vDgFRs41BZy5ZnLQczojCgO8NZku93s~Ls3oEzR~x1bxo6U1jgE-XNDZCIuIyHGh4T-bNNXzt8BXc7tZ3IBHaMdGgSDJ1ePCP2sbwfLTsrA8D1Y0X3astXDi9NC~yQoA0lLDZlKOgH1sOEhQRmsr9ZWO8IHx3EVQ__"
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
