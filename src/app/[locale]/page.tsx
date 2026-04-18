import React from 'react';
import Hero from '@/components/Hero';
import LiveOperations from '@/components/LiveOperations';
import Services from '@/components/Services';
import OnboardingAgent from '@/components/OnboardingAgent';
import ArbitrageFeed from '@/components/ArbitrageFeed';
import translations from '@/../messages/ro-en.json';

export default function LandingPage({ params: { locale } }) {
  const t = translations[locale] || translations['en'];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#1DB954] selection:text-black">
      <div className="fixed top-0 left-0 w-full h-1 bg-[#1DB954] z-50 animate-progress" />
      
      <nav className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between p-6 max-w-screen-xl mx-auto">
          <div className="text-2xl font-black tracking-tighter">
            BIONIC<span className="text-[#1DB954]">SOVEREIGN</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#arbitrage" className="hover:text-white transition-colors">Arbitrage</a>
                <a href="#live-ops" className="hover:text-white transition-colors">Live Ops</a>
                <a href="#onboarding" className="hover:text-white transition-colors">Onboarding</a>
             </div>
             <div className="flex gap-3 text-[10px] font-black border border-white/10 rounded-full px-4 py-2">
                <a href="/ro" className={locale === 'ro' ? 'text-[#1DB954]' : 'text-gray-600'}>RO</a>
                <span className="text-gray-800">/</span>
                <a href="/en" className={locale === 'en' ? 'text-[#1DB954]' : 'text-gray-600'}>EN</a>
             </div>
          </div>
        </div>
      </nav>
      
      <div id="hero"><Hero t={t} /></div>
      
      <div id="onboarding"><OnboardingAgent t={t} /></div>

      <div id="arbitrage"><ArbitrageFeed t={t} /></div>

      <div id="services"><Services t={t} /></div>
      
      <div id="live-ops"><LiveOperations t={t} /></div>
      
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="text-2xl font-black mb-8 opacity-20">BIONICSOVEREIGN</div>
        <p className="text-gray-600 text-xs tracking-[0.2em] uppercase">
          &copy; 2026 Sovereign Digital Operating System. Built by Emergent.
        </p>
      </footer>
    </main>
  );
}