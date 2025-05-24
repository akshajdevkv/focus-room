import React, { useState, useEffect } from 'react';
import '../styles/MotivationalQuote.css';

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    gradient: "linear-gradient(135deg, #FF6B6B, #4ECDC4)"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    gradient: "linear-gradient(135deg, #A8E6CF, #FFD3B6)"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    gradient: "linear-gradient(135deg, #3498DB, #2ECC71)"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    gradient: "linear-gradient(135deg, #9B59B6, #3498DB)"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    gradient: "linear-gradient(135deg, #FF8008, #FFC837)"
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
    gradient: "linear-gradient(135deg, #56CCF2, #2F80ED)"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    gradient: "linear-gradient(135deg, #FF416C, #FF4B2B)"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    gradient: "linear-gradient(135deg, #00B4DB, #0083B0)"
  }
];

const MotivationalQuote: React.FC = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Get a random quote on mount and when refreshed
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div 
      className="quote-container"
      style={{
        background: quote.gradient
      }}
    >
      <div className="quote-content">
        <p className="quote-text">{quote.text}</p>
        <p className="quote-author">― {quote.author}</p>
      </div>
    </div>
  );
};

export default MotivationalQuote; 