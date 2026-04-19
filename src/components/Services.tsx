import React from 'react';
import { LayoutGrid, Cloud, TrendingUp, Cpu, ShieldCheck, Zap } from 'lucide-react';

const Services = ({ t }: { t: any }) => {
  const clusters = [
    { title: t.services.design, count: 20, color: 'bg-gold' },
    { title: t.services.infra, count: 15, color: 'bg-silver' },
    { title: t.services.revenue, count: 15, color: 'bg-neon' },
    { title: 'Intelligence', count: 25, color: 'bg-gold' },
    { title: 'Mechanics', count: 30, color: 'bg-silver' },
    { title: 'Elite', count: 14, color: 'bg-neon' },
  ];

  return (
    <section className="px-6 py-32 bg-black border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-20 text-white italic tracking-tighter">CAPABILITIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
          {clusters.map((c, i) => (
            <div key={i} className="bg-black p-8 group hover:bg-white/[0.03] transition-all">
               <div className={`w-8 h-[2px] ${c.color} mb-6`} />
               <h3 className="text-xs font-black text-white uppercase tracking-widest mb-2">{c.title}</h3>
               <p className="text-[10px] text-silver/30 font-mono">PRO_SC_{c.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;