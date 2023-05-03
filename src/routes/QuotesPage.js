import React, { useState } from 'react';
import Quotes from '../components/Quotes';

const QuotesPage = () => {
  const [category] = useState('family');

  return (
    <div className="quote-wrapper">
      <h2>
        {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
        {' '}
        Quotes
      </h2>
      <Quotes category={category} />
    </div>
  );
};

export default QuotesPage;
