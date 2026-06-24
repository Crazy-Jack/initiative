'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  CircleDollarSign,
  Clock,
  Globe2,
  GraduationCap,
  FileCheck,
  Landmark,
} from 'lucide-react';
import { ScrollStagger, ScrollItem, SCROLL_VIEWPORT, EASE_OUT } from '@/components/ScrollReveal';
import InitiativeCard from '@/components/InitiativeCard';

const CMU_RED = '#C41230';
const CX = 240;
const CY = 148;

const limits = [
  {
    step: '01',
    title: 'Economic Limits',
    Icon: CircleDollarSign,
    accent: 'from-blue-500/10 to-blue-500/5',
    iconColor: 'text-zinc-600 group-hover:text-[#C41230]',
    items: [
      'Inference costs 100–1000x higher than small models',
      'Users pay $150–300/month—not scalable',
      'GPU monopolies keep costs inflated',
    ],
  },
  {
    step: '02',
    title: 'Real Time Limits',
    Icon: Clock,
    accent: 'from-[#C41230]/10 to-[#C41230]/5',
    iconColor: 'text-zinc-600 group-hover:text-[#C41230]',
    items: [
      'Too slow for real-time agents, trading, robotics',
      'Hallucinates on specialized tasks',
      'Scaling law returns are collapsing',
    ],
  },
  {
    step: '03',
    title: 'Ecosystem Limits',
    Icon: Globe2,
    accent: 'from-amber-500/10 to-amber-500/5',
    iconColor: 'text-zinc-600 group-hover:text-[#C41230]',
    items: [
      'One model cannot serve science & technology simultaneously',
      'LLMs fail on long-tail, domain-specific knowledge',
      "Centralized training misses 'niche-domain' expertise",
    ],
  },
];

