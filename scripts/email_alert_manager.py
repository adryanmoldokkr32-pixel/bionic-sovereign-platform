import yfinance as yf
import os
import json
from datetime import datetime

class EmailAlertManager:
    """Manages automated email notifications for significant market moves in BTC, GOLD, and OIL"""
    
    def __init__(self, workspace_path='/root/workspace'):
        self.log_file = os.path.join(workspace_path, 'alert_state.json')
        self.assets = {
            'BTC': 'BTC-USD',
            'GOLD': 'GC=F',
            'OIL': 'BZ=F'
        }

    def check_for_drops(self):
        alerts_to_send = []
        
        # Load state
        state = {}
        if os.path.exists(self.log_file):
            with open(self.log_file, 'r') as f:
                try: state = json.load(f)
                except: state = {}

        for key, ticker_symbol in self.assets.items():
            asset_data = yf.Ticker(ticker_symbol).history(period='1d', interval='1h')
            if asset_data.empty: continue
            
            open_price = asset_data['Open'].iloc[0]
            current_price = asset_data['Close'].iloc[-1]
            drop_pct = ((current_price - open_price) / open_price) * 100
            
            asset_state = state.get(key, 0)
            triggered = False
            level = 0

            if drop_pct <= -5.0 and asset_state > -5.0:
                level = 5
                triggered = True
            elif drop_pct <= -3.0 and asset_state > -3.0:
                level = 3
                triggered = True
            
            if triggered:
                state[key] = -level
                alerts_to_send.append({
                    'asset': key,
                    'level': level,
                    'drop_pct': round(drop_pct, 2),
                    'price': round(current_price, 2)
                })
            
            # Reset threshold if price recovers above 1% drop
            if drop_pct > -1.0:
                state[key] = 0

        # Save state
        with open(self.log_file, 'w') as f:
            json.dump(state, f)
                
        return alerts_to_send