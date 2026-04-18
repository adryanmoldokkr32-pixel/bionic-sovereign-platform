import React from 'react';
import { ArrowRightLeft, ExternalLink } from 'lucide-react';

const ArbitrageFeed = ({ t }: { t: any }) => {
  const alerts = [
    { asset: 'GOLD (XAU)', p1: 'CME', v1: '4816.2', p2: 'ICE', v2: '4822.8', spread: '+0.14%', status: 'PROFITABLE' },
    { asset: 'OIL (BRENT)', p1: 'SPOT', v1: '96.18', p2: 'FUTURES', v2: '97.45', spread: '+1.32%', status: 'HIGH_VOLATILITY' },
    { asset: 'GAS (NAT)', p1: 'HUB', v1: '2.62', p2: 'EUR_ICE', v2: '2.68', spread: '+2.29%', status: 'EXECUTING' },
  ];

  return (
    <section id="arbitrage" className="px-6 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <ArrowRightLeft className="text-gold animate-spin-slow" />
          <h2 className="text-2xl font-bold tracking-tight text-white">{t.arbitrage.title}</h2>
        </div>
        <div className="space-y-4">
          {alerts.map((a, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/10 transition-all">
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="min-w-[120px]">
                   <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{t.arbitrage.asset}</p>
                   <p className="text-lg font-bold text-white">{a.asset}</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className="px-2 py-1 bg-black/40 rounded border border-white/10 text-white">{a.p1}: ${a.v1}</span>
                  <span className="text-gray-700">↔</span>
                  <span className="px-2 py-1 bg-black/40 rounded border border-white/10 text-white">{a.p2}: ${a.v2}</span>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-8">
                 <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{t.arbitrage.spread}</p>
                    <p className="text-lg font-black text-[#1DB954]">{a.spread}</p>
                 </div>
                 <div className={`px-3 py-1 rounded-full text-[9px] font-black tracking-tighter border ${a.status === 'EXECUTING' ? 'bg-[#1DB954]/20 border-[#1DB954] text-[#1DB954]' : 'bg-gold/20 border-gold text-gold'}`}>
                    {a.status}
                 </div>
                 <ExternalLink size={14} className="text-gray-600 hidden md:block cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArbitrageFeed;