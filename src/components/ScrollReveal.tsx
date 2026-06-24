'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

export const SCROLL_VIEWPORT = { once: true, margin: '-80px' as const };

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section';
};

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  as = 'div',
}: ScrollRevealProps) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_VIEWPORT}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </Component>
  );
};

type ScrollStaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollStagger = ({ children, className }: ScrollStaggerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={SCROLL_VIEWPORT}
    variants={staggerContainerVariants}
  >
    {children}
  </motion.div>
);

type ScrollItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollItem = ({ children, className }: ScrollItemProps) => (
  <motion.div className={className} variants={fadeUpVariants}>
    {children}
  </motion.div>
);
