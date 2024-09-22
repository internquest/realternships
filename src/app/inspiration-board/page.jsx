import { BoldFont, MediumFont, RegularFont } from '@/utils/fonts'
import React from 'react'

const InspirationBoard = () => {
    return (
        <div className='mt-40 sm:mx-auto overflow-hidden max-w-[1280px] flex px-1 sm:px-4 flex-col gap-5 '>
            <div className='flex flex-col lg:flex-row items-center  gap-4 justify-center '>
                <div className={`max-w-[707px] min-h-[451px] flex flex-col gap-4 items-center ${MediumFont.className}  bg-[#E6E8FE] px-2 sm:px-4 py-6 text-[#2c2c2c] rounded-[10px]`}>
                    <h1 className={` font-black text-[3.5rem] sm:text-[4rem] leading-[4.5rem] tracking-wide ${BoldFont.className}  text-[#2c2c2c]/[.6]  `}>01</h1>
                    <p className=' font-medium text-[.95rem] sm:text-[1.25rem] leading-6 tracking-wide   text-[#2c2c2c]/[.9]   '>For students aiming for Fintech companies like</p>
                    <div className={`flex gap-5 self-start mt-3 sm:ml-8 text-[#2C2C2C]/[0.5] ${BoldFont.className} `}>
                        <p className='text-[1.1rem] sm:text-2xl font-black leading-7 tracking-wide'>PAYTM</p>
                        <p className='text-[1.1rem] sm:text-2xl font-black leading-7 tracking-wide'>PHONEPE</p>
                        <p className='text-[1.1rem] sm:text-2xl font-black leading-7 tracking-wide'>RAZORPAY</p>
                        <p className='text-[1.1rem] sm:text-2xl font-black leading-7 tracking-wide  text-[#2C2C2C]/[0.6] '>CRED</p>
                    </div>
                    <div className='pr-8 pl-6 max-w-[662px] pt-8 py-10 bg-[#4A5FF7] rounded-[10px] font-medium text-[1.1rem] sm:text-[1.25rem] leading-10 text-white mb-4 tracking-normal'>A web3 and web2 payment gateway offering a diverse range of
                        payment methods catering to all customer preferences & ensuring
                        a seamless payment experience</div>
                </div>
                <div className={`max-w-[530px] min-h-[451px] flex flex-col items-center justify-between ${MediumFont.className} rounded-[10px] border-[5px] border-[#4A5FF7] px-7 pb-5 opacity-60  `}>
                    <div>
                        <h1 className={` font-black text-[3.5rem] sm:text-[4rem] leading-[4.5rem] ${BoldFont.className} tracking-wide text-[#4A5FF7] text-center   pt-6 `}>02</h1>
                        <p className='font-medium text-[1.25rem] sm:text-2xl leading-10 tracking-[0.02rem] mt-2 text-[##544449CC]/[0.8] '>A Walk-2-Earn mobile game to promote
                            physical activity by rewarding players
                            with game tokens for each step they take.</p>
                    </div>
                    <div className={`${BoldFont.className} self-end font-bold text-[4rem] leading-10 tracking-wide text-[#5F71F8B2]/[70] mb-4 `} >#rewards</div>
                </div>
            </div>
            <div className='bg-[#3B3B3A] flex flex-col rounded-[10px] '>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <div className={`flex flex-col ${MediumFont.className}  text-[#DDFC9D] ml-8 gap-8`}>
                        <h1 className={` font-black text-[3.5rem] sm:text-[4rem] leading-[4.5rem] tracking-wide ${BoldFont.className} text-[#DDFC9D]/[0.8]    mt-9  `}>03</h1>
                        <p className='max-w-[338px] font-medium text-[1.25rem] mr-5 sm:mr-0 text-2xl tracking-[0.02em] leading-[2.75rem]'>AI Fake News Detector to test
                            the  credibility of news articles
                            by either uploading text files
                            or article  URLs or even just
                            inputting text.</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='max-w-[794px] mt-8 px-7 ml-5 lg:ml-0 mr-5 py-12 border-2 border-[#FFFFFF] rounded-[10px] border-opacity-60'>
                            <p className={`${MediumFont.className}  font-medium text-xl leading-[2.25rem] text-[#ffffff] tracking-wide`}>
                                Develop an AI model capable of distinguishing between actual and false news
                                articles. To achieve this, you will create a comprehensive dataset consisting of
                                both true and fake news articles. This dataset will serve as the foundation for
                                training, validating, and testing the AI model
                            </p>
                        </div>
                        <p className={`${BoldFont.className} self-end text-3xl sm:text-5xl leading-[1.2] mt-12 mr-10 sm:mr-5 text-[#ffffff]/[0.6] `}>Expected Outcomes</p>
                    </div>
                </div>

                <div className=' ml-1 sm:ml-6 mr-1 sm:mr-16 mt-8 flex flex-col lg:flex-row items-center lg:items-stretch sm:pl-7 py-3 sm:py-7 gap-2 sm:gap-5  rounded-[5px] bg-[#FFFFFF]'>
                    <div className='flex flex-col w-full lg:w-[350px] items-start gap-11 pl-7 py-4 mr-8 lg:mr-0 sm:py-8 pr-12 bg-[#ECEDEA] rounded-[10px] '>
                        <p className={`${MediumFont.className}  text-2xl font-semibold leading-[1.25] tracking-wide text-[#2C2C2C]`}>Comprehensive Dataset</p>
                        <p className={`text-[#2C2C2CB2]/[.7] ${MediumFont.className} font-medium  -tracking-wide  text-[22px] leading-[2] `}>A well-curated and labeled
                            dataset of actual and false
                            news articles that can be
                            used for training and testing
                            AI models.</p>
                    </div>

                    <div className='flex flex-col w-full lg:w-[350px] items-start gap-11 pl-7 py-8 pr-4 mr-8 lg:mr-0 bg-[#ECEDEA] rounded-[10px]'>
                        <p className={`${MediumFont.className} text-2xl font-semibold leading-[1.25] tracking-wide text-[#2C2C2C]`}>Trained AI Model</p>
                        <p className={`text-[#2C2C2CB2]/[.7] ${MediumFont.className} font-medium  -tracking-wider  w-full lg:max-w-[295px]  text-[22px] leading-[2] `}>An AI model capable of
                            accurately identifying fake news
                            articles, with performance
                            metrics clearly documented.</p>
                    </div>


                    <div className='flex flex-col  w-full lg:max-w-[359px] items-start gap-11 pl-7 py-8 pr-4 mr-8 lg:mr-0 bg-[#ECEDEA] rounded-[10px]'>
                        <p className={`${MediumFont.className} text-2xl font-semibold leading-[1.25] tracking-wide text-[#2C2C2C]`}>Insightful Analysis</p>
                        <p className={`w-full lg:max-w-[313px] text-[#2C2C2CB2]/[.7] ${MediumFont.className} font-medium -tracking-[0.04em]    text-[22px] leading-[2] `}>A detailed analysis of the model's
                            performance, including strengths,
                            weaknesses, and potential areas
                            for improvement.</p>
                    </div>

                </div>

                <div className={`${MediumFont.className} font-medium text-[1.55rem] sm:text-4xl ml-7 sm:ml-0 leading-10 flex sm:self-end  mr-16 mt-4 tracking-wide text-white/[.8]`}>#machine-learning</div>
                <div className={`${MediumFont.className} font-medium text-[1.55rem] sm:text-4xl  leading-10 flex self-end   mr-20 sm:mr-16 mt-8 mb-16 tracking-wide text-white/[.8]`}>#artificial-intelligence</div>
            </div>

            <div className='min-h-5 w-full gap-8  flex flex-col lg:flex-row'>
                <div className='bg-[#8524FF] flex flex-col flex-grow gap-16 w-full lg:max-w-[720px] px-4 pl-5 rounded-[10px] pt-1'>
                    <h1 className={` font-black text-[3.2rem] leading-[3.5rem] tracking-wide ${BoldFont.className} text-[#FCD69C]    mt-9  `}>04</h1>
                    <p className={`${MediumFont.className} text-[22px] leading-[2] tracking-[.01em] mb-16 text-white font-medium lg:max-w-[658px]`}>Develop an intelligent Discord bot that uses artificial intelligence
                        to detect and prevent spam, fraud, and cyberbullying in real-time.
                        This bot will serve as an automated moderator, enhancing server
                        safety and user experience.</p>
                </div>
                <div className='w-full lg:max-w-[498px] rounded-[10px] flex-grow flex flex-col p-6 px-4 pl-8 pt-1 gap-8 bg-[#FAD49B]'>
                    {/* <div className='bg-white w-[70%] self-end h-9'></div> */}
                    {/* <div className='bg-white flex w-full h-full'></div> */}
                    <h1 className={` font-black text-[3.2rem] leading-[3.5rem] tracking-wide ${BoldFont.className} text-[#383227]/[.8]    mt-9  `}>05</h1>
                    <p className={`${MediumFont.className} text-[20px] leading-[2] tracking-[.02em] mb-16 text-[#383227]/[.7] font-medium lg:max-w-[383px]`}>A Next.js boilerplate that contains
                        everything for developing  any AI, SaaS,
                        AI tool or any other web application by
                        saving time for developers with
                        authenticating users, stripe and lemon
                        squeeze payment integration, integrating
                        AI tools,  API setup, & more...</p>
                </div>

            </div>

            <div className='flex flex-col sm:flex-row gap-5 '>
                <div className='max-w-[601px] bg-[#DDFC9D] min-h-[167px] pl-6 flex flex-grow items-end pb-10 pr-20 rounded-[20px]'>
                    <p className={`${MediumFont.className} font-medium text-[1.375rem] tracking-normal leading-[1.5rem] max-w-[491px] text-[#2C2C2C/[.8]]`}>
                        AI stock market research tool for retail investors
                    </p>
                </div>
                <div className='max-w-[601px] bg-[#3B3B3A] min-h-[167px] pl-6 flex flex-grow items-end pb-10 pr-20 rounded-[20px]'>
                    <p className={`${MediumFont.className} font-medium text-[1.375rem] tracking-normal text-[#DDFC9D] leading-[1.5rem] max-w-[491px]`}>
                        AI stock market research tool for retail investors
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-5'>
                <div className='flex items-end lg:max-w-[401px] min-h-[205px] bg-[#F7F8FA] flex-grow pb-10 pl-8 pr-8 rounded-[20px] sm:mb-5'>
                    <p className={`${RegularFont.className} text-[1.125rem] font-normal leading-[2rem] tracking-normal text-[#232321] `}>A remote pair programming and team
                        collaboration tool for developers</p>
                </div>

                <div className='flex items-end lg:max-w-[401px] min-h-[205px] bg-[#4A5FF8] flex-grow pb-7 pl-8 pr-10 rounded-[20px] sm:mb-5'>
                    <p className={`${RegularFont.className} lg:max-w-[330px] text-[1.125rem] font-normal leading-[2rem] tracking-[.019em] text-[#FAF7F8] `}>A web client access to the Instagram
                        like you can do on your smartphone but
                        on your computer/browser</p>
                </div>

                <div className='flex items-end lg:max-w-[401px] min-h-[205px] bg-[#F8F7F3] flex-grow pb-7 pl-8 pr-10 rounded-[20px] mb-5'>
                    <p className={`${RegularFont.className} lg:max-w-[330px] text-[1.125rem] font-normal leading-[2rem] tracking-[.019em] text-[#232321] `}>AI powered web data scraper extension
                        to extract any website data easily with
                        just a few clicks.</p>
                </div>
            </div>
        </div>
    )
}

export default InspirationBoard