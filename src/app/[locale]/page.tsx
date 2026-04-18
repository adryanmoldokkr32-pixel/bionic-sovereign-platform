import React from 'react';
import Hero from '@/components/Hero';
import LiveOperations from '@/components/LiveOperations';
import translations from '@/../messages/ro-en.json';

export default function LandingPage({ params: { locale } }) {
  const t = translations[locale] || translations['en'];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <nav className="flex items-center justify-between p-6 max-w-screen-xl mx-auto">
        <div className="text-2xl font-black text-white tracking-tighter">
          BIONIC<span className="text-[#1DB954]">SOVEREIGN</span>
        </div>
        <div className="flex gap-4 text-xs font-bold uppercase">
          <a href="/ro" className={locale === 'ro' ? 'text-[#1DB954]' : 'text-gray-500'}>RO</a>
          <a href="/en" className={locale === 'en' ? 'text-[#1DB954]' : 'text-gray-500'}>EN</a>
        </div>
      </nav>
      
      <Hero t={t} />
      <LiveOperations t={t} />
      
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        &copy; 2026 BionicSovereign. All rights reserved. Suveranitate Digitală.
      </footer>
    </main>
  );
}