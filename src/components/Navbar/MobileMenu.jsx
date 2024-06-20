"use client";
import React, { useState } from "react";
import { MediumFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import whiteLogo from "@/assets/global/logo_white.svg";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center px-4">
            <div className="fixed top-11 z-50 bg-black/30 backdrop-blur-lg bg-opacity-25 h-max py-3 pl-3 sm:pl-8 pr-3 text-white flex items-center justify-between mx-auto rounded-full w-[95%]">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Image
                            src={whiteLogo}
                            alt="logo"
                            width={1200}
                            height={1200}
                            className="w-28 sm:w-40 h-6 sm:h-8 object-contain"
                        />
                    </Link>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? (
                            <FiX size={24} />
                        ) : (
                            <FiMenu size={24} />
                        )}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-center gap-y-8 pt-20 animate-slide-down z-40">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <Image
                            src={whiteLogo}
                            alt="logo"
                            width={1200}
                            height={1200}
                            className="w-40 h-10 object-contain mb-8"
                        />
                    </Link>
                    <Link href="/why" className="menu-item text-xl" onClick={() => setIsOpen(false)}>
                        Why Realtern
                    </Link>
                    <Link href="/Community" className="menu-item text-xl" onClick={() => setIsOpen(false)}>
                        Community
                    </Link>
                    <Link href="/common-questions" className="menu-item text-xl" onClick={() => setIsOpen(false)}>
                        Common Questions
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MobileMenu;
