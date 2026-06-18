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
    { name: 'Join Initiative', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdH09t6URK6V6NNzBqQQqhdM0i5MWB22J63IbpcE9pWQy-19Q/viewform' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 flex flex-col">
      {/* Top Bar: Logos */}
      <div className="bg-[#bb0000] py-3 px-6">
        <div className="container mx-auto flex items-center justify-between">
           <div className="flex items-center gap-4 px-4 py-2">
             {/* CMU SCS Logo */}
             <a href="https://www.scs.cmu.edu/" target="_blank" rel="noreferrer" className="relative h-10 w-auto flex items-center">
               <img 
                 src={`${BASE_PATH}/media/cmu_scs_logo.png`} 
                 alt="Carnegie Mellon University School of Computer Science" 
                 className="h-full w-auto object-contain"
               />
             </a>
   
             {/* Divider */}
             <div className="h-8 w-[1px] bg-white/30 mx-1"></div>
   
             {/* Intelligence Cube Logo */}
             <a href="https://intelligencecubed.io/" target="_blank" rel="noreferrer" className="relative h-12 w-auto flex items-center">
               <img 
                 src={`${BASE_PATH}/media/nav-logo-new.png`} 
                 alt="Intelligence Cubed" 
                 className="h-full w-auto object-contain brightness-0 invert"
               />
             </a>
           </div>
           
           {/* Mobile Toggle */}
           <button 
             className="md:hidden text-white"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Bottom Bar: Navigation */}
      <div className={`transition-all duration-300 border-b border-zinc-800 ${scrolled ? 'bg-[#333333]/95 backdrop-blur-md shadow-sm' : 'bg-[#333333]'}`}>
        <div className="container mx-auto px-6">
          <div className="hidden md:flex items-center gap-8 py-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.name === 'Join Initiative' 
                    ? 'ml-auto px-5 py-2 bg-white text-[#333333] rounded-full hover:bg-zinc-200' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium ${
                    link.name === 'Join Initiative' 
                      ? 'text-[#C41230] font-bold' 
                      : 'text-zinc-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
