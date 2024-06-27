import { MediumFont } from "@/utils/fonts"

const Hero = () => {
    return (
        <header>
            <div
                className="h-screen w-full bg-cover bg-center bg-opacity-0 flex flex-col justify-center px-4 md:pl-16 lg:pl-32 xl:pl-36"
                style={{
                    backgroundImage:
                        'url("https://s3-alpha-sig.figma.com/img/37cd/866f/a5135ff063ae77069840cc637770cada?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JZHBN8~d1BwwwD1FSC~ZEQoKSAYcFczDejSC3XhcJLMU07swf-d4jAIiLxDlkUIQAhAXjphurxW2SCobLP64Jblpt3hZfbKZiboXw2KxOMxs~xq~p7BV9C3jNxYg17JDtYlwOZk2KHPRAoLklH3a0dSYmDpM72GtRQsS4JRoWhpVdUJaygNMvUBGoJrpyipDFXibsh-4uxnj~sjeo8abEu7xm8P8OUsSSzqXEzV2g1r6CCni~4CnkmzMh~Bh-iO~Vd5QidEVgsiD3LuCkVnB5jR037wvSD9VLbgUTASx0~O4rySD0RYM-GPyJHPZJtMZ3MGHWD2U~ZanQ6EM~xzilA__")',
                }}
            >
                <div className='bg-white max-w-[650px] rounded-[20px] p-5 md:p-8 flex flex-col justify-between'>
                    <h2 className={`${MediumFont.className} text-[30px] md:text-[35px] lg:text-[40px] leading-[3.2rem] lg:leading-[4rem] max-w-[500px] text-[#251C29]/90`}>
                        Realtern as <span className="bg-[#DDFC9D] px-2 md:px-4 py-1 rounded-[20px]">ML Engineer{' '}</span>
                        with real companies to gain
                        real work experience
                    </h2>
                    <p className={`text-[24px] md:text-[28px] leading-[2.5rem] md:leading-[3rem] ${MediumFont.className} mt-6 md:mt-9 lg:mt-12 text-[#544D49]`}>
                        Get that work experience to stand out
                        and land your dream opportunities
                    </p>
                </div>
            </div>
        </header >
    )
}

export default Hero
