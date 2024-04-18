/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

import { authLogout } from '../Auth/AuthSlice';
import './styles/Navbar.css';

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.user.user);
  async function logout(): Promise<void> {
    dispatch(authLogout()).catch(console.log);
    navigate('/');
  }
  return (
    <div className="navbar-container">
      <Link to="/">
        <img className="navlogo" src="logo.png" alt="" />
      </Link>

      <nav className="navbar">
        <Link className="navbar-link" to="/">
          Главная
        </Link>
        <Link className="navbar-link" to="/services">
          Услуги
        </Link>
        <Link className="navbar-link" to="/info">
          О нас
        </Link>
        <Link className="navbar-link" to="/contacts">
          <div>Контакты</div>
        </Link>
        {user && (
          <>
            <Link className="navbar-link" to="/profileUser">
              <div>Привет, {user?.name}</div>
            </Link>
            <Link className="navbar-link" to="/" onClick={() => logout()}>
              <div>Выйти</div>
            </Link>
          </>
        )}
        {!user && (
          <Link className="navbar-link" to="/authorization">
            Войти
          </Link>
        )}
        {/* {user && (
          <>
            <Link className="navbar-link" to="/profileUser">
              <div>Привет, {user?.name}</div>
            </Link>
            <Link className="navbar-link" to="/" onClick={() => logout()}>
              <div>Выйти</div>
            </Link>
          </>
        )} */}

        {/* <button className={` switchBtn ${theme}`} type="button" onClick={toggleTheme}>
          Switch theme
        </button> */}
      </nav>
    </div>
  );
}

export default Navbar;
