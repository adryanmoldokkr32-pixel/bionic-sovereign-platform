"use client";

import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const OnboardingAgent = ({ t }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1DB954] rounded-2xl flex items-center justify-center text-black">
              <Bot size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold">{t.onboarding.title}</h2>
              <p className="text-xs text-[#1DB954] font-mono animate-pulse">AWAITING_INPUT_SIGNAL...</p>
            </div>
          </div>
          <div className="space-y-4 mb-8 h-48 overflow-y-auto pr-4 scrollbar-hide">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-sm leading-relaxed text-gray-300">
              RO: Salutări. Sunt nucleul de inteligență BionicSovereign. Ce obiectiv tactic dorești să inițiezi astăzi?
              <br/><br/>
              EN: Greetings. I am the BionicSovereign intelligence core. What tactical objective would you like to initiate today?
            </div>
          </div>
          <div className="relative">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.onboarding.placeholder}
              className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#1DB954] transition-colors placeholder:text-gray-700 font-mono"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-[#1DB954] hover:text-black rounded-xl flex items-center justify-center transition-all group">
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1DB954] rounded-full blur-[100px] opacity-10" />
        </div>
      </div>
    </section>
  );
};

export default OnboardingAgent;