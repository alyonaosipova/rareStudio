import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import { User } from './types/user';
import { useNavigate } from 'react-router-dom';
import {authRegistration} from "./AuthSlice"

function RegistrationPage(): JSX.Element {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [form, setForm] = useState({
      email: '',
      name: '',
      password: '',
      r_password: '',
  })
  const dispatch = useAppDispatch()
    const users = useSelector((store: RootState) => store.user.user);
  
  // const user = useSelector((store: RootState) => store.users.user);
  function getModal(): void {
      const blur = document.querySelector('blur')
      const modal = document.getElementById('modal');
      modal?.classList.add('active')
      blur?.classList.add('active')
  }
  function closeModal(): void {
      const blur = document.querySelector('blur')
      const modal = document.getElementById('modal');
      modal?.classList.remove('active')
      blur?.classList.remove('active')
  }
  async function getUser(): Promise<void> {
              dispatch(authRegistration({...form})).catch(console.log)
              // dispatch({type: 'users/signin', payload: serverCheck.data.user})
             // navigate('/main')
          //  {
          //     setTitle(serverCheck.data.message)
          //     getModal()
          // }
  }
    
    return (
        <main className="responsive fill medium-height middle-align center-align">
          <div className="overlay blur" />
                <dialog id='modal' className='extra'>
                    <h5>{title}</h5>
                    <button className="transparent link" onClick={() => closeModal()}>Закрыть</button>
                </dialog>
        <div className="center-align">
          <i className="extra">person</i>
          <h5>Пожалуйста введите данные для регистрации</h5>
          <div className="space"></div>
          <nav className="no-space">
            <div className="max field label border round">
              <input type='email' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
              <label>e-mail</label>
            </div>
          </nav>
          <nav className="no-space">
            <div className="max field label border round">
              <input type='text' value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
              <label>Имя</label>
            </div>
          </nav>
          <nav>
            <div className="max field label border round">
              <input type='password' value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
              <label>Пароль</label>
            </div>
            </nav>
          <nav>
            <div className="max field label border round">
              <input type='password' value={form.r_password} onChange={(e) => setForm({...form, r_password: e.target.value})}/>
              <label>Повторите пароль</label>
            </div>
            </nav>
            <nav>
            <button className="max large round" onClick={() => getUser(form)}>Sign-up</button>
            </nav>
        </div>
      </main>
    );
}

export default RegistrationPage;