'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CURVE_HEIGHT = 320;

const HeroVisionBridge = () => {
  return (
    <div
      aria-hidden="true"
      className="relative h-40 md:h-44 lg:h-48 overflow-hidden"
    >
      {/* Compressed color ramp — no grid on the dark upper portion */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #0a0a0c 0%,
              #121216 22%,
              #2a2a30 42%,
              #52525b 58%,
              #71717a 68%,
              #94949a 76%,
              #b0b0b6 82%,
              #cbcbd0 88%,
              #dedee2 92%,
              #ededee 95%,
              #f6f6f7 97.5%,
              #fcfcfc 99%,
              #ffffff 100%
            )
          `,
        }}
      />

      {/* Soft ambient glow — lower half only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_85%,rgba(255,255,255,0.05),transparent_65%)]" />

      {/* Muted grid — lower portion only */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.6) 75%, white 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.6) 75%, white 100%)',
        }}
      />

      {/* Curves — fixed scale, anchored to bottom (top clips, shape unchanged) */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: CURVE_HEIGHT }}
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="bridge-line-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="0.15" />
            <stop offset="50%" stopColor="white" stopOpacity="0.25" />
            <stop offset="80%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bridge-curve-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.03" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M-40 200 C 200 260, 400 140, 720 210 S 1200 280, 1480 190 L 1480 320 L -40 320 Z"
          fill="url(#bridge-curve-fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <motion.path
          d="M-40 200 C 200 260, 400 140, 720 210 S 1200 280, 1480 190"
          stroke="url(#bridge-line-fade)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.path
          d="M-40 160 C 280 100, 520 240, 720 170 S 960 80, 1480 150"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {[
          { cx: 360, cy: 218, delay: 0.6 },
          { cx: 720, cy: 210, delay: 0.75 },
          { cx: 1080, cy: 248, delay: 0.9 },
        ].map((node) => (
          <motion.g key={`${node.cx}-${node.cy}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="4"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: node.delay, ease: 'easeOut' }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="1.5"
              fill="rgba(255,255,255,0.5)"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: node.delay + 0.1, ease: 'easeOut' }}
            />
          </motion.g>
        ))}

        <motion.circle
          cx="720"
          cy="210"
          r="2"
          fill="#C41230"
          fillOpacity="0.7"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1, ease: 'easeOut' }}
        />
      </svg>

      {/* Bottom feather — long, multi-stop blend into Vision white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 md:h-24 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(255, 255, 255, 0.08) 25%,
              rgba(255, 255, 255, 0.28) 45%,
              rgba(255, 255, 255, 0.52) 62%,
              rgba(255, 255, 255, 0.76) 78%,
              rgba(255, 255, 255, 0.92) 90%,
              rgba(255, 255, 255, 0.98) 96%,
              #ffffff 100%
            )
          `,
        }}
      />
    </div>
  );
};

export default HeroVisionBridge;
