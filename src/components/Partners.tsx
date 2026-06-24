'use client';

import React from 'react';
import { ScrollReveal, ScrollStagger, ScrollItem } from '@/components/ScrollReveal';

const PartnerCard = ({ name, logo }: { name: string; logo?: string }) => (
  <div className="group flex h-20 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_8px_32px_-24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-[#C41230]/20 hover:shadow-[0_16px_40px_-24px_rgba(196,18,48,0.12)] md:h-[5.5rem] md:p-5">
    {logo ? (
      <img
        src={logo}
        alt={name}
        className="max-h-full max-w-full object-contain opacity-90 transition-all group-hover:scale-[1.03] group-hover:opacity-100"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
          const textElement = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
          if (textElement) textElement.style.display = 'block';
        }}
      />
    ) : null}
    <span
      className={`${logo ? 'hidden' : 'block'} text-sm font-semibold tracking-tight text-zinc-500 transition-colors group-hover:text-zinc-900`}
    >
      {name}
    </span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-8 md:mb-10">
    <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">{title}</h2>
    <div className="h-1 w-20 bg-[#C41230]" />
  </div>
);

const Partners = () => {
  const baseUrl = 'https://intelligencecubed.io/';

  const partners = [
    { name: 'Cloudflare', logo: baseUrl + 'assets/images/logos/investor_logo/cloudflare.png' },
    { name: 'Google Cloud', logo: baseUrl + 'assets/images/logos/investor_logo/Google_Cloud.png' },
    { name: 'Microsoft', logo: baseUrl + 'assets/images/logos/investor_logo/Microsoft_Logo_0.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'BNB Chain', logo: baseUrl + 'assets/images/logos/investor_logo/BNB%20Chain_id5Kz-gfh2_1.svg' },
    { name: 'Solana', logo: baseUrl + 'assets/images/logos/investor_logo/Solana_idN473ehUb_1.png' },
    { name: 'Amber.ac', logo: baseUrl + 'assets/images/logos/investor_logo/amber_dsrv.png' },
    { name: 'Cardano', logo: baseUrl + 'assets/images/logos/investor_logo/Cardano.png' },
  ];

  const trustedBy = [
    { name: 'Morningstar', logo: baseUrl + 'assets/images/logos/trust_by_logo/Morningstar.png' },
    { name: 'AP News', logo: baseUrl + 'assets/images/logos/trust_by_logo/ap.png' },
    { name: 'Benzinga', logo: baseUrl + 'assets/images/logos/trust_by_logo/Benzinga.png' },
    { name: 'Business Insider', logo: baseUrl + 'assets/images/logos/trust_by_logo/Business%20Insider.png' },
    { name: 'MarketWatch', logo: baseUrl + 'assets/images/logos/trust_by_logo/MarketWatch.png' },
    { name: 'Street Insider', logo: baseUrl + 'assets/images/logos/trust_by_logo/streetinsider.png' },
  ];

  return (
    <section id="partners" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-20 md:mb-24">
          <SectionHeader title="Partners" />
          <ScrollStagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {partners.map((item) => (
              <ScrollItem key={item.name}>
                <PartnerCard name={item.name} logo={item.logo} />
              </ScrollItem>
            ))}
          </ScrollStagger>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeader title="Trusted By" />
          <ScrollStagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {trustedBy.map((item) => (
              <ScrollItem key={item.name}>
                <PartnerCard name={item.name} logo={item.logo} />
              </ScrollItem>
            ))}
          </ScrollStagger>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Partners;
