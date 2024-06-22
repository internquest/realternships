import hero from '@/assets/WhyRealtern/hero.png';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className=" w-full h-max flex flex-col   ">
            <div className=" w-full h-[65vh] lg:h-full relative ">
                <Image
                    src={hero}
                    alt="image"
                    className="w-full h-[65vh] lg:h-[92vh] object-cover relative "
                />
                <div className=" w-[6.4rem] sm:w-[12.5rem] h-[3.25rem] rounded-br-[2px] bg-white absolute top-0 left-0  ">
                    {" "}
                </div>
                <div className="absolute -bottom-[1px] left-0 w-[14rem] sm:w-[28.5rem] md:w-[35rem] lg:w-[42rem] xl:w-[50.375rem] h-[3.8rem] sm:h-[5.75rem] xl:h-[6.25rem] rounded-tr-[2px] bg-white  ">
                    {" "}
                </div>
                <div className="absolute -bottom-[0.5px] left-[14rem] sm:left-[28.5rem] md:left-[35rem] lg:left-[42rem] xl:left-[50.375rem] w-12 sm:w-16 xl:w-20 h-12 sm:h-16 xl:h-20 rounded-full bg-white ">
                    {" "}
                </div>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl !leading-loose tracking-[-0.01em] w-full sm:w-[555px] md:w-[40rem] text-[#2C2C2C] pl-2 sm:pl-4 md:ml-6 lg:ml-20 mt-5 sm:mt-5 lg:mt-8 xl:mt-0">
                In today's competitive job market, simply having a portfolio of basic
                projects is no longer enough to stand out or land that dream internship
                opportunity.
            </span>
        </div>
    )
}

export default Hero
