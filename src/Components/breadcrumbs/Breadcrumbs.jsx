import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_breadcrumbs.scss';

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  return (
    <div className="breadcrumbs">
      {crumbs.map((crumb, index) => {
        currentLink = +`/${crumb}`;
        const isLast = index === crumbs.length - 1;
        return (
          <Link to={currentLink} key={crumb} className="breadcrumbs_item">
            {crumb} {!isLast && '||'}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
