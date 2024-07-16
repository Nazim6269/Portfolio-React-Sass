import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/footer/Footer';
import Topbar from '../Components/topbar/Topbar';

const RootLayout = () => {
  return (
    <>
      <Topbar />
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
