"use client";
import { SemiBoldFont, MediumFont } from '@/utils/fonts';
import { useState } from 'react';

const items = [
    {
        title: 'Build the Next Big Thing',
        content: 'Work on groundbreaking projects that have the potential to revolutionize industries and shape the future',
        titleColor: 'text-[#5F71F8B2]',
    },
    {
        title: 'Gain Cutting-Edge Experience',
        content: 'Immerse yourself in the development of innovative products, services, and technologies, gaining expertise in emerging fields.',
        titleColor: 'text-[#FBD59B]',
    },
    {
        title: 'Contribute Innovative Solutions',
        content: 'Apply your knowledge and skills to solve complex challenges, contributing creative ideas that drive projects forward',
        titleColor: 'text-[#2C2C2C99]',
    },
    {
        title: 'Develop Future-Ready Skills',
        content: 'Enhance your problem-solving, critical thinking, and adaptability – skills that are essential for success in the rapidly changing world of innovation.',
        titleColor: 'text-[#38D37FB2]',
    },
    {
        title: 'Build the Next Big Thing',
        content: 'Work on groundbreaking projects that have the potential to revolutionize industries and shape the future',
        titleColor: 'text-[#846548B2]',
    },
];



const AccordionElements = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const handleClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    return (
        <div className="max-w-[1170px] mx-auto bg-white rounded-[30px] px-16 py-6 -translate-y-28">
            {items.map((item, index) => (
                <div key={index} className={`py-6 ${index < items.length - 1 ? 'border-b border-[#D7D7D7]' : ''}`}>
                    <button
                        onClick={() => handleClick(index)}
                        className={`flex justify-between w-full px-4 py-2 text-left text-[40px] ${item.titleColor} ${SemiBoldFont.className}`}
                    >
                        {item.title}
                        <span className="ml-2 bg-[#4A5FF7] p-3 rounded-full">
                            {openIndex === index ? (
                                <svg width="24" height="24" fill="none" stroke='#fff' viewBox="0 0 24 24">
                                    <path d="M19 15l-7-7-7 7"></path>
                                </svg>
                            ) : (
                                <svg width="24" height="24" fill="none" stroke='#fff' viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            )}
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className={`px-4 py-2 text-[#251729BF] text-[24px] leading-[2.5rem] ${MediumFont.className} max-w-[950px]`}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default AccordionElements
