"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Zap, TrendingUp, TrendingDown } from 'lucide-react';

const BTCLiveTicker = () => {
  const [price, setPrice] = useState<string | null>(null);
  const [change, setChange] = useState<string | null>(null);
  const [side, setSide] = useState<'up' | 'down' | null>(null);
  const prevPrice = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const currentPrice = parseFloat(data.c);
      if (currentPrice > prevPrice.current) setSide('up');
      else if (currentPrice < prevPrice.current) setSide('down');
      setPrice(currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
      setChange(data.P);
      prevPrice.current = currentPrice;
      setTimeout(() => setSide(null), 300);
    };
    return () => ws.close();
  }, []);

  if (!mounted) return <div className="h-[250px] bg-[#0a0a0a] border border-white/5 p-8 animate-pulse" />;

  return (
    <div className={`bg-[#0a0a0a] border border-white/5 p-8 h-[250px] transition-all flex flex-col group ${
      side === 'up' ? 'border-[#1DB954]/40 bg-[#1DB954]/5' : side === 'down' ? 'border-red-500/40 bg-red-500/5' : ''
    }`}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[9px] text-gold font-black uppercase tracking-[0.3em]">BTC / DIGITAL GOLD</p>
        <div className={`w-1.5 h-1.5 rounded-full ${price ? 'bg-neon animate-pulse' : 'bg-gray-700'}`} />
      </div>
      <div className="flex-1 flex flex-col justify-center">
         <p className="text-5xl font-black tracking-tighter text-white font-mono mb-2">
           ${price || '...'}
         </p>
         <div className={`flex items-center gap-1 text-[10px] font-black ${parseFloat(change || '0') >= 0 ? 'text-neon' : 'text-red-500'}`}>
            {parseFloat(change || '0') >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {change}% (24H)
         </div>
      </div>
    </div>
  );
};

const TradingViewWidget = ({ symbol, title }: { symbol: string, title: string }) => {
  const container = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!container.current) return;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": symbol, "width": "100%", "height": "100%", "locale": "en", "dateRange": "1D",
      "colorTheme": "dark", "isTransparent": true, "autosize": true, "largeChartUrl": "",
      "noTimeScale": false, "chartOnly": false
    });
    container.current.appendChild(script);
    return () => { if (container.current) container.current.innerHTML = ""; };
  }, [symbol]);

  return (
    <div className="bg-[#0a0a0a] border border-white/5 p-8 h-[250px] hover:border-gold/30 transition-all flex flex-col group">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[9px] text-gold font-black uppercase tracking-[0.3em]">{title}</p>
        <div className="w-1.5 h-1.5 bg-silver/20 rounded-full" />
      </div>
      <div ref={container} className="flex-1 w-full filter grayscale hover:grayscale-0 transition-all duration-700" />
    </div>
  );
};

const ArbitrageFeed = ({ t }: { t: any }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

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
              TIME_STAMP: {time || 'SYNCING...'}
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          <BTCLiveTicker />
          <TradingViewWidget symbol="OANDA:XAUUSD" title="XAU / PRECIOUS METAL" />
          <TradingViewWidget symbol="TVC:UKOIL" title="BRENT / ENERGY CORE" />
        </div>
      </div>
    </section>
  );
};

export default ArbitrageFeed;