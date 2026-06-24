'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SCROLL_VIEWPORT, fadeUpVariants } from '@/components/ScrollReveal';

const InitiativeCard = ({
  title,
  subtitle,
  bullets,
  badges,
  MainIcon,
  meta,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  badges?: string[];
  MainIcon: React.ElementType;
  meta?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={SCROLL_VIEWPORT}
    variants={fadeUpVariants}
    whileHover={{
      y: 0,
      scale: 1.0,
      boxShadow: '0 20px 40px -10px rgba(196,18,48,0.1), 0 0 0 1px rgba(196,18,48,0.05)',
    }}
    whileTap={{ y: 1 }}
    transition={{ duration: 0.2, ease: 'easeInOut' }}
    className="w-full max-w-[860px] mx-auto relative overflow-hidden rounded-[24px] bg-white border border-zinc-200 group cursor-pointer shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
    style={{ minHeight: '140px' }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#C41230]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-8 py-6 gap-6">
      <div className="flex items-start md:items-center gap-6 w-full">
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#C41230] flex items-center justify-center border border-[#C41230]/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
          <MainIcon size={28} className="text-white" />
        </div>

        <div className="flex flex-col justify-center flex-grow">
          <h4 className="text-[20px] font-semibold text-zinc-900 leading-tight mb-1">{title}</h4>
          <p className="text-[14px] text-zinc-500 font-medium leading-snug mb-3">{subtitle}</p>

          <ul className="space-y-1 mb-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="text-[13px] text-zinc-600 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#C41230]" />
                {bullet}
              </li>
            ))}
          </ul>

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[11px] font-medium text-zinc-500 bg-zinc-100 rounded-md border border-zinc-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {meta && (
        <div className="hidden md:flex items-center shrink-0 md:ml-auto pl-4 border-l border-zinc-100 h-full min-h-[60px]">
          <span className="text-[13px] font-medium text-[#C41230] tracking-wide uppercase bg-[#C41230]/5 px-3 py-1 rounded-full">
            {meta}
          </span>
        </div>
      )}
    </div>
  </motion.div>
);

export default InitiativeCard;
