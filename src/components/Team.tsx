'use client';

import React from 'react';
import { Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ScrollReveal, ScrollStagger, ScrollItem } from '@/components/ScrollReveal';

type MemberLinks = {
  linkedin?: string;
  website?: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  links: MemberLinks;
};

type Fellow = {
  name: string;
  institution: string;
  link?: string;
};

const PersonCard = ({ member }: { member: TeamMember }) => {
  const primaryHref = member.links.website || member.links.linkedin;

  return (
    <div className="group flex h-[280px] flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_8px_32px_-24px_rgba(0,0,0,0.1)] transition-colors duration-300 hover:border-[#C41230]/20 hover:shadow-[0_20px_50px_-30px_rgba(196,18,48,0.14)] md:h-[296px]">
      <div className="flex min-h-0 flex-1 flex-col p-6 md:p-7">
        <div className="mb-3 shrink-0">
          <h4 className="text-lg font-bold leading-snug text-zinc-900 md:text-xl">
            {primaryHref ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C41230]"
              >
                {member.name}
                <ArrowUpRight
                  size={15}
                  className="shrink-0 opacity-0 transition-opacity group-hover:opacity-50"
                />
              </a>
            ) : (
              member.name
            )}
          </h4>
          <p className="mt-1.5 line-clamp-2 text-sm font-medium leading-snug text-[#C41230]">
            {member.role}
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1 custom-scrollbar">
          <p className="text-sm leading-[1.7] text-zinc-600">{member.bio}</p>

          {(member.links.linkedin || member.links.website) && (
            <div className="mt-6 flex gap-2 border-t border-zinc-100 pt-5 pb-1">
              {member.links.linkedin && (
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-white hover:text-zinc-900"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {member.links.website && (
                <a
                  href={member.links.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} website`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-white hover:text-zinc-900"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const parseFellowInstitution = (institution: string) => {
  const commaIndex = institution.indexOf(', ');
  if (commaIndex === -1) return { credential: institution, affiliation: '' };
  return {
    credential: institution.slice(0, commaIndex),
    affiliation: institution.slice(commaIndex + 2),
  };
};

const SubsectionHeader = ({ title }: { title: string }) => (
  <div className="mb-8 md:mb-10">
    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">{title}</h3>
    <div className="h-1 w-16 bg-[#C41230]" />
  </div>
);

const FellowRow = ({ fellow }: { fellow: Fellow }) => {
  const { credential, affiliation } = parseFellowInstitution(fellow.institution);

  return (
    <div className="group flex items-start gap-4 rounded-xl border border-zinc-200/70 bg-white p-4 transition-all duration-200 hover:border-[#C41230]/20 hover:shadow-[0_8px_24px_-20px_rgba(196,18,48,0.2)] md:p-5">
      <div className="mt-1 h-full min-h-[2.5rem] w-0.5 shrink-0 rounded-full bg-zinc-200 transition-colors group-hover:bg-[#C41230]/50" />

      <div className="min-w-0 flex-1">
        <p className="font-semibold leading-snug text-zinc-900">
          {fellow.link ? (
            <a
              href={fellow.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C41230]"
            >
              {fellow.name}
              <ArrowUpRight size={14} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-40" />
            </a>
          ) : (
            fellow.name
          )}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="inline-flex rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
            {credential}
          </span>
          {affiliation && <span className="text-sm text-zinc-500">{affiliation}</span>}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const leadership: TeamMember[] = [
    {
      name: 'Fernando Jia',
      role: 'CEO',
      bio: "A seasoned professional with a rich background in tech and business. Guest lecturer at Carnegie Mellon University and University of Michigan. Ex-investor & fellow at Y Combinator, ex-McKinsey consultant, ex-IBD analyst at CITIC Securities. Alumnus of UC Berkeley's Center for Responsible Decentralized Intelligence.",
      links: { linkedin: 'https://www.linkedin.com/in/fernando-j/' },
    },
    {
      name: 'Tianqin Li',
      role: 'Chief Scientist',
      bio: "PhD Researcher in CMU CS Department. Work with Tai Sing Lee (NeurIPS Neuroscience ex-Director), Zico Kolter (CMU AI Director in Computer Science, OpenAI Board member), Ruslan Salakhutdinov (VP Research @ Meta, ex-Apple AI Director, Student of AI's Founding Father, Geoffrey Hinton), and Louis-Philippe Morency (Multimodal AI pioneer professor). Tianqin is also a fellow at Y Combinator. Research focuses on AI models and human intelligence. NeurIPS 2023 Oral presentation (selective 1% of all submissions). Guest lecturer in multiple CMU AI courses.",
      links: {
        linkedin: 'https://www.linkedin.com/in/tianqin-li-b16299170/',
        website: 'http://crazy-jack.github.io/works.html',
      },
    },
    {
      name: 'Florence Li',
      role: 'Executive Team',
      bio: "Creative Technology Executive and Stanford CS master specializing in Machine Learning & Blockchain. Scaled MetaY's GPU DePIN platform. Introduced $10M+ in AI and Web3 investments. Frequent speaker at tech summits.",
      links: { linkedin: 'https://www.linkedin.com/in/florence-li-18b657206/' },
    },
  ];

  const advisors: TeamMember[] = [
    {
      name: 'Prof. Tai-Sing Lee',
      role: 'Director, Lee Lab for Biological & Machine Intelligence, CMU',
      bio: 'Full Professor of Computer Science and Neuroscience at CMU. Dual PhDs from Harvard and MIT. Trained leaders at DeepMind, OpenAI, Google, and Berkeley, Yale etc. Recipient of McDonnell-Pew Young Investigator Award, NSF CAREER Award, and ICCV Helmholtz Prize.',
      links: { website: 'https://csd.cmu.edu/people/faculty/taising-lee' },
    },
    {
      name: 'Orion Parrott',
      role: 'Co-Founder & General Partner at Orange DAO',
      bio: "Bay Area entrepreneur and venture investor focused on early-stage Web3 and fintech. Y Combinator Summer '16 alumnus. Executive MBA from UC Berkeley's Haas School of Business.",
      links: { linkedin: 'https://www.linkedin.com/in/orionparrott/' },
    },
  ];

  const fellows: Fellow[] = [
    { name: 'Xuandong Zhao', institution: 'postdoc, UC Berkeley BAIR and RDI', link: 'https://xuandongzhao.github.io/' },
    { name: 'Yuejiang Liu', institution: 'postdoc, Stanford AI Lab', link: 'https://scholar.google.com/citations?user=Xi-B5WIAAAAJ&hl=en' },
    { name: 'Yaqi Xie', institution: 'postdoc, CMU Robotics Institute', link: 'https://scholar.google.com/citations?user=lBCCo0EAAAAJ&hl=en' },
    { name: 'Shiyi Du', institution: 'Ph.D., CMU Computational Biology', link: 'https://scholar.google.com/citations?user=rVKkjikAAAAJ&hl=en' },
    { name: 'Jiayuan Liu', institution: 'Ph.D., CMU Computer Science', link: 'https://liu-jiayuan.github.io/' },
    { name: 'Shang Gao', institution: 'Ph.D., Caltech Computational Science', link: 'https://scholar.google.com/citations?user=I3WuCWEAAAAJ' },
    { name: 'Yitong Li', institution: 'Ph.D., Stanford Computational Science', link: 'https://www.linkedin.com/in/yitong-li-2b3882299/' },
    { name: 'Chengfeng Mao', institution: 'Ph.D., MIT', link: 'https://scholar.google.com/citations?user=NfilsZkAAAAJ&hl=en' },
    { name: 'Jason Dou', institution: 'postdoc, Harvard Medical School', link: 'https://sites.google.com/site/douxiaotianjason/' },
    { name: 'Peter Wang', institution: 'postdoc, Caltech', link: 'https://pwang.pw/' },
    { name: 'Shi Feng', institution: 'Ph.D., Harvard CS', link: 'https://fengshi.link/' },
    { name: 'Xueying Ding', institution: 'Ph.D., CMU Machine Learning & Public Policy', link: 'https://scholar.google.com/citations?user=o9EmMaEAAAAJ' },
    { name: 'Xin Luo', institution: 'Ph.D., UM Bioinformatics', link: 'https://medresearch.umich.edu/profile/xin-luo' },
    { name: 'Linfeng Zhao', institution: 'postdoc, Stanford University', link: 'https://lfzhao.com/' },
  ];

  return (
    <section id="team" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#C41230]/[0.03] blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal className="mb-14 md:mb-16">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C41230]">
            Team
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">Leadership</h2>
          <div className="h-1 w-20 bg-[#C41230]" />
        </ScrollReveal>

        <ScrollStagger className="mb-16 grid grid-cols-1 gap-5 md:mb-20 md:grid-cols-3 md:gap-6">
          {leadership.map((member) => (
            <ScrollItem key={member.name}>
              <PersonCard member={member} />
            </ScrollItem>
          ))}
        </ScrollStagger>

        <div className="border-t border-zinc-200/80 pt-16 md:pt-20">
          <ScrollReveal>
            <SubsectionHeader title="Advisory Board" />
          </ScrollReveal>

          <ScrollStagger className="mb-16 grid grid-cols-1 gap-5 md:mb-20 md:grid-cols-3 md:gap-6">
            {advisors.map((member) => (
              <ScrollItem key={member.name}>
                <PersonCard member={member} />
              </ScrollItem>
            ))}
          </ScrollStagger>
        </div>

        <div className="border-t border-zinc-200/80 pt-16 md:pt-20">
          <ScrollReveal>
            <SubsectionHeader title="Research Fellows" />
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
            {fellows.map((fellow) => (
              <ScrollItem key={fellow.name}>
                <FellowRow fellow={fellow} />
              </ScrollItem>
            ))}
          </ScrollStagger>
        </div>
      </div>
    </section>
  );
};

export default Team;
