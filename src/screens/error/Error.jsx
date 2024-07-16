import React from 'react';
import { Link } from 'react-router-dom';
import './_error.scss';

const Error = () => {
  return (
    <div className="page-404">
      <div className="page-404__content">
        <h1 className="page-404__title">404</h1>
        <p className="page-404__message">Page Not Found</p>
        <Link href="/" className="page-404__link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
