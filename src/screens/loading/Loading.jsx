import React from 'react';
import './_loading.scss';

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loading-page__spinner"></div>
      <p className="loading-page__text">Loading...</p>
    </div>
  );
};

export default Loading;
