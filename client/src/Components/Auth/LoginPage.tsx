/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/store';
import { authLogin } from './AuthSlice';
import './styles/Login.css';

function SignInForm(): JSX.Element {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.user.user);

  async function getUser(): Promise<void> {
    dispatch(authLogin({ ...form })).catch(console.log);
    navigate('/');
  }

  return (
    <main>
      <div className="logadiv">
        <div className="logaheader">
          <h1 className="h">Войти</h1>
        </div>
        <div className="emaildiv">
          <input
            placeholder="Ваш e-mail"
            className="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="passworddiv">
          <input
            placeholder="Ваш пароль"
            className="password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button type="button" className="signin" onClick={() => getUser(user)}>
          Войти
        </button>
      </div>
      <h2>Еще не зарегистрированы?</h2>
    </main>
  );
}

export default SignInForm;
