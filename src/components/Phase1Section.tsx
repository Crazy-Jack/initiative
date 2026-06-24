'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, HardDrive, TrendingUp } from 'lucide-react';
import Phase1InfrastructureGraphic from '@/components/Phase1InfrastructureGraphic';
import { ScrollStagger, ScrollItem, SCROLL_VIEWPORT, EASE_OUT } from '@/components/ScrollReveal';

const pillars = [
  {
    step: '01',
    title: 'Infrastructure Layer',
    desc: 'Compute matchmaking margin across central cloud + DePIN nodes.',
    Icon: Layers,
  },
  {
    step: '02',
    title: 'Data Sales',
    desc: 'Sell model-training datasets to model creators.',
    Icon: HardDrive,
  },
  {
    step: '03',
    title: 'Outcome',
    desc: 'Higher provider demand + lower training cost for model builders.',
    Icon: TrendingUp,
  },
];

const Phase1Section = () => {
  return (
    <ScrollStagger className="px-6 pb-4 pt-10 md:px-10 md:pb-6 md:pt-14 lg:px-14">
          {/* Header */}
          <ScrollItem className="flex flex-col items-center text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C41230] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C41230]" />
              </span>
              <Database className="text-[#C41230]" size={16} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C41230]">
                Phase 01
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-[1.12] tracking-tight max-w-3xl">
              Compute{' '}
              <span className="text-[#C41230]">×</span>
              {' '}Data Matchmaking
              <br className="hidden sm:block" />
              <span className="text-zinc-500 font-semibold"> for AI Training</span>
            </h3>

            <p className="mt-6 text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl">
              We match compute and data—connecting data providers and compute providers (both
              centralized cloud and decentralized DePIN nodes) to help increase demand and give
              model creators cheaper compute + datasets, especially as scaling laws weaken.
            </p>
          </ScrollItem>

          {/* Diagram stage */}
          <ScrollItem className="relative mb-14 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={SCROLL_VIEWPORT}
              transition={{ duration: 1, ease: EASE_OUT }}
            >
              <Phase1InfrastructureGraphic />
            </motion.div>
          </ScrollItem>

          {/* Pillars — horizontal timeline */}
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-blue-200/60 via-zinc-200 to-amber-200/60" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {pillars.map(({ step, title, desc, Icon }, i) => (
                <ScrollItem key={title}>
                  <motion.div
                    className="group relative h-full p-6 md:p-7 rounded-2xl border border-zinc-100 bg-white/90 backdrop-blur-sm hover:border-[#C41230]/25 hover:shadow-[0_16px_40px_-24px_rgba(196,18,48,0.35)] transition-all duration-300"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 group-hover:border-[#C41230]/40 items-center justify-center z-10 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-[#C41230] transition-colors" />
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-100 flex items-center justify-center group-hover:from-[#C41230]/10 group-hover:to-[#C41230]/5 group-hover:border-[#C41230]/20 transition-colors">
                        <Icon className="text-zinc-600 group-hover:text-[#C41230] transition-colors" size={20} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                          Step {step}
                        </span>
                        <h4 className="text-zinc-900 font-bold text-base md:text-lg mt-1 mb-2 leading-snug">
                          {title}
                        </h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollItem>
              ))}
            </div>
          </div>
        </ScrollStagger>
  );
};

export default Phase1Section;
