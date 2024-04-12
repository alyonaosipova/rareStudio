/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import {authLogout} from '../Auth/AuthSlice'

function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  async function logout(): Promise<void> {
    dispatch(authLogout()).catch(console.log)
    navigate('/main')
}
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link className="navbar-link" to="/">
          Main
        </Link>
        <Link className="navbar-link" to="/registration">
          Registration
        </Link>
        <Link className="navbar-link" to="/autarization">
          Autarization
        </Link>
        <Link to= '/'onClick={() => logout()}>
            {/* <i>Logout</i> */}
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
