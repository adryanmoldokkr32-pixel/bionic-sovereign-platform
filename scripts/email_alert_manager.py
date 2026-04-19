import yfinance as yf
import os
from datetime import datetime

class EmailAlertManager:
    """Manages automated email notifications for significant market moves"""
    
    def __init__(self, workspace_path='/root/workspace'):
        self.log_file = os.path.join(workspace_path, 'alert_state.txt')

    def check_for_drops(self):
        btc = yf.Ticker('BTC-USD')
        hist = btc.history(period='1d', interval='1h')
        if hist.empty: return None
        
        open_price = hist['Open'].iloc[0]
        current_price = hist['Close'].iloc[-1]
        drop_pct = ((current_price - open_price) / open_price) * 100
        
        # Read last alert state to prevent spam
        last_threshold = 0
        if os.path.exists(self.log_file):
            with open(self.log_file, 'r') as f:
                content = f.read().strip()
                if content: last_threshold = float(content)
        
        alert_triggered = False
        alert_level = 0

        if drop_pct <= -5.0 and last_threshold > -5.0:
            alert_level = 5
            alert_triggered = True
        elif drop_pct <= -3.0 and last_threshold > -3.0:
            alert_level = 3
            alert_triggered = True
            
        if alert_triggered:
            # Update state
            with open(self.log_file, 'w') as f:
                f.write(str(-alert_level))
            return {
                'level': alert_level,
                'drop_pct': round(drop_pct, 2),
                'price': round(current_price, 2)
            }
        
        # Reset threshold if price recovers above 1% drop
        if drop_pct > -1.0:
            with open(self.log_file, 'w') as f:
                f.write('0')
                
        return None