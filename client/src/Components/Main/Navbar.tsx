import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }): JSX.Element {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link className="navbar-link" to="/">
          Main
        </Link>
        <Link className="navbar-link" to="/registration">
          Registration
        </Link>
        <button className={` switchBtn ${theme}`} type="button" onClick={toggleTheme}>
          Switch theme
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
