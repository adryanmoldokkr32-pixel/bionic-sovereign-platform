import React from 'react';
import Hero from '@/components/Hero';
import LiveOperations from '@/components/LiveOperations';
import Services from '@/components/Services';
import OnboardingAgent from '@/components/OnboardingAgent';
import ArbitrageFeed from '@/components/ArbitrageFeed';
import SovereignVault from '@/components/SovereignVault';
import translations from '@/../messages/ro-en.json';

export default function LandingPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const t = (translations as any)[locale] || (translations as any)['en'];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent z-50 animate-progress" />
      
      <nav className="sticky top-0 z-40 bg-black/90 backdrop-blur-2xl border-b border-white/5">
        <div className="flex items-center justify-between p-6 max-w-screen-xl mx-auto">
          <div className="text-2xl font-black tracking-tighter italic">
            BIONIC<span className="text-gold">SOVEREIGN</span>
          </div>
          <div className="flex items-center gap-8">
             <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-silver/40">
                <a href="#vault" className="hover:text-gold transition-colors underline-offset-8 hover:underline">Vault</a>
                <a href="#arbitrage" className="hover:text-gold transition-colors underline-offset-8 hover:underline">Market</a>
                <a href="#onboarding" className="hover:text-gold transition-colors underline-offset-8 hover:underline">Execute</a>
             </div>
             <div className="flex gap-4 text-[10px] font-black border border-gold/20 rounded-none px-6 py-2 skew-x-[-15deg]">
                <a href="/ro" className={locale === 'ro' ? 'text-gold' : 'text-silver/40'}>RO</a>
                <a href="/en" className={locale === 'en' ? 'text-gold' : 'text-silver/40'}>EN</a>
             </div>
          </div>
        </div>
      </nav>
      
      <div id="hero"><Hero t={t} /></div>
      
      <div id="vault"><SovereignVault t={t} /></div>
      
      <div id="arbitrage"><ArbitrageFeed t={t} /></div>

      <div id="onboarding"><OnboardingAgent t={t} /></div>

      <div id="services"><Services t={t} /></div>
      
      <div id="live-ops"><LiveOperations t={t} /></div>
      
      <footer className="py-32 border-t border-white/5 text-center">
        <div className="text-5xl font-black mb-12 opacity-5 italic tracking-tighter">BIONICSOVEREIGN</div>
        <p className="text-silver/20 text-[9px] tracking-[0.5em] uppercase">
          Sovereign Digital Infrastructure. V4.0 Alpha Series.
        </p>
      </footer>
    </main>
  );
}