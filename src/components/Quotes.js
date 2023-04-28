import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Quotes({ category }) {
  const [quoteObj, setQuoteObj] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Api-Key': 'sSdFja7TYGhiP1vBvnhoNwolcjjCf3jircreEzZn' },
    contentType: 'application/json',
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(apiUrl, requestOptions);
      if (!res.ok) {
        throw new Error('Error fetching quote.');
      }
      const json = await res.json();
      setLoading(false);
      setQuoteObj(json);
      console.log('Sent request');
    } catch (error) {
      setError('Error fetching quote.');
      setQuoteObj([]);
      setLoading(false);
      console.log('Sent request but failed');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="quote-container">Loading...</div>;
  }

  if (error) {
    return <div className="quote-container">{error}</div>;
  }

  return (
    <div className="quote-container">
      <h1>
        {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
        {' '}
        Quotes
      </h1>
      {Array.isArray(quoteObj) && quoteObj.map((element) => (
        <div key={element?.author}>
          <blockquote className="quote">
            {element?.quote}
          </blockquote>
          <h5><i>{element?.author}</i></h5>
        </div>
      ))}
    </div>
  );
}

Quotes.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Quotes;
