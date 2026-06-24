'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '@/components/ScrollReveal';

const RED = '#C41230';
const BLUE = '#3b82f6';
const ORANGE = '#f59e0b';
const CX = 480;
const CY = 188;

const dataNodes: [number, number][] = [
  [88, 120],
  [140, 88],
  [196, 108],
  [224, 168],
  [168, 200],
  [112, 248],
  [196, 260],
  [248, 208],
  [152, 152],
  [208, 148],
];

const computeNodes: [number, number][] = [
  [872, 120],
  [820, 88],
  [764, 108],
  [736, 168],
  [792, 200],
  [848, 248],
  [764, 260],
  [712, 208],
  [808, 152],
  [752, 148],
];

const meshEdges = (nodes: [number, number][], maxDist: number) => {
  const edges: [number, number, number, number][] = [];
  nodes.forEach(([x1, y1], i) => {
    nodes.forEach(([x2, y2], j) => {
      if (j <= i) return;
      const d = Math.hypot(x2 - x1, y2 - y1);
      if (d < maxDist) edges.push([x1, y1, x2, y2]);
    });
  });
  return edges;
};

const dataEdges = meshEdges(dataNodes, 100);
const computeEdges = meshEdges(computeNodes, 100);

const inflowPaths = dataNodes.slice(0, 6).map(([x, y], i) => {
  const midX = 280 + i * 8;
  const midY = CY - 40 + i * 14;
  return `M${x} ${y} Q ${midX} ${midY}, ${CX - 52} ${CY - 8 + (i - 2.5) * 6}`;
});

const outflowPaths = computeNodes.slice(0, 6).map(([x, y], i) => {
  const midX = 680 - i * 8;
  const midY = CY - 40 + i * 14;
  return `M${CX + 52} ${CY - 8 + (i - 2.5) * 6} Q ${midX} ${midY}, ${x} ${y}`;
});

const computeInflowPaths = computeNodes.slice(0, 6).map(([x, y], i) => {
  const midX = 680 - i * 8;
  const midY = CY - 40 + i * 14;
  return `M${x} ${y} Q ${midX} ${midY}, ${CX + 52} ${CY - 8 + (i - 2.5) * 6}`;
});

const DATA_ICON = { x: 68, y: 178 };
const COMPUTE_ICON = { x: 892, y: 178 };
const ENDPOINT_ICON_R = 31;

const EndpointIconBadge = ({
  x,
  y,
  color,
  delay,
  children,
}: {
  x: number;
  y: number;
  color: string;
  delay: number;
  children: React.ReactNode;
}) => (
  <motion.g
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    style={{ transformOrigin: `${x}px ${y}px` }}
  >
    <circle cx={x} cy={y} r={ENDPOINT_ICON_R} fill="#ffffff" fillOpacity="0.9" />
    <g transform={`translate(${x - 12} ${y - 12})`} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </g>
  </motion.g>
);

