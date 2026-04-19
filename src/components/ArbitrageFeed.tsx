"use client";

import React, { useEffect, useState } from 'react';
import { Bitcoin, Coins, Droplets, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const ArbitrageFeed = ({ t }: { t: any }) => {
  const [prices, setPrices] = useState([
    { id: 'BTC', name: 'Bitcoin', symbol: <Bitcoin size={20} />, price: 75700.00, change: -0.06, type: 'crypto' },
    { id: 'XAU', name: 'Gold', symbol: <Coins size={20} className="text-gold" />, price: 4879.60, change: -0.4, type: 'commodity' },
    { id: 'OIL', name: 'Brent Oil', symbol: <Droplets size={20} />, price: 90.38, change: 2.1, type: 'commodity' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        price: p.price + (Math.random() - 0.5) * 5,
        change: p.change + (Math.random() - 0.5) * 0.1
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="arbitrage" className="px-6 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-10">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase">{t.arbitrage.title}</h2>
           </div>
           <span className="text-[10px] font-black bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">MARKET_STATUS: OPEN</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prices.map((a) => (
            <div key={a.id} className="group bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl p-6 hover:border-[#1DB954]/30 transition-all shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center border border-white/5 text-gray-400">
                    {a.symbol}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{a.name}</p>
                    <p className="text-[10px] text-gray-600 font-mono">{a.id}/USD</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold ${a.change >= 0 ? 'text-[#1DB954]' : 'text-red-500'}`}>
                  {a.change >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {Math.abs(a.change).toFixed(2)}%
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Current Price</p>
                <p className="text-3xl font-black tracking-tighter text-white font-mono">
                  ${a.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-gray-800" />)}
                 </div>
                 <button className="text-[10px] font-black uppercase text-[#1DB954] hover:underline tracking-widest">
                    Analyze Flow
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArbitrageFeed;