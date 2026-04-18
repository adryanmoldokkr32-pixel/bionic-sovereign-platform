class ArbitrageLogic:
    """Execution Engine (Pillar 3 & 7)"""

    def __init__(self, spread_threshold=0.005): # 0.5%
        self.threshold = spread_threshold

    def find_opportunities(self, price_map):
        """
        price_map = {
            'GOLD': {'CME': 4816, 'ICE': 4822},
            'OIL': {'SPOT': 96, 'ICE': 97.4}
        }
        """
        opportunities = []
        for asset, prices in price_map.items():
            p_min = min(prices.values())
            p_max = max(prices.values())
            spread = (p_max - p_min) / p_min
            
            if spread >= self.threshold:
                opportunities.append({
                    'asset': asset,
                    'buy_at': [k for k, v in prices.items() if v == p_min][0],
                    'sell_at': [k for k, v in prices.items() if v == p_max][0],
                    'spread_pct': round(spread * 100, 2)
                })
        return opportunities

if __name__ == "__main__":
    arb = ArbitrageLogic()
    print("Arbitrage Scan Ready.")