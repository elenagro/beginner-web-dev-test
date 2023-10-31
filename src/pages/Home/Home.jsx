import React, { useState } from "react";
import dummyQuotes from "./dummy_quotes.json";

import "./Home.scss";

const Home = () => {
  const [quotes, setQuotes] = useState(dummyQuotes);
  const [newQuote, setNewQuote] = useState("");

  const handleChange = (e) => {
    setNewQuote(e.target.value);
  };

  const generateId = () => new Date().getTime;

  const shareQuote = (e) => {
    e.preventDefault();
    if (newQuote) {
      const newQuoteShared = { id: generateId(), text: newQuote };
      setQuotes((prevQuotes) => [...prevQuotes, newQuoteShared]);
      setNewQuote("");
    }
  };

  return (
    <React.Fragment>
      <div>
        <form className="form" onSubmit={shareQuote}>
          <label>Share your favourite quote for today!</label>
          <textarea rows="5" cols="80" value={newQuote} onChange={handleChange}>
            Enter your quote here...
          </textarea>
          <button type="submit">Share</button>
        </form>
      </div>
      <div className="grid-quotes">
        {quotes.map((quote) => (
          <div key={quote.id}>
            <p>{quote.text}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
