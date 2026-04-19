"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Key, Eye, Play } from 'lucide-react';

const SovereignVault = ({ t }: { t: any }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="vault" className="px-6 py-20 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-darkGrey border border-gold/20 p-10 rounded-none skew-x-[-2deg] shadow-[0_0_50px_rgba(212,175,55,0.05)]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center border border-gold/30">
                 <Shield className="text-gold" size={24} />
              </div>
              <div>
                 <h2 className="text-2xl font-black text-white uppercase italic">{t.vault.title}</h2>
                 <p className="text-[10px] text-neon font-mono uppercase tracking-[0.2em]">{t.vault.status}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                 <p className="text-[10px] text-silver/30 uppercase font-black mb-2 tracking-widest">{t.vault.balance}</p>
                 <p className="text-5xl font-black text-white font-mono tracking-tighter">$10,240.50</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <button className="bg-white/5 border border-white/10 py-4 text-[9px] font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
                    Link Exchange API
                 </button>
                 <button className="bg-white/5 border border-white/10 py-4 text-[9px] font-black uppercase tracking-widest hover:bg-neon hover:text-black transition-all">
                    Withdraw Profits
                 </button>
              </div>
            </div>
          </div>

          <div className="bg-darkGrey border border-white/5 p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black text-white uppercase italic mb-4">{t.factory.title}</h2>
              <p className="text-silver/40 text-sm max-w-sm">
                 Create 8K satirical animations using the BionicSovereign neural engine. Built for TikTok dominance.
              </p>
            </div>
            
            <div className="mt-12 bg-black border border-white/10 p-6 rounded-2xl relative group cursor-pointer overflow-hidden">
               <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                        <Play size={16} className="text-gold ml-1" />
                     </div>
                     <p className="text-xs font-black uppercase tracking-widest">Last Project: Satire_V1_RO</p>
                  </div>
                  <span className="text-[10px] font-mono text-neon uppercase">Rendered</span>
               </div>
            </div>

            <button className="mt-8 w-full bg-gold text-black font-black py-5 uppercase tracking-[0.3em] text-xs hover:bg-white transition-all">
               {t.factory.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SovereignVault;