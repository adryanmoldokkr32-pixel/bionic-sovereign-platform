import React from 'react';

const Hero = ({ t }: { t: any }) => {
  return (
    <section className="relative pt-40 pb-32 px-6 bg-black overflow-hidden border-b border-white/5">
      {/* Luxury Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[140px]" />
         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12 backdrop-blur-md">
           <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse-fast shadow-[0_0_10px_#39FF14]" />
           <span className="text-[9px] font-black uppercase tracking-[0.4em] text-silver/60">System Version 4.0 Alpha</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] italic">
          <span className="bg-gradient-to-b from-white to-silver bg-clip-text text-transparent">BIONIC</span><br/>
          <span className="bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent">SOVEREIGN</span>
        </h1>

        <p className="text-xl md:text-2xl text-silver/40 mb-16 max-w-xl mx-auto font-light tracking-wide uppercase">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto bg-gold text-black font-black py-6 px-12 rounded-none skew-x-[-12deg] text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
             {t.hero.cta}
          </button>
          <button className="w-full md:w-auto bg-transparent border border-silver/20 text-silver font-black py-6 px-12 rounded-none skew-x-[-12deg] text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-all">
            Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;