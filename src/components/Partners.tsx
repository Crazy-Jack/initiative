'use client';

import React from 'react';

const PartnerCard = ({ name, logo, href }: { name: string, logo?: string, href?: string }) => {
  const content = (
    <div className="flex items-center justify-center p-4 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-zinc-300 hover:bg-zinc-100 transition-all group h-20 shadow-sm">
      {logo ? (
        <img 
          src={logo} 
          alt={name} 
          className="max-h-full max-w-full object-contain transition-all opacity-100 group-hover:scale-105" 
          onError={(e) => {
            (e.target as any).style.display = 'none';
            const textElement = (e.target as any).nextSibling;
            if (textElement) textElement.style.display = 'block';
          }}
        />
      ) : null}
      <span className={`${logo ? 'hidden' : 'block'} text-zinc-500 group-hover:text-black font-bold tracking-tight transition-colors`}>{name}</span>
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className="block">{content}</a>;
  }
  return content;
};

const Partners = () => {
  const baseUrl = "https://intelligencecubed.io/";
  
  const investors = [
    { name: "Taisu", logo: baseUrl + "assets/images/logos/investor_logo/taisu.svg", href: "https://www.taisu.io/" },
    { name: "BNB Chain", logo: baseUrl + "assets/images/logos/investor_logo/BNB%20Chain_id5Kz-gfh2_1.svg", href: "https://www.bnbchain.org/" },
    { name: "Solana", logo: baseUrl + "assets/images/logos/investor_logo/Solana_idN473ehUb_1.png", href: "https://solana.com/" },
    { name: "Amber DSRV", logo: baseUrl + "assets/images/logos/investor_logo/amber_dsrv.png", href: "https://amber.ac/" },
    { name: "Cardano", logo: baseUrl + "assets/images/logos/investor_logo/Cardano.png", href: "https://cardano.org/" },
    { name: "Cloudflare", logo: baseUrl + "assets/images/logos/investor_logo/cloudflare.png", href: "https://www.cloudflare.com/" },
    { name: "Google Cloud", logo: baseUrl + "assets/images/logos/investor_logo/Google_Cloud.png", href: "https://cloud.google.com/" },
    { name: "Microsoft", logo: baseUrl + "assets/images/logos/investor_logo/Microsoft_Logo_0.svg", href: "https://www.microsoft.com/" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", href: "https://aws.amazon.com/" },
    { name: "One Piece Lab", logo: baseUrl + "assets/images/logos/investor_logo/one_piece_lab.png", href: "https://www.onepiecelabs.xyz/" },
    { name: "Alliance DAO", logo: baseUrl + "assets/images/logos/investor_logo/alliance_dao.png", href: "https://alliance.xyz/" },
    { name: "Orange DAO", logo: baseUrl + "assets/images/logos/investor_logo/orange_dao.png", href: "https://www.orangedao.xyz/" }
  ];

  const trustedBy = [
    { name: "Weex", logo: baseUrl + "assets/images/logos/trust_by_logo/weex.png", href: "https://www.weex.com/news/detail/solana-x402-hackathon-innovations-in-ai-and-blockchain-245933" },
    { name: "TechFlow", logo: baseUrl + "assets/images/logos/trust_by_logo/TechFlow.png", href: "https://www.techflowpost.com/article/detail_29319.html" },
    { name: "Odaily", logo: baseUrl + "assets/images/logos/trust_by_logo/odaily.png", href: "https://www.odaily.news/en/post/5207811" },
    { name: "WJBF", logo: baseUrl + "assets/images/logos/trust_by_logo/WJBF_1.svg", href: "https://www.wjbf.com/business/press-releases/globenewswire/9525799/onepiece-labs-x-solana-accelerator-officially-launches/" },
    { name: "Bitget", logo: baseUrl + "assets/images/logos/trust_by_logo/bitget.png", href: "https://www.bitget.com/news/detail/12560605084981" },
    { name: "Morningstar", logo: baseUrl + "assets/images/logos/trust_by_logo/Morningstar.png", href: "https://www.morningstar.com/news/globe-newswire/9525799/onepiece-labs-solana-accelerator-officially-launches" },
    { name: "AP News", logo: baseUrl + "assets/images/logos/trust_by_logo/ap.png", href: "https://apnews.com/press-release/globenewswire-mobile/onepiece-labs-solana-accelerator-officially-launches-f2e8e0a2478df30533933fdfe8f07a5e" },
    { name: "Benzinga", logo: baseUrl + "assets/images/logos/trust_by_logo/Benzinga.png", href: "https://www.benzinga.com/pressreleases/25/09/g47571343/onepiece-labs-solana-accelerator-officially-launches" },
    { name: "Business Insider", logo: baseUrl + "assets/images/logos/trust_by_logo/Business%20Insider.png", href: "https://markets.businessinsider.com/news/stocks/onepiece-labs-solana-accelerator-officially-launches-1035128439" },
    { name: "MarketWatch", logo: baseUrl + "assets/images/logos/trust_by_logo/MarketWatch.png", href: "https://www.marketwatch.com/press-release/onepiece-labs-solana-accelerator-officially-launches-7b06ee13?mod=search_headline" },
    { name: "Street Insider", logo: baseUrl + "assets/images/logos/trust_by_logo/streetinsider.png", href: "https://www.streetinsider.com/Globe+Newswire/OnePiece+Labs+%C3%97+Solana+Accelerator+Officially+Launches/25313438.html" },
    { name: "The Block Beats", logo: baseUrl + "assets/images/logos/trust_by_logo/blockbeats.png", href: "https://www.theblockbeats.info/news/60354" }
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Investors & Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {investors.map((item, i) => (
              <PartnerCard key={i} name={item.name} logo={item.logo} href={item.href} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Trusted By</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trustedBy.map((item, i) => (
              <PartnerCard key={i} name={item.name} logo={item.logo} href={item.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
