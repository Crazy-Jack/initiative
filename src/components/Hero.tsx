'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BASE_PATH } from '@/lib/constants';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-136px)] flex flex-col mt-[136px] bg-white">
      {/* Full-width Background Image */}
      <div className="relative w-full flex-1 min-h-[calc(100vh-136px)] bg-zinc-100 overflow-hidden">
        <img 
          src={`${BASE_PATH}/media/hero.png`} 
          alt="Modelverse Architecture" 
          className="w-full h-full object-cover absolute inset-0"
        />
        
        {/* Overlay Card - Absolute on desktop, stacked on mobile */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-0 md:bottom-10 md:right-10 md:left-auto md:w-auto z-20 flex justify-center md:block">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/75 backdrop-blur-md shadow-2xl p-8 rounded-2xl max-w-2xl border border-white/50"
          >
            <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-[#C41230]">
              Intelligence Cubed × Carnegie Mellon University
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-zinc-900 leading-tight">
              Modelverse Dev <br />
              Initiative
            </h1>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8">
              A collaborative research ecosystem pioneering decentralized intelligence and cost-effective AGI development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#vision" className="px-6 py-3 bg-zinc-900 text-white font-bold rounded-full hover:bg-[#C41230] transition-colors text-center text-sm shadow-lg">
                Explore Our Vision
              </a>
              <a href="#team" className="px-6 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-full hover:bg-zinc-50 transition-colors text-center text-sm">
                Meet our Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
