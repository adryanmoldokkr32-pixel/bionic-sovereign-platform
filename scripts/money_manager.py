def calculate_kelly_risk(confidence_score, win_rate=0.6, risk_reward=2):
    """PILLAR 10: Kelly Criterion for optimal position sizing - UPDATED FOR 20X LEVERAGE"""
    p = confidence_score / 100
    b = risk_reward
    kelly_f = p - (1 - p) / b
    # Fractional Kelly (8%) for 20x leverage to ensure maximum capital protection
    return max(0, round(kelly_f * 0.08, 4)) 

class MoneyManager:
    def get_trade_allocation(self, confidence):
        risk_pct = calculate_kelly_risk(confidence)
        return f"RISK_PER_TRADE: {risk_pct * 100}% of equity | MAX_LEVERAGE: 20x"