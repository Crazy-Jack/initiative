'use client';

import React from 'react';
import Phase1Section from '@/components/Phase1Section';
import Phase2Section from '@/components/Phase2Section';

const PhasesPanel = () => {
  return (
    <div className="relative mb-40">
      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-gradient-to-b from-zinc-50/90 via-white to-white shadow-[0_24px_80px_-40px_rgba(0,0,0,0.14)] md:rounded-[2.5rem]">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500/40 via-[#C41230] to-amber-500/50" />

        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, white 0%, white 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 0%, white 70%, transparent 100%)',
          }}
        />

        {/* Soft corner glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-400/[0.04] blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-1/3 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-[#C41230]/[0.03] blur-3xl" />

        <div className="relative z-10">
          <Phase1Section />

          {/* Phase 1 → Phase 2 transition */}
          <div className="flex justify-center py-4 md:py-6">
            <div className="flex flex-col items-center">
              <div className="h-10 w-px bg-gradient-to-b from-zinc-200 via-zinc-300 to-[#C41230]/50 md:h-14" />
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C41230]/40" />
            </div>
          </div>

          <Phase2Section />
        </div>
      </div>
    </div>
  );
};

export default PhasesPanel;