const Phase1InfrastructureGraphic = () => (
  <div className="relative mx-auto w-full max-w-5xl px-2 py-6 md:py-8">
    <svg viewBox="0 0 960 380" className="w-full h-auto" aria-label="Compute and data matchmaking flow">
      <defs>
        <radialGradient id="p1-glow-blue" cx="20%" cy="45%" r="45%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.12" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="p1-glow-orange" cx="80%" cy="45%" r="45%">
          <stop offset="0%" stopColor={ORANGE} stopOpacity="0.14" />
          <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="p1-glow-red" cx="50%" cy="42%" r="28%">
          <stop offset="0%" stopColor={RED} stopOpacity="0.1" />
          <stop offset="100%" stopColor={RED} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="p1-stream-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.55" />
          <stop offset="100%" stopColor={RED} stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="p1-stream-orange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={RED} stopOpacity="0.35" />
          <stop offset="100%" stopColor={ORANGE} stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <ellipse cx="168" cy="178" rx="160" ry="140" fill="url(#p1-glow-blue)" />
      <ellipse cx="792" cy="178" rx="160" ry="140" fill="url(#p1-glow-orange)" />
      <ellipse cx={CX} cy={CY} rx="120" ry="100" fill="url(#p1-glow-red)" />

      {dataEdges.map(([x1, y1, x2, y2], i) => (
        <line key={`de-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={BLUE} strokeOpacity="0.14" strokeWidth="0.8" />
      ))}
      {dataNodes.map(([x, y], i) => (
        <motion.g
          key={`dn-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04, ease: EASE_OUT }}
        >
          <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={BLUE} fillOpacity="0.12" stroke={BLUE} strokeOpacity="0.35" strokeWidth="0.8" />
          {i % 3 === 0 && <circle cx={x} cy={y} r="1.5" fill={BLUE} fillOpacity="0.8" />}
        </motion.g>
      ))}

      {computeEdges.map(([x1, y1, x2, y2], i) => (
        <line key={`ce-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ORANGE} strokeOpacity="0.14" strokeWidth="0.8" />
      ))}
      {computeNodes.map(([x, y], i) => (
        <motion.g
          key={`cn-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.04, ease: EASE_OUT }}
        >
          <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={ORANGE} fillOpacity="0.12" stroke={ORANGE} strokeOpacity="0.35" strokeWidth="0.8" />
          {i % 3 === 0 && <circle cx={x} cy={y} r="1.5" fill={ORANGE} fillOpacity="0.85" />}
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE_OUT }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      >
        {[78, 62, 48].map((r) => (
          <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke={RED} strokeOpacity="0.08" strokeWidth="1" />
        ))}
        <motion.circle
          cx={CX}
          cy={CY}
          r={54}
          fill="none"
          stroke={RED}
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="3 7"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
        <polygon
          points={`${CX},${CY - 32} ${CX + 28},${CY - 10} ${CX + 28},${CY + 18} ${CX},${CY + 32} ${CX - 28},${CY + 18} ${CX - 28},${CY - 10}`}
          fill={RED}
          fillOpacity="0.06"
          stroke={RED}
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
        <circle cx={CX} cy={CY} r="10" fill={RED} fillOpacity="0.15" stroke={RED} strokeOpacity="0.5" strokeWidth="1.2" />
        <circle cx={CX} cy={CY} r="3.5" fill={RED} fillOpacity="0.9" />
      </motion.g>

      {inflowPaths.map((d, i) => (
        <g key={`in-${i}`}>
          <motion.path
            d={d}
            fill="none"
            stroke="url(#p1-stream-blue)"
            strokeWidth={i === 0 ? 1.8 : 1.2}
            strokeLinecap="round"
            strokeOpacity={0.5}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 + i * 0.08, ease: EASE_OUT }}
          />
          <motion.path
            d={d}
            fill="none"
            stroke={BLUE}
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="2 10"
            strokeOpacity="0.35"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'linear' }}
          />
        </g>
      ))}

      {outflowPaths.map((d, i) => (
        <g key={`out-${i}`}>
          <motion.path
            d={d}
            fill="none"
            stroke="url(#p1-stream-orange)"
            strokeWidth={i === 0 ? 1.8 : 1.2}
            strokeLinecap="round"
            strokeOpacity={0.5}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35 + i * 0.08, ease: EASE_OUT }}
          />
          <motion.path
            d={d}
            fill="none"
            stroke={ORANGE}
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="2 10"
            strokeOpacity="0.35"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 2.2 + i * 0.3, repeat: Infinity, ease: 'linear' }}
          />
        </g>
      ))}

      {[
        { path: inflowPaths[1], color: BLUE, dur: 3.2 },
        { path: inflowPaths[3], color: BLUE, dur: 3.8 },
        { path: computeInflowPaths[1], color: ORANGE, dur: 3.4 },
        { path: computeInflowPaths[4], color: ORANGE, dur: 4 },
      ].map(({ path, color, dur }, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="2"
          fill={color}
          fillOpacity="0.7"
          animate={{ offsetDistance: ['0%', '100%'], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: dur, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
          style={{ offsetPath: `path('${path}')` }}
        />
      ))}

      <EndpointIconBadge x={DATA_ICON.x} y={DATA_ICON.y} color={BLUE} delay={0.45}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 9a8 3 0 0 0 16 0" />
        <path d="M4 14a8 3 0 0 0 16 0" />
        <path d="M4 9v5" />
        <path d="M20 9v5" />
        <path d="M4 14v5" />
        <path d="M20 14v5" />
      </EndpointIconBadge>

      <EndpointIconBadge x={COMPUTE_ICON.x} y={COMPUTE_ICON.y} color={ORANGE} delay={0.55}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v2" />
        <path d="M15 2v2" />
        <path d="M9 20v2" />
        <path d="M15 20v2" />
        <path d="M2 9h2" />
        <path d="M2 15h2" />
        <path d="M20 9h2" />
        <path d="M20 15h2" />
      </EndpointIconBadge>

      <text x="168" y="348" textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="600" letterSpacing="0.14em">
        DATA
      </text>
      <text x={CX} y="348" textAnchor="middle" fill={RED} fillOpacity="0.7" fontSize="11" fontWeight="700" letterSpacing="0.12em">
        MATCHMAKING
      </text>
      <text x="792" y="348" textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="600" letterSpacing="0.14em">
        COMPUTE
      </text>
    </svg>
  </div>
);

export default Phase1InfrastructureGraphic;
