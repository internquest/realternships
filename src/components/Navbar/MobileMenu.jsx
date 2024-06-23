"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import whiteLogo from "@/assets/global/logo_white.svg";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center px-4">
      <div className="fixed top-11 z-50 mx-auto flex h-max w-[95%] items-center justify-between rounded-full bg-black/30 bg-opacity-25 py-3 pl-3 pr-3 text-white backdrop-blur-lg sm:pl-8">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src={whiteLogo}
              alt="logo"
              width={1200}
              height={1200}
              className="h-6 w-28 object-contain sm:h-8 sm:w-40"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex animate-slide-down flex-col items-center justify-center gap-y-8 bg-black/90 pt-20 text-white">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src={whiteLogo}
              alt="logo"
              width={1200}
              height={1200}
              className="mb-8 h-10 w-40 object-contain"
            />
          </Link>
          <Link
            href="/why-realtern"
            className="menu-item text-xl"
            onClick={() => setIsOpen(false)}
          >
            Why Realtern
          </Link>
          <Link
            href="/community"
            className="menu-item text-xl"
            onClick={() => setIsOpen(false)}
          >
            Community
          </Link>
          <Link
            href="/common-questions"
            className="menu-item text-xl"
            onClick={() => setIsOpen(false)}
          >
            Common Questions
          </Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
