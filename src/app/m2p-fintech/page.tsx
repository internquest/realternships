import Image from 'next/image'
import React from 'react'
import { MediumFont, RegularFont } from '../../utils/fonts'
import dream from ".././../assets/jobposts/man-looking-city-night-min_1.png"
import nopeople from '.././../assets/jobposts/Group.png'
import rating from '.././../assets/jobposts/rating.png'
import m2p from '.././../assets/jobposts/m2pfintech_logo-min 1.png'
const page = () => {
    return (
        <div className='mx-auto w-full flex flex-col gap-5 '>
            <div className='h-[801px] relative flex flex-col gap-10 justify-center items-center'>
                <Image src={dream} alt='dream' fill={true} priority={true} className='absolute w-full h-full' />

                <h2 className={`text-white ${MediumFont.className} text-[5rem] md:text-[6rem] z-[1] relative mt-24`}>Dream it</h2>
                <div className='rounded-[10px] mx-2 bg-white border flex flex-col border-[#D7D7D7] z-[1] relative py-8 pl-8 pr-16 max-w-[438px] min-h-[227px] gap-9'>
                    <div className='flex justify-between gap-24 items-center '>
                        <div className='flex  gap-5'>
                            <Image src={m2p} alt='' width={60} height={60} />
                            <h2 className={`text-[#4A5FF7] ${MediumFont.className} max-w-[101px] font-medium text-[1.5rem] leading-[2rem] tracking-normal -mt-1 self-start`}>M2P Fintech</h2>
                        </div>
                        <div className='flex flex-col gap-3 items-end '>
                            <div className='flex text-[#505050]/[.8] gap-2 '>
                                <Image src={nopeople} alt='' width={19} height={19} />
                                <p className={`${MediumFont.className} text-[1rem] leading-[1.5rem] tracking-normal font-medium`}>04</p>
                            </div>
                            <div className='text-[#505050] flex gap-2 items-center '>
                                <div className='h-[20px] w-[20px]'>

                                    <Image src={rating} alt='' width={17.77} height={16.93} />
                                </div>
                                <p className={`${MediumFont.className} text-[#505050]/[.8] font-medium text-[1rem] leading-[1.5] tracking-[.005em] `}>4000</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[346px] max-h-[50px] flex flex-grow gap-2 items-center px-5 border-t border-b border-[#D7D7D7] bg-white '>
                        <div className='w-[125px] flex gap-2'>

                            <div className='bg-[#38D37F]  rounded-[10px] w-[15px] h-[15px]'></div>
                            <div className='bg-[#D5F4DE]  rounded-[10px] w-[15px] h-[15px]'></div>
                            <div className='bg-[#D5F4DE]  rounded-[10px] w-[15px] h-[15px]'></div>
                            <div className='bg-[#D5F4DE]  rounded-[10px] w-[15px] h-[15px]'></div>
                            <div className='bg-[#D5F4DE]  rounded-[10px] w-[15px] h-[15px]'></div>
                            <div className='bg-[#D5F4DE]  rounded-[10px] w-[15px] h-[15px]'></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full px-2'>
                <div className='bg-[#E6E8FE] max-w-[1236px] rounded-[20px] min-h-[512px]   mx-auto flex flex-col gap-5 items-center'>

                    <h2 className={`${MediumFont.className} font-medium text-[2rem] leading-[2] tracking-normal mt-2`}>For SDE role</h2>
                    <div className={`bg-[#4A5FF7] mx-2 rounded-[20px] max-w-[900px] py-3  min-h-[366px]`}>
                        <div className={`w-full px-10 text-white ${RegularFont.className} text-[1.125rem] leading-[2] tracking-[.009em] font-medium border-b-2 border-white/[.5] pt-7 pb-8`}>
                            Must have developed object-oriented models and designed data structures for new software
                            projects and implemented business logic and data models with a suitable class design.
                        </div>
                        <div className={`w-full px-10 text-white ${RegularFont.className} text-[1.125rem] leading-[2] tracking-[.009em] font-medium border-b-2 border-white/[.5] pt-7 pb-8`}>
                            Must have conducted software analysis, programming, testing, and debugging, as well as
                            recommended changes to improve the established processes
                        </div>
                        <div className={`w-full px-10 text-white ${RegularFont.className} text-[1.125rem] leading-[2] tracking-[.009em] font-medium  pt-7 pb-8`}>
                            Must have demonstrated experience building large scale, performant, reliable & sustainable systems
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full z-[1] -mb-5 px-2'>
                <div className='bg-[#DDFC9D] max-w-[1236px] rounded-[20px] min-h-[1027px] mx-auto flex flex-col items-center gap-14 px-2 '>
                    <h2 className={`${MediumFont.className} text-[2.5rem] leading-[1.2] mt-16 font-semibold tracking-[.025em]`}>Tech stack</h2>
                    <div className='w-full'>
                        <div className='bg-white border-[5px] mx-auto rounded-t-[20px] p-10 border-[#C5E28C] max-w-[850px] min-h-[268px]'>
                            <div className={`bg-[#4E51FD] text-white ${MediumFont.className} font-medium text-[1.2rem] md:text-[1.375rem] leading-[2] tracking-wide rounded-[10px] p-5 md:p-10 pb-12`}>
                                Here’s a lineup of techstack/skillset you are expected to be
                                proficient with
                            </div>
                        </div>

                        <div className='bg-[#3B3B3A] [&_div]:border-b [&_div]:border-white/[.3] max-w-[850px] mt-5 rounded-[10px] mx-auto min-h-[411px]'>
                            <div className={`flex  text-white ${MediumFont.className} h-[25%] `}>
                                <div className='px-3 md:px-10 w-[32%] border-r-[1.5px] border-white py-10 font-medium text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>Core Java</div>
                                <div className=' px-3 md:px-10 py-10 flex-grow font-medium text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>Spring Security </div>

                            </div>
                            <div className={`flex text-white ${MediumFont.className} h-[25%] `}>
                                <div className='px-3 md:px-10 w-[32%] py-10 border-r-[1.5px] border-white font-medium text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>J2EE</div>
                                <div className=' px-3 md:px-10 py-10 flex-grow font-medium text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>MS SQL Server </div>

                            </div>
                            <div className={`flex text-white ${MediumFont.className} h-[25%] `}>
                                <div className='px-3 md:px-10 w-[32%] border-r-[1.5px] border-white py-10 font-medium text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>Spring MVC</div>
                                <div className=' px-3 md:px-10 py-10 font-medium flex-grow text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>Redis </div>

                            </div>
                            <div className={`flex text-white ${MediumFont.className} h-[25%] `}>
                                <div className='px-3 md:px-10 w-[32%] border-r-[1.5px] border-white py-10 font-medium text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>Spring REST APIs</div>
                                <div className=' px-3 md:px-10 py-10 font-medium flex-grow text-[1.1rem] md:text-[1.25rem] leading-[1.4rem] tracking-normal'>Angular/React </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
