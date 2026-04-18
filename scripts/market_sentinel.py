import yfinance as yf
import pandas as pd
import numpy as np

class MarketSentinel:
    def __init__(self):
        self.symbols = {'GOLD': 'GC=F', 'SILVER': 'SI=F', 'OIL': 'BZ=F', 'WTI': 'CL=F'}

    def map_liquidity_pools(self, asset_key):
        """PILLAR 8: Detect areas of clustered Stop-Losses (Swing Highs/Lows)"""
        symbol = self.symbols.get(asset_key)
        df = yf.Ticker(symbol).history(period='5d', interval='1h')
        # Identify significant swing points
        swing_high = df['High'].rolling(window=20, center=True).max().iloc[-10]
        swing_low = df['Low'].rolling(window=20, center=True).min().iloc[-10]
        return {'high_liquidity': round(swing_high, 2), 'low_liquidity': round(swing_low, 2)}

    def detect_smt_divergence(self, asset_a, asset_b):
        """PILLAR 9: Smart Money Technique (Divergence check between correlated assets)"""
        df_a = yf.Ticker(self.symbols[asset_a]).history(period='1d', interval='15m')
        df_b = yf.Ticker(self.symbols[asset_b]).history(period='1d', interval='15m')
        
        # If Asset A makes a higher high, but Asset B does not -> Divergence (Manipulation detected)
        a_making_hh = df_a['High'].iloc[-1] > df_a['High'].iloc[-5:].max()
        b_making_hh = df_b['High'].iloc[-1] > df_b['High'].iloc[-5:].max()
        
        if a_making_hh and not b_making_hh:
            return f"DIVERGENCE_DETECTED: {asset_a} is lying (Manipulation)"
        return "CONFIRMED_TREND"

    def get_elite_signal(self, asset_key):
        # Combining technical indicators + Liquidity + Divergence
        liq = self.map_liquidity_pools(asset_key)
        div = self.detect_smt_divergence('GOLD', 'SILVER') if asset_key == 'GOLD' else "NA"
        # Logic to see if price is 'sweeping' the liquidity
        return {'liquidity': liq, 'divergence': div}