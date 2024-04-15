/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { authLogout } from '../Auth/AuthSlice';

function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.user.user);

  async function logout(): Promise<void> {
    dispatch(authLogout()).catch(console.log);
    navigate('/');
  }
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link className="navbar-link" to="/">
          Main
        </Link>
        <Link className="navbar-link" to="/services">
          Services
        </Link>
        {user && <div>Привет, {user?.name}</div>}
        {!user && (
          <>
            {' '}
            <Link className="navbar-link" to="/registration">
              Registration
            </Link>
            <Link className="navbar-link" to="/login">
              Autarization
            </Link>{' '}
          </>
        )}
        <Link to="/" onClick={() => logout()}>
          <div>Logout</div>
        </Link>
        <button className={` switchBtn ${theme}`} type="button" onClick={toggleTheme}>
          Switch theme
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
