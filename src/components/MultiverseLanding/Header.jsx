import { SemiBoldFont, MediumFont } from "@/utils/fonts";

const Header = () => {
  return (
    <header>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/560f/5594/3336bf49f631d1588fe14fee03a1200c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jv11O6v-qwFgBhAYrjq4qe6FA3kMF1EfGGvqzPoZQaOT3ZJGLC1XelCBFZWGgAIHQWrq9swOSgqFoFXm6IYglJlxWcloCOZpPpo4FDd~ylD5ihkgFdKd20NlQL6bV2vCgNluJsjovsWN6-7MqdO2HypGYMj5MkIhHmF1a0ue4CEAQvxxDiEgBt0O8Nm2rH~AqZwfAUBIfCSwSXOen5dUFXi6j~R5iXSJf8TppK15INV3YwjNbZJVdXKYonsyI18z-NWpTDFHwsWTgGr0POhqRjLFqny~uhDQPmmYAB4PAV~Pxe--7DL6QrTfd36jqhYIlj57IQpyjLNXYqMsMjMlxg__')",
        }}
      >
        <div className="px-6 py-24 sm:px-16 lg:px-24 lg:py-36">
          <div className="max-w-[600px]">
            <h1
              className={`mb-4 text-6xl text-white lg:mb-8 lg:text-8xl lg:leading-[5rem] ${SemiBoldFont.className}`}
            >
              A brand new approach to
            </h1>
            <div className="my-2">
              <button
                className={`rounded-[3px] bg-[#DDFC9D] px-2 py-4 text-6xl lg:text-8xl ${MediumFont.className}`}
              >
                big data
              </button>
            </div>
            <p
              className={`mt-4 max-w-[463px] text-lg font-medium leading-[2.5rem] text-white md:text-[21px] lg:mt-6 lg:text-[25px]`}
            >
              Reinventing the way students learn and develop skills needed to
              land dream opportunities in tech
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
