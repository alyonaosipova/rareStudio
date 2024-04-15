import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function Main({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }): JSX.Element {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
