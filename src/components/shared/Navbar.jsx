"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#650A33]">
      <div className="w-full mx-auto flex h-24 items-center justify-between px-6 md:px-12 lg:px-16 2xl:px-6 max-w-[1400px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Velvet Rouge Logo"
            width={90}
            height={30}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-white tracking-widest">
          <Link href="/" className="transition-opacity hover:opacity-80">
            HOME
          </Link>
          <Link href="/about" className="transition-opacity hover:opacity-80">
            ABOUT
          </Link>
          <Link href="/services" className="transition-opacity hover:opacity-80">
            SERVICES
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-80">
            CONTACT US
          </Link>
          <Link
            href="/contact"
            className="ml-2 rounded-full border border-white px-7 py-2.5 transition-all hover:bg-white hover:text-[#650A33]"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#650A33] border-t border-white/10 shadow-xl flex flex-col items-center py-6 gap-6 text-sm font-semibold text-white tracking-widest">
          <Link href="/" className="transition-opacity hover:opacity-80 w-full text-center py-2" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link href="/about" className="transition-opacity hover:opacity-80 w-full text-center py-2" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
          <Link href="/services" className="transition-opacity hover:opacity-80 w-full text-center py-2" onClick={() => setIsOpen(false)}>
            SERVICES
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-80 w-full text-center py-2" onClick={() => setIsOpen(false)}>
            CONTACT US
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full border border-white px-8 py-3 transition-all hover:bg-white hover:text-[#650A33]"
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </nav>
  );
}