const Phase2Graphic = () => (
  <div className="relative mx-auto w-full max-w-md md:max-w-lg flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/[0.03] via-[#C41230]/[0.02] to-amber-500/[0.03] blur-xl pointer-events-none" />

    <div className="relative w-full aspect-square max-h-[320px] md:max-h-[360px] mx-auto flex items-center justify-center">
      <svg viewBox="0 0 480 300" className="w-full h-full mx-auto" aria-hidden>
        <defs>
          <linearGradient id="p2-bubble-fill" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor={CMU_RED} stopOpacity="0.18" />
            <stop offset="100%" stopColor={CMU_RED} stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="p2-orbit-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="50%" stopColor={CMU_RED} stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.45" />
          </linearGradient>
          <filter id="p2-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.line
          x1="60"
          y1="48"
          x2="420"
          y2="48"
          stroke={CMU_RED}
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE_OUT }}
        />
        <text
          x={CX}
          y="38"
          textAnchor="middle"
          fill={CMU_RED}
          fillOpacity="0.45"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.15em"
        >
          HARD LIMIT
        </text>

        {[110, 92, 74].map((r, i) => (
          <motion.ellipse
            key={r}
            cx={CX}
            cy={CY}
            rx={r + 16}
            ry={r * 0.72}
            fill="none"
            stroke="url(#p2-orbit-gradient)"
            strokeWidth="1"
            strokeOpacity={0.35 - i * 0.08}
            strokeDasharray="4 7"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: i * 0.15, ease: EASE_OUT }}
          />
        ))}

        <motion.ellipse
          cx={CX}
          cy={CY}
          rx="80"
          ry="66"
          fill="url(#p2-bubble-fill)"
          stroke={CMU_RED}
          strokeOpacity="0.4"
          strokeWidth="1.5"
          filter="url(#p2-glow)"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        <ellipse cx={CX - 28} cy={CY - 26} rx="26" ry="16" fill="white" fillOpacity="0.12" />

        {[
          `M${CX} ${CY - 52} L${CX} ${CY - 30}`,
          `M${CX - 32} ${CY - 2} L${CX - 12} ${CY + 8}`,
          `M${CX + 32} ${CY - 2} L${CX + 12} ${CY + 8}`,
          `M${CX - 20} ${CY + 40} L${CX} ${CY + 52} L${CX + 20} ${CY + 40}`,
          `M${CX - 50} ${CY} L${CX - 28} ${CY}`,
          `M${CX + 50} ${CY} L${CX + 28} ${CY}`,
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke={CMU_RED}
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: EASE_OUT }}
          />
        ))}

        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <circle cx="98" cy="108" r="18" fill="white" fillOpacity="0.85" stroke="#e4e4e7" strokeWidth="1" />
          <circle cx="98" cy="108" r="18" fill="#3b82f6" fillOpacity="0.08" />
          <text x="98" y="112" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="700">
            $
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <circle cx="382" cy="108" r="18" fill="white" fillOpacity="0.85" stroke="#e4e4e7" strokeWidth="1" />
          <circle cx="382" cy="108" r="18" fill={CMU_RED} fillOpacity="0.08" />
          <circle cx="382" cy="108" r="8" fill="none" stroke={CMU_RED} strokeOpacity="0.6" strokeWidth="1" />
          <line x1="382" y1="108" x2="382" y2="102" stroke={CMU_RED} strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="382" y1="108" x2="386" y2="110" stroke={CMU_RED} strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round" />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <circle cx={CX} cy="248" r="18" fill="white" fillOpacity="0.85" stroke="#e4e4e7" strokeWidth="1" />
          <circle cx={CX} cy="248" r="18" fill="#f59e0b" fillOpacity="0.08" />
          <circle cx={CX} cy="248" r="6" fill="none" stroke="#f59e0b" strokeOpacity="0.55" strokeWidth="1" />
          <ellipse cx={CX} cy="248" rx="12" ry="6" fill="none" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="0.8" />
        </motion.g>

        <motion.path
          d={`M116 118 Q 150 130, 175 ${CY} M364 118 Q 330 130, 305 ${CY} M${CX} 230 L ${CX} 214`}
          fill="none"
          stroke="url(#p2-orbit-gradient)"
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeDasharray="4 5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.85, ease: EASE_OUT }}
        />

        {[
          [170, 88],
          [310, 88],
          [CX, 72],
          [130, 200],
          [350, 200],
        ].map(([x, y], i) => (
          <motion.circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="1.5"
            fill={CMU_RED}
            fillOpacity="0.35"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 border-2 border-[#C41230]/25 shadow-[0_8px_32px_-8px_rgba(196,18,48,0.35)]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[#C41230]/[0.03]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <ShieldAlert className="relative text-[#C41230]" size={40} strokeWidth={1.75} />
      </motion.div>
    </div>
  </div>
);

const Phase2Section = () => {
  return (
    <ScrollStagger className="px-6 pb-12 pt-4 md:px-10 md:pb-16 md:pt-6 lg:px-14">
          <ScrollItem className="flex flex-col items-center text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C41230] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C41230]" />
              </span>
              <ShieldAlert className="text-[#C41230]" size={16} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C41230]">
                Phase 02
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-[1.12] tracking-tight max-w-3xl">
              The AI Bubble:{' '}
              <span className="text-[#C41230]">LLMs Are Hitting Their Hard Limits</span>
            </h3>

            <p className="mt-6 text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl">
              A risk-hedging solution to the AI bubble crisis, driving cost reduction and
              efficiency through three core pillars.
            </p>
          </ScrollItem>

          <ScrollItem className="mb-14 md:mb-16 flex justify-center">
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={SCROLL_VIEWPORT}
              transition={{ duration: 0.9, ease: EASE_OUT }}
            >
              <Phase2Graphic />
            </motion.div>
          </ScrollItem>

          <div className="relative mb-16 md:mb-20">
            <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-px bg-gradient-to-r from-blue-200/60 via-zinc-200 to-amber-200/60" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {limits.map(({ step, title, Icon, accent, iconColor, items }) => (
                <ScrollItem key={title}>
                  <motion.div
                    className="group relative h-full p-6 md:p-7 pt-8 md:pt-10 rounded-2xl border border-zinc-100 bg-white/90 backdrop-blur-sm hover:border-[#C41230]/25 hover:shadow-[0_16px_40px_-24px_rgba(196,18,48,0.35)] transition-all duration-300"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 group-hover:border-[#C41230]/40 items-center justify-center z-10 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-[#C41230] transition-colors" />
                    </div>

                    <div className="flex flex-col items-center text-center mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon className={`${iconColor} transition-colors`} size={26} strokeWidth={1.75} />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                        Pillar {step}
                      </span>
                      <h4 className="text-zinc-900 font-bold text-lg md:text-xl mt-1 leading-snug">
                        {title}
                      </h4>
                    </div>

                    <ul className="space-y-3.5 text-left">
                      {items.map((item) => (
                        <li key={item} className="text-zinc-600 text-sm leading-relaxed flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0 group-hover:bg-[#C41230] transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollItem>
              ))}
            </div>
          </div>

          {/* Public-Good Infrastructure — inside Phase 2 container */}
          <div className="pt-12 md:pt-16 border-t border-zinc-200/80">
            <ScrollItem className="text-center mb-10 md:mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="h-px w-8 bg-zinc-300" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C41230]">
                  Initiative
                </span>
                <span className="h-px w-8 bg-zinc-300" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-4 max-w-3xl mx-auto">
                A Public-Good Infrastructure for Intelligence
              </h3>
              <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                We are building an open ecosystem designed to democratize access, protect creator
                rights, and ensure transparent governance.
              </p>
            </ScrollItem>

            <div className="space-y-5">
              <InitiativeCard
                title="Universal AI Access"
                subtitle="Democratizing intelligence through education and industry enablement"
                bullets={[
                  'Subsidized compute credits for academic & nonprofit research',
                  'Sliding-scale access for students and emerging markets',
                  'Standardized APIs for seamless industry integration',
                ]}
                badges={['Education', 'Nonprofit Grants', 'Global Access']}
                MainIcon={GraduationCap}
                meta="Open Opportunity"
              />

              <InitiativeCard
                title="IP & Creator Rights"
                subtitle="Attribution-first architecture with verifiable provenance"
                bullets={[
                  'Immutable on-chain registry for data provenance and licensing',
                  'Granular opt-out mechanisms for content creators',
                  'Fair revenue sharing rails for contributed datasets',
                ]}
                badges={['Provenance', 'Licensing', 'Fair Share']}
                MainIcon={FileCheck}
                meta="Attribution First"
              />

              <InitiativeCard
                title="Community Ownership"
                subtitle="Governance by the people building the future"
                bullets={[
                  'Transparent council for protocol upgrades and policy decisions',
                  'Open standards development for interoperability',
                  'Shared ownership models for infrastructure providers',
                ]}
                badges={['Governance', 'Transparency', 'Open Standards']}
                MainIcon={Landmark}
                meta="Shared Governance"
              />
            </div>
          </div>
        </ScrollStagger>
  );
};

export default Phase2Section;
