import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from '../Header/Header';


function Main({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }): JSX.Element {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
