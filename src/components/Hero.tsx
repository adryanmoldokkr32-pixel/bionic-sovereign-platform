import React from 'react';

const Hero = ({ t }: { t: any }) => {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-6 tracking-tight">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
          {t.hero.cta}
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20">
        <div className="w-[500px] h-[500px] bg-[#1DB954] rounded-full blur-[120px] shadow-2xl animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;