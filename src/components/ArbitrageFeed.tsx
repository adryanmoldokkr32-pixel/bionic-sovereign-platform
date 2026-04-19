"use client";

import React, { useEffect, useState } from 'react';
import { Bitcoin, Coins, Droplets, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';

const ArbitrageFeed = ({ t }: { t: any }) => {
  const [prices, setPrices] = useState([
    { id: 'BTC', name: 'Bitcoin', symbol: <Bitcoin size={24} />, price: 75700.00, change: -0.06, color: 'text-neon' },
    { id: 'XAU', name: 'Gold', symbol: <Coins size={24} />, price: 4879.60, change: 0.14, color: 'text-gold' },
    { id: 'OIL', name: 'Brent Oil', symbol: <Droplets size={24} />, price: 90.38, change: -8.01, color: 'text-silver' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        price: p.price + (Math.random() - 0.5) * 10,
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-24 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
           <div>
              <div className="flex items-center gap-2 mb-2">
                 <Zap size={14} className="text-neon" />
                 <span className="text-[10px] font-black tracking-[0.3em] text-neon uppercase">Real-time Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">
                 {t.arbitrage.title}
              </h2>
           </div>
           <div className="font-mono text-[10px] text-silver/30 border-l border-white/10 pl-6">
              LATEST_UPDATE: {new Date().toLocaleTimeString()}
           </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {prices.map((a) => (
            <div key={a.id} className="bg-darkGrey border border-white/5 p-10 hover:bg-white/[0.02] transition-all">
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 bg-black border border-white/10 rounded-2xl ${a.color}`}>
                  {a.symbol}
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black ${a.change >= 0 ? 'text-neon' : 'text-red-600'}`}>
                  {a.change >= 0 ? '+' : ''}{a.change.toFixed(2)}%
                </div>
              </div>
              
              <p className="text-[10px] text-silver/30 uppercase font-black tracking-[0.2em] mb-2">{a.name} Index</p>
              <p className="text-5xl font-black tracking-tighter text-white font-mono mb-8">
                ${a.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>

              <div className="h-[1px] w-full bg-white/5 mb-8" />
              
              <button className="w-full py-4 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-silver hover:bg-white hover:text-black transition-all">
                 Execute Analysis
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArbitrageFeed;