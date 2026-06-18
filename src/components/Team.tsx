'use client';

import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { BASE_PATH } from '@/lib/constants';

const Team = () => {
  const leadership = [
    {
      name: "Fernando Jia",
      role: "CEO",
      bio: "A seasoned professional with a rich background in tech and business. Guest lecturer at Carnegie Mellon University and University of Michigan. Ex-investor & fellow at Y Combinator, ex-McKinsey consultant, ex-IBD analyst at CITIC Securities. Alumnus of UC Berkeley's Center for Responsible Decentralized Intelligence.",
      links: { linkedin: "https://www.linkedin.com/in/fernando-j/" }
    },
    {
      name: "Tianqin Li",
      role: "Chief Scientist",
      bio: "PhD Researcher in CMU CS Department. Work with Tai Sing Lee (NeurIPS Neuroscience ex-Director), Zico Kolter (CMU AI Director in Computer Science, OpenAI Board member), Ruslan Salakhutdinov (VP Research @ Meta, ex-Apple AI Director, Student of AI's Founding Father, Geoffrey Hinton), and Louis-Philippe Morency (Multimodal AI pioneer professor). Tianqin is also a fellow at Y Combinator. Research focuses on AI models and human intelligence. NeurIPS 2023 Oral presentation (selective 1% of all submissions). Guest lecturer in multiple CMU AI courses.",
      links: { linkedin: "https://www.linkedin.com/in/tianqin-li-b16299170/", website: "http://crazy-jack.github.io/works.html" }
    },
    {
      name: "Florence Li",
      role: "Executive Team",
      bio: "Creative Technology Executive and Stanford CS master specializing in Machine Learning & Blockchain. Scaled MetaY's GPU DePIN platform. Introduced $10M+ in AI and Web3 investments. Frequent speaker at tech summits.",
      links: { linkedin: "https://www.linkedin.com/in/florence-li-18b657206/" }
    }
  ];

  const advisors = [
    {
      name: "Prof. Tai-Sing Lee",
      role: "Director, Lee Lab for Biological & Machine Intelligence, CMU",
      bio: "Full Professor of Computer Science and Neuroscience at CMU. Dual PhDs from Harvard and MIT. Trained leaders at DeepMind, OpenAI, Google, and Berkeley, Yale etc. Recipient of McDonnell-Pew Young Investigator Award, NSF CAREER Award, and ICCV Helmholtz Prize.",
      links: { website: "https://csd.cmu.edu/people/faculty/taising-lee" }
    },
    {
      name: "Orion Parrott",
      role: "Co-Founder & General Partner at Orange DAO",
      bio: "Bay Area entrepreneur and venture investor focused on early-stage Web3 and fintech. Y Combinator Summer '16 alumnus. Executive MBA from UC Berkeley's Haas School of Business.",
      links: { linkedin: "https://www.linkedin.com/in/orionparrott/" }
    }
  ];

  const fellows = [
    { name: "Xuandong Zhao", institution: "postdoc, UC Berkeley BAIR and RDI", link: "https://xuandongzhao.github.io/" },
    { name: "Yuejiang Liu", institution: "postdoc, Stanford AI Lab", link: "https://scholar.google.com/citations?user=Xi-B5WIAAAAJ&hl=en" },
    { name: "Yaqi Xie", institution: "postdoc, CMU Robotics Institute", link: "https://scholar.google.com/citations?user=lBCCo0EAAAAJ&hl=en" },
    { name: "Shiyi Du", institution: "Ph.D., CMU Computational Biology", link: "https://scholar.google.com/citations?user=rVKkjikAAAAJ&hl=en" },
    { name: "Jiayuan Liu", institution: "Ph.D., CMU Computer Science", link: "https://liu-jiayuan.github.io/" },
    { name: "Shang Gao", institution: "Ph.D., Caltech Computational Science", link: "https://scholar.google.com/citations?user=I3WuCWEAAAAJ" },
    { name: "Yitong Li", institution: "Ph.D., Stanford Computational Science", link: "https://www.linkedin.com/in/yitong-li-2b3882299/" },
    { name: "Chengfeng Mao", institution: "Ph.D., MIT", link: "https://scholar.google.com/citations?user=NfilsZkAAAAJ&hl=en" },
    { name: "Jason Dou", institution: "postdoc, Harvard Medical School", link: "https://sites.google.com/site/douxiaotianjason/" },
    { name: "Peter Wang", institution: "postdoc, Caltech", link: "https://pwang.pw/" },
    { name: "Shi Feng", institution: "Ph.D., Harvard CS", link: "https://fengshi.link/" },
    { name: "Xueying Ding", institution: "Ph.D., CMU Machine Learning & Public Policy", link: "https://scholar.google.com/citations?user=o9EmMaEAAAAJ" },
    { name: "Xin Luo", institution: "Ph.D., UM Bioinformatics", link: "https://medresearch.umich.edu/profile/xin-luo" },
    { name: "Linfeng Zhao", institution: "postdoc, Stanford University", link: "https://lfzhao.com/" }
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C41230]/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900">Leadership</h2>
          <div className="h-1 w-20 bg-[#C41230]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {leadership.map((member, i) => (
            <div key={i} className="bg-zinc-50 backdrop-blur-md border border-zinc-200 rounded-2xl p-8 group hover:border-[#C41230]/50 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-black transition-colors text-zinc-900">
                {member.links.website || member.links.linkedin ? (
                  <a 
                    href={member.links.website || member.links.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:underline decoration-[#C41230] decoration-2 underline-offset-4"
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
              </h3>
              <p className="text-[#C41230] font-medium mb-4 uppercase tracking-wider text-xs">{member.role}</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 h-32 overflow-y-auto custom-scrollbar">
                {member.bio}
              </p>
              <div className="flex gap-4">
                {member.links.linkedin && (
                  <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.links.website && (
                  <a href={member.links.website} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900">Advisory Board</h2>
          <div className="h-1 w-20 bg-[#C41230]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {advisors.map((member, i) => (
            <div key={i} className="bg-zinc-50 backdrop-blur-md border border-zinc-200 rounded-2xl p-8 group hover:border-[#C41230]/50 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-black transition-colors text-zinc-900">
                {member.links.website || member.links.linkedin ? (
                  <a 
                    href={member.links.website || member.links.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:underline decoration-[#C41230] decoration-2 underline-offset-4"
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
              </h3>
              <p className="text-[#C41230] font-medium mb-4 uppercase tracking-wider text-xs">{member.role}</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 h-32 overflow-y-auto custom-scrollbar">
                {member.bio}
              </p>
              <div className="flex gap-4">
                {member.links.linkedin && (
                  <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.links.website && (
                  <a href={member.links.website} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900">Research Fellows</h2>
          <div className="h-1 w-20 bg-[#C41230]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fellows.map((fellow, i) => (
            <div key={i} className="flex items-center p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#C41230] mr-4"></div>
              <div>
                <p className="font-semibold text-zinc-800">
                  {fellow.link ? (
                    <a 
                      href={fellow.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover:underline decoration-[#C41230] decoration-2 underline-offset-4"
                    >
                      {fellow.name}
                    </a>
                  ) : (
                    fellow.name
                  )}
                </p>
                <p className="text-xs text-zinc-500">{fellow.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
