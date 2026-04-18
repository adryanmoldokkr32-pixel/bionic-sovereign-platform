import React from 'react';
import { LayoutGrid, Cloud, TrendingUp, Cpu, ShieldCheck, Zap } from 'lucide-react';

const Services = ({ t }) => {
  const clusters = [
    { title: t.services.design, icon: <LayoutGrid />, count: 20, color: 'from-blue-500' },
    { title: t.services.infra, icon: <Cloud />, count: 15, color: 'from-purple-500' },
    { title: t.services.revenue, icon: <TrendingUp />, count: 15, color: 'from-[#1DB954]' },
    { title: 'Intelligence & Management', icon: <Cpu />, count: 25, color: 'from-gold' },
    { title: 'Advanced Mechanics', icon: <ShieldCheck />, count: 30, color: 'from-red-500' },
    { title: 'Sovereign Elite', icon: <Zap />, count: 14, color: 'from-yellow-400' },
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="max-w-screen-xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
        <p className="text-gray-500">{t.services.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {clusters.map((c, i) => (
          <div key={i} className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${c.color} to-transparent opacity-50`} />
            <div className="text-gray-400 mb-6 group-hover:scale-110 group-hover:text-white transition-transform">
              {React.cloneElement(c.icon, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold mb-2">{c.title}</h3>
            <p className="text-sm text-gray-500">{c.count} Active Procedures</p>
            <div className="mt-6 flex gap-2">
              <div className="h-1 w-1/3 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${c.color} to-white w-full animate-pulse`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;