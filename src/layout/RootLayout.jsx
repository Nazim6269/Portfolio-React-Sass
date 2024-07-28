import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumbs from '../Components/breadcrumbs/Breadcrumbs';
import CounterAnimation from '../Components/counterAnimation/CounterAnimation';
import Footer from '../Components/footer/Footer';
import Topbar from '../Components/topbar/Topbar';

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      <Topbar />
      {location.pathname !== '/' ? <Breadcrumbs /> : null}
      <main>
        <Outlet />
      </main>
      <Footer
        location={'Al falah goli, sholo-shohor, Chittagong, Bangladesh'}
      />
    </>
  );
};

export default RootLayout;
