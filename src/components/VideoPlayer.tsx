"use client";

import React from 'react';
import { Play, Download, Share2, ShieldCheck } from 'lucide-react';

const VideoPlayerPage = ({ params }: { params: { locale: string } }) => {
  const driveLink = "https://drive.google.com/drive/folders/1EYfLcq2jjrY5N3NWUoFiAGMf45pjaCfe";

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-20 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-2 mb-12">
           <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
           <span className="text-[10px] font-black tracking-0.4em text-neon uppercase">Sovereign Media Delivery</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8">
          GLOBAL-INFO-AD <span className="text-gold">V7.1_RO</span>
        </h1>

        <div className="aspect-video w-full bg-darkGrey border border-white/10 rounded-3xl overflow-hidden relative group">
           <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:bg-black/20 transition-all">
              <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10 text-gold hover:scale-110 transition-transform cursor-pointer">
                 <Play size={32} fill="currentColor" className="ml-1" />
              </div>
           </div>
           <div className="absolute bottom-8 left-8 z-10">
              <p className="text-[10px] font-mono text-silver/40">STATUS: ENCRYPTED_STREAM_ACTIVE</p>
              <p className="text-xs font-black uppercase tracking-widest">127 SECONDS // 8K ULTRA HD</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
           <a 
             href={driveLink} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center justify-center gap-3 bg-white text-black font-black py-4 px-8 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-gold transition-all text-center"
           >
              <Download size={16} /> Download 8K Assets
           </a>
           <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-black py-4 px-8 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
              <Share2 size={16} /> Social Export
           </button>
           <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-black py-4 px-8 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
              <ShieldCheck size={16} /> Verify Hash
           </button>
        </div>

        <div className="mt-20 p-10 bg-darkGrey border border-white/5 rounded-3xl">
           <h3 className="text-gold font-black text-xs uppercase tracking-widest mb-6">Production Intelligence</h3>
           <p className="text-silver/60 text-sm leading-relaxed mb-8">
              RO: Acest clip a fost generat autonom. Link-ul de download te duce întru un folder securizat BionicSovereign unde găsești cadrele 8K brute și scriptul.
           </p>
           <div className="flex flex-wrap gap-2">
              {['#Hormuz', '#AI_Arms_Race', '#SP500', '#SpaceX', '#Hungary'].map(tag => (
                <span key={tag} className="text-[9px] font-mono text-neon border border-neon/20 px-2 py-1 bg-neon/5">{tag}</span>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
};

export default VideoPlayerPage;