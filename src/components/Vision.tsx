'use client';

import React from 'react';
import { Database, ShieldAlert, Cpu, CheckCircle2, Globe, GraduationCap, Scale, Users, FileCheck, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { BASE_PATH } from '@/lib/constants';

// Refactored Initiative Card Implementation
const InitiativeCard = ({ 
  title, 
  subtitle, 
  bullets, 
  badges, 
  MainIcon,
  meta
}: { 
  title: string, 
  subtitle: string, 
  bullets: string[], 
  badges?: string[],
  MainIcon: React.ElementType,
  meta?: string
}) => (
  <motion.div 
    whileHover={{ 
      y: 0,
      scale: 1.0,
      boxShadow: "0 20px 40px -10px rgba(196,18,48,0.1), 0 0 0 1px rgba(196,18,48,0.05)"
    }}
    whileTap={{ y: 1 }}
    initial={{ boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02)" }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className="w-full max-w-[860px] mx-auto mb-6 relative overflow-hidden rounded-[24px] bg-white border border-zinc-200 group cursor-pointer"
    style={{ minHeight: '140px' }}
  >
    {/* Inner Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#C41230]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-8 py-6 gap-6">
      {/* Left Column: Icon + Text */}
      <div className="flex items-start md:items-center gap-6 w-full">
        {/* Main Icon Area */}
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#C41230] flex items-center justify-center border border-[#C41230]/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
          <MainIcon size={28} className="text-white" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center flex-grow">
          <h4 className="text-[20px] font-semibold text-zinc-900 leading-tight mb-1">{title}</h4>
          <p className="text-[14px] text-zinc-500 font-medium leading-snug mb-3">{subtitle}</p>
          
          {/* Bullets */}
          <ul className="space-y-1 mb-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="text-[13px] text-zinc-600 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#C41230]" />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {badges.map((badge, i) => (
                <span key={i} className="px-2 py-0.5 text-[11px] font-medium text-zinc-500 bg-zinc-100 rounded-md border border-zinc-200">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Meta / Mechanism */}
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

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-zinc-900 tracking-tighter">
            Our Evolution <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41230] to-purple-600">Roadmap</span>
          </h2>
          <p className="text-zinc-600 text-xl leading-relaxed max-w-2xl mx-auto">
            From compute efficiency to the ultimate goal of Artificial General Intelligence, 
            we are architecting the future of decentralized systems.
          </p>
        </div>

        {/* Phase 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#C41230] flex items-center justify-center shadow-lg shadow-[#C41230]/20">
                <Database className="text-white" size={28} />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-[#C41230] uppercase">Phase 01</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 leading-[1.1]">
              Compute × Data Matchmaking <br/> for AI Training
            </h3>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              We match compute and data—connecting data providers and compute providers (both centralized cloud and decentralized DePIN nodes) to help increase demand and give model creators cheaper compute + datasets, especially as scaling laws weaken.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Infrastructure Layer", desc: "Compute matchmaking margin across central cloud + DePIN nodes." },
                { title: "Data Sales", desc: "Sell model-training datasets to model creators." },
                { title: "Outcome", desc: "Higher provider demand + lower training cost for model builders." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#C41230]/10 flex items-center justify-center group-hover:bg-[#C41230] transition-colors duration-300">
                    <CheckCircle2 className="text-[#C41230] group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 font-bold mb-2 text-lg">{item.title}</h4>
                    <p className="text-zinc-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C41230]/10 to-transparent rounded-[3rem] transform rotate-3"></div>
            <img 
              src={`${BASE_PATH}/media/phase1-diagram.png`} 
              alt="Phase 1 Concept" 
              className="relative w-full rounded-[3rem] border-4 border-white shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
            />
          </div>
        </motion.div>

        {/* Phase 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <div className="text-center max-w-5xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20">
                <ShieldAlert className="text-white" size={28} />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Phase 02</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 leading-[1.1]">
              The AI Bubble: <br/> LLMs Are Hitting Their Hard Limits
            </h3>
            <p className="text-zinc-600 text-xl max-w-3xl mx-auto">
              A risk-hedging solution to the AI bubble crisis, driving cost reduction and efficiency through three core pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Economic Limits",
                items: [
                  "Inference costs 100–1000x higher than small models",
                  "Users pay $150–300/month—not scalable",
                  "GPU monopolies keep costs inflated"
                ]
              },
              {
                title: "Real Time Limits",
                items: [
                  "Too slow for real-time agents, trading, robotics",
                  "Hallucinates on specialized tasks",
                  "Scaling law returns are collapsing"
                ]
              },
              {
                title: "Ecosystem Limits",
                items: [
                  "One model cannot serve science & technology simultaneously",
                  "LLMs fail on long-tail, domain-specific knowledge",
                  "Centralized training misses 'niche-domain' expertise"
                ]
              }
            ].map((pillar, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-200 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group">
                <h4 className="text-2xl font-bold mb-8 text-zinc-900 flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 text-sm font-bold group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                  {pillar.title}
                </h4>
                <ul className="space-y-5">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="text-zinc-600 text-[15px] leading-relaxed flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0 group-hover:bg-purple-500 transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Initiative Pillars Section */}
          <div className="relative py-20 px-6 rounded-[3rem] overflow-hidden bg-zinc-50/50">
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-4">
                  A Public-Good Infrastructure for Intelligence
                </h3>
                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                  We are building an open ecosystem designed to democratize access, protect creator rights, and ensure transparent governance.
                </p>
              </div>

              <div className="space-y-6">
                <InitiativeCard 
                  title="Universal AI Access" 
                  subtitle="Democratizing intelligence through education and industry enablement" 
                  bullets={[
                    "Subsidized compute credits for academic & nonprofit research",
                    "Sliding-scale access for students and emerging markets",
                    "Standardized APIs for seamless industry integration"
                  ]}
                  badges={["Education", "Nonprofit Grants", "Global Access"]}
                  MainIcon={GraduationCap}
                  meta="Open Opportunity"
                />
                
                <InitiativeCard 
                  title="IP & Creator Rights" 
                  subtitle="Attribution-first architecture with verifiable provenance" 
                  bullets={[
                    "Immutable on-chain registry for data provenance and licensing",
                    "Granular opt-out mechanisms for content creators",
                    "Fair revenue sharing rails for contributed datasets"
                  ]}
                  badges={["Provenance", "Licensing", "Fair Share"]}
                  MainIcon={FileCheck}
                  meta="Attribution First"
                />
                
                <InitiativeCard 
                  title="Community Ownership" 
                  subtitle="Governance by the people building the future" 
                  bullets={[
                    "Transparent council for protocol upgrades and policy decisions",
                    "Open standards development for interoperability",
                    "Shared ownership models for infrastructure providers"
                  ]}
                  badges={["Governance", "Transparency", "Open Standards"]}
                  MainIcon={Landmark}
                  meta="Shared Governance"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phase 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Cpu className="text-white" size={28} />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">Phase 03</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 leading-[1.1]">
              Decentralization is the <br/> Only Path to AGI
            </h3>
            <div className="prose prose-lg text-zinc-600 mb-10">
              <p>
                Decentralized Intelligence is the ultimate frontier. As centralized systems hit the limits of marginal utility, a decentralized ecosystem provides a faster, more cost-effective, and highly specialized path to achieving true AGI across niche domains.
              </p>
              <p>
                Centralized Intelligence can be cheaper, faster, and more timely, with better performance covering niche areas.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe size={120} className="text-blue-600" />
              </div>
              <p className="relative z-10 text-blue-900 font-medium text-lg italic leading-relaxed">
                "Centralized scaling laws are reaching their peak; decentralized intelligence offers the performance and scalability required for the next leap in AGI."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] transform rotate-3"></div>
            <img 
              src={`${BASE_PATH}/media/phase3-ai.png`} 
              alt="Decentralized AGI" 
              className="relative w-full rounded-[3rem] shadow-2xl shadow-blue-900/10 transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
