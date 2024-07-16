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
      <Footer />
    </>
  );
};

export default RootLayout;
