import React, { useEffect, useState } from "react";
import { resume } from "react-dom/server";

function RandomQuoteGenerator() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  async function fetchQuote() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/quotes/random", {
        method: "GET",
      });
      const result = await apiResponse.json();
      setLoading(false)
      setQuote(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

function handleChange(){
    fetchQuote()
}
 if(loading) {
    return <h3>Loading Quote ! Please wait</h3>
  }

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <div>
        <p>{quote?.author}</p>
        <p>{quote?.quote}</p>
      </div>
      <button onClick={handleChange}>change</button>
    </div>
  );
}

export default RandomQuoteGenerator;
