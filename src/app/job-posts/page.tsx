import Image from 'next/image'
import React from 'react'
// import dream from '../jobPosts/man-looking-city-night-min_1.png'
import dream from ".././../assets/jobposts/man-looking-city-night-min_1.png"
import { BoldFont, MediumFont, RegularFont } from '../../utils/fonts'
import beautifulCity from '.././../assets/jobposts/beautiful-city-view-min 1.png'
import atlssin from '.././../assets/jobposts/atlassian_logo 2.png'
import nopeople from '.././../assets/jobposts/Group.png'
import rating from '.././../assets/jobposts/rating.png'
import m2p from '.././../assets/jobposts/m2pfintech_logo-min 1.png'
import Link from 'next/link'
const page = () => {
    return (
        <div className='mx-auto w-full flex flex-col '>
            <div className='h-[801px] relative flex justify-center items-center'>
                <Image src={dream} alt='dream' fill={true} priority={true} className='absolute w-full h-full' />

                <h2 className={`text-white ${MediumFont.className} text-[5rem] md:text-[6rem] z-[1] -mt-40`}>Dream it</h2>

            </div>
            <div className=' mx-auto  w-full   mt-[-30px] z-[1] h-[1283px]'>
                <div className='w-full flex justify-center bg-white rounded-[30px]'>
                    <div className='flex   flex-col md:flex-row py-10 px-2  gap-5 '>
                        <div>
                            <div className='relative min-h-[400px] max-w-[454px] px-11 py-14'>
                                <Image src={beautifulCity} alt='' fill={true} className='absolute' />
                                <p className={`${RegularFont.className} text-[2.65rem] text-white z-[1]  relative max-w-[354px] leading-[1.6] tracking-[.007em] font-semibold`}>Experience is the
                                    bridge. Build yours
                                    to your <span className={`bg-[#DDFC9D] text-[#2C2C2C] font-bold rounded-sm px-3  ${RegularFont.className}`}> dream </span>
                                    company</p>
                            </div>
                            <div className='bg-[#4A5FF7] rounded-[10px] pl-5 pr-3 py-4 h-[225px] mt-3 max-w-[450px]'>
                                <p className={`${RegularFont.className} font-semibold text-[1.25rem] leading-[2] tracking-[.0165em] text-white`}>Apply today to experience what it takes to be
                                    a Realtern, gain real work experience which
                                    can be your ticket to leading tech companies</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <div className='rounded-[10px] bg-white border flex flex-col border-[#D7D7D7] py-8 pl-8 pr-16 max-w-[438px] min-h-[227px] gap-9'>
                                <div className='flex justify-between gap-24 items-center '>
                                    <div className='flex  gap-5'>
                                        <Image src={atlssin} alt='' width={60} height={60} />
                                        <h2 className={`text-[#4A5FF7] ${MediumFont.className} max-w-[101px] font-medium text-[1.7rem] leading-[2rem] tracking-normal -mt-1 self-start`}>Atlassian</h2>
                                    </div>
                                    <div className='flex flex-col gap-3 items-end '>
                                        <div className='flex text-[#505050]/[.8] gap-2 '>
                                            <Image src={nopeople} alt='' width={19} height={19} />
                                            <p className={`${MediumFont.className} text-[1rem] leading-[1.5rem] tracking-normal font-medium`}>07</p>
                                        </div>
                                        <div className='text-[#505050] flex gap-2 items-center '>
                                            <div className='h-[20px] w-[20px]'>

                                                <Image src={rating} alt='' width={17.77} height={16.93} />
                                            </div>
                                            <p className={`${MediumFont.className} text-[#505050]/[.8] font-medium text-[1rem] leading-[1.5] tracking-[.005em] `}>6000</p>
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
                            <Link href='/m2p-fintech' className='rounded-[10px] bg-white border flex flex-col border-[#D7D7D7] py-8 pl-8 pr-16 max-w-[438px] min-h-[227px] gap-9'>
                                <div className='flex justify-between gap-24 items-center '>
                                    <div className='flex  gap-5'>
                                        <Image src={m2p} alt='' width={60} height={60} />
                                        <h2 className={`text-[#4A5FF7] ${MediumFont.className} max-w-[101px] font-medium text-[1.7rem] leading-[2rem] tracking-normal -mt-1 self-start`}>M2P Fintech</h2>
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
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
