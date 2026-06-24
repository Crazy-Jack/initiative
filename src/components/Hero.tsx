'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { BASE_PATH } from '@/lib/constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0c]">
      {/* Background Image */}
      <img
        src={`${BASE_PATH}/media/hero.png`}
        alt="Modelverse Architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — darker on left, lighter on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-blue-900/20" />
      <div className="absolute bottom-0 left-0 right-0 h-36 md:h-40 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/70 to-transparent pointer-events-none" />

      {/* Hero content — left-aligned, no container */}
      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            Intelligence Cubed × Carnegie Mellon University
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="block hero-title-gradient"
            >
              Model Dev
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="block hero-title-gradient"
            >
              Initiative
            </motion.span>
          </h1>

          <p className="text-base md:text-lg text-white/55 leading-relaxed mb-10 max-w-lg">
            A collaborative research ecosystem pioneering cost-effective AGI development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#vision"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white border border-white/30 rounded-full hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Explore Our Vision
              <ArrowUpRight size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#team"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#0a0a0c] bg-gradient-to-r from-white to-blue-100 rounded-full hover:from-white hover:to-white transition-all shadow-[0_0_24px_rgba(255,255,255,0.12)]"
            >
              Meet our Team
              <ArrowRight size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
