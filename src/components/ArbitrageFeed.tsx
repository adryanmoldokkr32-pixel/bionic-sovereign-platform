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
    <div className="bg-darkGrey border border-white/5 p-6 h-[220px] hover:border-[#1DB954]/30 transition-all flex flex-col">
      <p className="text-[10px] text-silver/30 uppercase font-black tracking-[0.2em] mb-4">{title}</p>
      <div ref={container} className="flex-1 w-full" />
    </div>
  );
};

const ArbitrageFeed = ({ t }: { t: any }) => {
  return (
    <section id="arbitrage" className="px-6 py-24 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
           <div>
              <div className="flex items-center gap-2 mb-2">
                 <Zap size={14} className="text-neon" />
                 <span className="text-[10px] font-black tracking-[0.3em] text-neon uppercase">Institutional Data Feed</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">
                 {t.arbitrage.title}
              </h2>
           </div>
           <div className="font-mono text-[10px] text-silver/30 border-l border-white/10 pl-6">
              SOURCE: TRADINGVIEW_WIDGET_API
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
          <TradingViewWidget symbol="BINANCE:BTCUSD" title="Bitcoin Sovereign Index" />
          <TradingViewWidget symbol="OANDA:XAUUSD" title="Gold Bullion Spot" />
          <TradingViewWidget symbol="TVC:UKOIL" title="Brent Crude Oil" />
        </div>

        <div className="mt-12 p-8 border border-gold/20 bg-gold/5 rounded-none skew-x-[-5deg]">
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                 <p className="text-gold font-black text-xs uppercase tracking-widest mb-1">Sentinel Alpha Signal</p>
                 <p className="text-silver/60 text-[10px] font-mono">AWAITING_LIQUIDITY_SWEEP_CONFIRMATION_ON_XAUUSD...</p>
              </div>
              <button className="bg-gold text-black font-black px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                 Open Terminal
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ArbitrageFeed;