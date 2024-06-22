import Image from 'next/image'
import poster from '@/assets/WhyRealtern/poster.png'

const Poster = () => {
    return (
        <div className=" w-full h-full py-20 flex items-center justify-center relative ">
            <Image
                src={poster}
                alt="photo"
                className="w-full md:w-ful h-[477px] sm:h-[620px] md:h-[585px] object-cover sm:object-contain"
            />
            <div className="w-auto md:w-[735px] m-4 sm:m-10 md:m-0 p-4 sm:p-6 md:p-12 absolute bg-[#FFFFFF] flex flex-col items-start gap-y-4 sm:gap-y-7 md:gap-y-12 text-lg md:text-xl text-[#2C2C2C] rounded-[20px]">
                <p className="leading-[30px] sm:leading-[34px]">
                    Employers are looking for candidates who can demonstrate their ability
                    to tackle complex problems, think critically, and deliver innovative
                    solutions
                </p>
                <p className="leading-[30px] sm:leading-[34px]">
                    To differentiate yourself, you need to present something that isn't
                    commonly seen on every other resume.
                </p>
                <p className="leading-[30px] sm:leading-[34px]">
                    To stand out, you need to go beyond the basics and showcase meaningful
                    contributions that highlight your unique abilities and experiences.
                </p>
            </div>
        </div>
    )
}

export default Poster
