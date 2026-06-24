'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PhasesPanel from '@/components/PhasesPanel';
import {
  SCROLL_VIEWPORT,
  fadeUpVariants,
  staggerContainerVariants,
} from '@/components/ScrollReveal';

const Vision = () => {
  return (
    <section id="vision" className="relative bg-white overflow-hidden -mt-px">
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, white 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-6 pt-8 md:pt-12 pb-24 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto mb-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-zinc-300" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C41230]">
              Vision
            </span>
            <span className="h-px w-8 bg-zinc-300" />
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-900 tracking-tight"
          >
            Our Evolution{' '}
            <span className="text-[#C41230]">Roadmap</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            From compute efficiency to the ultimate goal of Artificial General Intelligence,
            we are architecting the future of decentralized systems.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="mt-10 flex justify-center">
            <div className="h-12 w-px bg-gradient-to-b from-zinc-300 to-transparent" />
          </motion.div>
        </motion.div>

        <PhasesPanel />
      </div>
    </section>
  );
};

export default Vision;
