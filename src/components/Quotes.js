import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Quotes({ category }) {
  const [quoteObj, setQuoteObj] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [requestOptions] = useState({
    method: 'GET',
    headers: { 'X-Api-Key': 'm98830p1s59J/QGTjBLHqQ==Fj1asIwzPVGdbNce' },
    contentType: 'application/json',
  });
  const [apiUrl] = useState(`https://api.api-ninjas.com/v1/quotes?category=${category}`);

  Quotes.propTypes = { category: PropTypes.string.isRequired };

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl, requestOptions);
      const json = await res.json();
      setQuoteObj(json);
      setLoading(false);
      console.log('Sent request');
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log('Sent request but failed');
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchData();
  }, []);

  if (loading) {
    return <div className="quote-container">Loading...</div>;
  }

  if (error) {
    return <div className="quote-container">Error fetching quote.</div>;
  }

  return (
    <div className="quote-container">
      <h1>
        {category.charAt(0).toUpperCase() + category.slice(1)}
        {' '}
        Quotes
      </h1>
      {Array.isArray(quoteObj) && quoteObj.map((element) => (
        <div key={element.author}>
          <blockquote className="quote">
            {element.quote}
          </blockquote>
          <h5><i>{element.author}</i></h5>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
