"use client";

import React, { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

const TradingViewWidget = ({ symbol, title }: { symbol: string, title: string }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": symbol,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "dateRange": "1D",
      "colorTheme": "dark",
      "isTransparent": true,
      "autosize": true,
      "largeChartUrl": "",
      "noTimeScale": false,
      "chartOnly": false
    });
    container.current.appendChild(script);
    return () => {
      if (container.current) container.current.innerHTML = "";
    };
  }, [symbol]);

  return (
    <div className="bg-[#0a0a0a] border border-white/5 p-8 h-[250px] hover:border-gold/30 transition-all flex flex-col group">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[9px] text-gold font-black uppercase tracking-[0.3em]">{title}</p>
        <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
      </div>
      <div ref={container} className="flex-1 w-full filter grayscale hover:grayscale-0 transition-all duration-700" />
    </div>
  );
};

const ArbitrageFeed = ({ t }: { t: any }) => {
  return (
    <section id="arbitrage" className="px-6 py-32 bg-black border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div>
              <div className="flex items-center gap-3 mb-4">
                 <Zap size={16} className="text-neon" />
                 <span className="text-[10px] font-black tracking-[0.4em] text-neon uppercase">Institutional Intelligence</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase">
                 {t.arbitrage.title}
              </h2>
           </div>
           <div className="font-mono text-[9px] text-silver/20 border-l border-white/10 pl-8 max-w-xs">
              PROTOCOL_STATUS: ACTIVE<br/>
              DATA_SOURCE: GLOBAL_EXCHANGE_INDEX_V4
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          <TradingViewWidget symbol="BINANCE:BTCUSD" title="BTC / DIGITAL GOLD" />
          <TradingViewWidget symbol="OANDA:XAUUSD" title="XAU / PRECIOUS METAL" />
          <TradingViewWidget symbol="TVC:UKOIL" title="BRENT / ENERGY CORE" />
        </div>

        <div className="mt-1 bg-white/[0.02] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center animate-spin-slow">
                 <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
              <div>
                 <p className="text-gold font-black text-[10px] uppercase tracking-widest mb-1">Sentinel Neural Engine</p>
                 <p className="text-silver/40 text-[9px] font-mono uppercase">Scanning for whale manipulation patterns in order flows...</p>
              </div>
           </div>
           <button className="group relative px-10 py-4 bg-gold text-black font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all">
              Access Full Terminal
           </button>
        </div>
      </div>
    </section>
  );
};

export default ArbitrageFeed;