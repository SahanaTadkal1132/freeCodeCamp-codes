import React, { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  }
  // Add more quotes if desired
];

function QuoteBox() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div id="quote-box" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <p id="text">"{quote.text}"</p>
      <p id="author">- {quote.author}</p>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote.text}" - ${quote.author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
      <br />
      <button id="new-quote" onClick={getRandomQuote}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;
