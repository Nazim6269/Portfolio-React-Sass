import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/footer/Footer';
import Topbar from '../Components/topbar/Topbar';
import Breadcrumbs from '../Components/breadcrumbs/Breadcrumbs';

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <Breadcrumbs />
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
