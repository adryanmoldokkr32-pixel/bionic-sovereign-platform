import json
from datetime import datetime

class SentimentEngine:
    """NLP-driven Emotion & Whale Intent Engine (Pillar 4 & 5)"""

    def __init__(self):
        self.emotion_index = 0 # 0 to 100 (Fear to Greed)

    def analyze_news_sentiment(self, text_snippets):
        """Extracts emotional bias from news headlines"""
        keywords = {"crash": -10, "rally": 10, "warning": -5, "bullish": 15}
        score = 0
        for snippet in text_snippets:
            for k, v in keywords.items():
                if k in snippet.lower():
                    score += v
        return score

    def extract_whale_intent(self, report_summary):
        """Identifies if whales (Goldman/JPM) are Accumulating or Distributing"""
        if "overweight" in report_summary.lower() or "target raised" in report_summary.lower():
            return "ACCUMULATION"
        return "NEUTRAL"

if __name__ == "__main__":
    engine = SentimentEngine()
    print("Sentiment Engine Active.")