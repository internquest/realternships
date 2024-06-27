import { MediumFont } from "@/utils/fonts"

const Header = () => {
    return (
        <div className="min-h-screen bg-[#2F09EF]/70">
            <div className="pt-32 md:pt-44 max-w-[815px] mx-auto px-4 md:text-center">
                <p className={`${MediumFont.className} text-white text-[23px] md:text-[28px] leading-[2.5rem] md:leading-[2.8rem]`}>
                    As a Realtern, you'll have the opportunity to work on a
                    diverse range of projects at the forefront of innovation,
                    collaborating with teams that are pushing the boundaries of
                    what's possible. You'll be exposed to the latest technologies,
                    methodologies, and industry best practices, while contributing
                    your own unique ideas and solutions.
                </p>
            </div>
            <div className="max-w-[800px] px-4 rounded-[20px] py-1 mx-auto bg-[#DDFC9D] w-max mt-12">
                <p className={`${MediumFont.className} text-[2.5rem] whitespace-nowrap`} > Throughout the Realtern journey, you'll:</p>
            </div>

        </div >
    )
}

export default Header
