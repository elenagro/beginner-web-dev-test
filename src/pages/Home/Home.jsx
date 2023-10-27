import React, { useState } from "react";

import "./Home.scss";

const Home = () => {
  let DUMMY_QUOTES = [
    {
      id: 1,
      text: "We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein",
    },
    {
      id: 2,
      text: "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi",
    },
    {
      id: 3,
      text: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. — Mark Twain",
    },
    {
      id: 4,
      text: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.— Eleanor Roosevelt",
    },
    {
      id: 5,
      text: "When you change your thoughts, remember to also change your world.—Norman Vincent Peale",
    },
    {
      id: 6,
      text: "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
    },
    {
      id: 7,
      text: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.—Diane McLaren",
    },
    {
      id: 8,
      text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. —Dale Carnegie",
    },
    {
      id: 9,
      text: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind. — Mister Rogers",
    },
  ];

  const [quotes, setQuotes] = useState(DUMMY_QUOTES);
  const [newQuote, setNewQuote] = useState("");

  const handleChange = (e) => {
    setNewQuote(e.target.value);
  };

  const generateId = () => new Date().getTime;

  const shareQuote = () => {
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
