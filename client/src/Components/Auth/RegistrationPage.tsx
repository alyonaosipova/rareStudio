import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/store';
import { authRegistration } from './AuthSlice';
import { useSelector } from 'react-redux';

// import './styles/Rega.css'

function RegistrationPage(): JSX.Element {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    r_password: '',
  });
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.user.user);
  let message = useSelector((store: RootState) => store.user.message);

  useEffect(() => {
    if (user !== undefined) {
      navigate('/');
    }
  }, [user]);

  async function getUser(): Promise<void> {
    dispatch(authRegistration({ ...form })).catch(console.log);
    message = '';
  }

  return (
    <main>
      <div className="regadiv">
        <div className="logaheader">
          <h1 className="h">Регистрация</h1>
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
        <div className="namediv">
          <input
            placeholder="Введите имя"
            className="email"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="passworddiv">
          <input
            placeholder="Придумайте пароль"
            className="email"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div className="r_passworddiv">
          <input
            placeholder="Повторите пароль"
            className="email"
            type="password"
            value={form.r_password}
            onChange={(e) => setForm({ ...form, r_password: e.target.value })}
          />
        </div>
        <div className="incorMess">{message}</div>
        <button type="button" className="signin" onClick={() => getUser(form)}>
          Регистрация
        </button>
      </div>
      <h2>Уже зарегистрированы?</h2>
    </main>
  );
}

export default RegistrationPage;
