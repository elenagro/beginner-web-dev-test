import React, { useState } from "react";
import dummyQuotes from "./dummy_quotes.json";
import Wrapper from "../../shared/Wrapper/Wrapper";
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
    <Wrapper>
      <div>
        <form className="form" onSubmit={shareQuote}>
          <label className="share-title">
            Share your favourite quote today!
          </label>
          <textarea
            rows="5"
            cols="80"
            value={newQuote}
            className="text-box"
            onChange={handleChange}
          >
            Enter your quote here...
          </textarea>
          <button type="submit" className="share-btn">
            SHARE
          </button>
        </form>
      </div>
      <div className="grid-quotes">
        {quotes.map((quote) => (
          <div key={quote.id}>
            <p>{quote.text}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Home;
