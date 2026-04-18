import React from 'react';

const Hero = ({ t }: { t: any }) => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
           <span className="w-2 h-2 bg-[#1DB954] rounded-full animate-ping" />
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">System Version 4.0 Alpha</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-8 tracking-tighter leading-[0.9]">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto bg-white text-black font-black py-5 px-10 rounded-2xl text-sm uppercase tracking-widest hover:bg-[#1DB954] transition-all">
            {t.hero.cta}
          </button>
          <button className="w-full md:w-auto bg-white/5 border border-white/10 text-white font-black py-5 px-10 rounded-2xl text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
            Documentation
          </button>
        </div>
      </div>
      
      {/* Background Pro UI Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1DB954]/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;