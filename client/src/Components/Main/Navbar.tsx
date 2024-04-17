/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

import { authLogout } from '../Auth/AuthSlice';
import './styles/Navbar.css';

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
      <img
        className="navlogo"
        src="https://s3-alpha-sig.figma.com/img/c3d6/b58e/495f41aba75f273b6de3dab3455a9be0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWZ-SFA07niV1-NTyHykuqWtfG5d0Xz~PEdEqM2aDs9CRdw~02JWl84qC5uiKQem5iueo1tKMnrKsrS-6SaJpMfUo1caKHHPifSxDNb8OjAakC20u1nDKXlWnb1lTABYVuIk2daNE2SX4BHII6ow4YqED4RWEcb9qfloN2y4WwDxVQB2KKP8f5V4X1A1SupW-BNhoudix95lfTcTzR4mT5eT89FG0Qun9gPYyXKlZkrWz8tODHnHoD1a-6dSEvF9GX2Ny-WcfpNz~HOT3LFa5EQ6GfQ0Pcn~tn6-9kVoEcxOq8Pmc9GH6pdZ~DAZLsvCfcZN-gQH4mkiccy-Ix3s7g__"
        alt=""
      />
      <nav className="navbar">
        <Link className="navbar-link" to="/">
          Main
        </Link>
        <Link className="navbar-link" to="/services">
          Services
        </Link>
        <Link className="navbar-link" to="/info">
          Information
        </Link>
        {user && <div className="navbar-link">Привет, {user?.name}</div>}
        {!user && (
          <>
            {' '}
            <Link className="navbar-link" to="/authorization">
              Войти
            </Link>
          </>
        )}
        {user && (
          <>
          <Link className="navbar-link" to="/profileUser">
            <div>profile</div>
          </Link>
          <Link className="navbar-link" to="/" onClick={() => logout()}>
            <div>Logout</div>
          </Link>
          </>
        )}

        {/* <button className={` switchBtn ${theme}`} type="button" onClick={toggleTheme}>
          Switch theme
        </button> */}
      </nav>
    </div>
  );
}

export default Navbar;
