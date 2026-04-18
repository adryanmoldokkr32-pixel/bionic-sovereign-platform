def calculate_kelly_risk(confidence_score, win_rate=0.6, risk_reward=2):
    """PILLAR 10: Kelly Criterion for optimal position sizing"""
    # win_rate: decimal probability of win
    # b: odds received on the wager (RR ratio)
    # f* = p - (1-p)/b
    p = confidence_score / 100
    b = risk_reward
    kelly_f = p - (1 - p) / b
    return max(0, round(kelly_f * 0.1, 4)) # We use a fractional Kelly (10%) to stay safe on 1:30 leverage

class MoneyManager:
    def get_trade_allocation(self, confidence):
        risk_pct = calculate_kelly_risk(confidence)
        return f"RISK_PER_TRADE: {risk_pct * 100}% of equity"