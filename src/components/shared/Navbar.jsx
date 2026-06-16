"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const aboutLinks = [
  { label: 'Why We Are Different', href: '/about/why-we-are-different' },
  { label: 'Meet the Founder', href: '/about/meet-the-founder' },
  { label: 'Education & Business Support', href: '/about/education' },
  { label: 'Our Floor Plan', href: '/about/floor-plan' },
  { label: 'FAQ', href: '/about/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#650A33]">
      <div className="w-full mx-auto flex h-24 items-center justify-between px-6 md:px-12 lg:px-16 2xl:px-6 max-w-[1400px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
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
        <div className="hidden lg:flex items-center gap-5 text-[12px] font-semibold text-white tracking-widest">
          <Link href="/" className="transition-opacity hover:opacity-80 whitespace-nowrap">
            HOME
          </Link>

          {/* About Dropdown — CSS group-hover, no JS needed */}
          <div className="relative group">
            <button className="flex items-center gap-1 transition-opacity hover:opacity-80 whitespace-nowrap cursor-default">
              ABOUT
              <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-64 bg-white rounded-xl shadow-2xl overflow-hidden py-2">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-3 text-[11px] font-semibold text-gray-700 hover:bg-[#650A33] hover:text-white transition-colors tracking-widest uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/services" className="transition-opacity hover:opacity-80 whitespace-nowrap">
            SERVICES
          </Link>
          <Link href="/amenities" className="transition-opacity hover:opacity-80 whitespace-nowrap">
            AMENITIES
          </Link>
          <Link href="/blog" className="transition-opacity hover:opacity-80 whitespace-nowrap">
            BLOG
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-80 whitespace-nowrap">
            CONTACT US
          </Link>
          <Link
            href="/contact"
            className="ml-1 rounded-full border border-white px-6 py-2.5 transition-all hover:bg-white hover:text-[#650A33] whitespace-nowrap"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#650A33] border-t border-white/10 shadow-xl z-50">
          <div className="flex flex-col items-center py-6 gap-1 text-sm font-semibold text-white tracking-widest">
            <Link href="/" className="w-full text-center py-3 hover:opacity-80" onClick={() => setIsOpen(false)}>
              HOME
            </Link>

            {/* Mobile About Accordion */}
            <button
              className="w-full text-center py-3 hover:opacity-80 flex items-center justify-center gap-2"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              ABOUT
              <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAboutOpen && (
              <div className="w-full bg-[#4d0826] py-2">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-center py-2.5 text-[11px] text-white/80 hover:text-white hover:opacity-100 tracking-widest uppercase"
                    onClick={() => { setIsOpen(false); setMobileAboutOpen(false); }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/services" className="w-full text-center py-3 hover:opacity-80" onClick={() => setIsOpen(false)}>
              SERVICES
            </Link>
            <Link href="/amenities" className="w-full text-center py-3 hover:opacity-80" onClick={() => setIsOpen(false)}>
              AMENITIES
            </Link>
            <Link href="/blog" className="w-full text-center py-3 hover:opacity-80" onClick={() => setIsOpen(false)}>
              BLOG
            </Link>
            <Link href="/contact" className="w-full text-center py-3 hover:opacity-80" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full border border-white px-8 py-3 transition-all hover:bg-white hover:text-[#650A33]"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
