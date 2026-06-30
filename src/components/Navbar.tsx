'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BASE_PATH } from '@/lib/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Team', href: '#team' },
    { name: 'Research', href: '#research' },
    { name: 'Partners', href: '#partners' },
  ];

  const joinLink = {
    name: 'Join Initiative',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdH09t6URK6V6NNzBqQQqhdM0i5MWB22J63IbpcE9pWQy-19Q/viewform',
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b-[6px] border-[#333333] transition-all duration-300 ${
        scrolled
          ? 'bg-[#bb0000]/95 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.35)] backdrop-blur-md'
          : 'bg-[#bb0000] shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]'
      }`}
    >
      <div className="mx-auto flex items-center px-4 py-2.5 lg:px-10 lg:py-3">
        {/* Logos */}
        <div className="flex min-w-0 items-center gap-1.5 lg:gap-3.5">
          <a
            href="https://www.scs.cmu.edu/"
            target="_blank"
            rel="noreferrer"
            className="relative flex h-5 w-auto items-center lg:h-8"
          >
            <img
              src={`${BASE_PATH}/media/cmu_scs_logo.png`}
              alt="Carnegie Mellon University School of Computer Science"
              className="h-full max-w-[110px] w-auto object-contain lg:max-w-none"
            />
          </a>

          <div className="h-5 w-px bg-white/25 lg:h-7" />

          <div className="relative flex h-4 w-auto items-center lg:h-6">
            <img
              src={`${BASE_PATH}/media/i3_transparent.png`}
              alt="Intelligence Cubed"
              className="h-full w-auto object-contain"
            />
          </div>

          <div className="h-5 w-px bg-white/25 lg:h-7" />

          <a
            href="https://modelos.technology/"
            target="_blank"
            rel="noreferrer"
            className="flex shrink items-center"
          >
            <img
              src={`${BASE_PATH}/media/model-os-logo.png`}
              alt="Model OS"
              className="h-4 w-auto object-contain lg:h-[22px]"
            />
          </a>
        </div>

        {/* Nav links + CTA — grouped on the right */}
        <div className="ml-auto flex shrink-0 items-center gap-4 lg:gap-8">
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href={joinLink.href}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#333333] shadow-sm transition-all hover:bg-zinc-100 md:inline-flex"
          >
            {joinLink.name}
          </a>

          <button
            className="text-white/90 hover:text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t-[6px] border-[#333333] bg-[#a30000] lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={joinLink.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#333333] shadow-sm transition-all hover:bg-zinc-100"
              >
                {joinLink.name}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
