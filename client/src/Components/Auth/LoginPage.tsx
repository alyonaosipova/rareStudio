/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, {useEffect, useState, } from 'react';
import { useSelector } from 'react-redux';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type {User, UserInForm} from "./types/user"
import  {  RootState, useAppDispatch } from '../../redux/store';
import { authLogin } from './AuthSlice';
import { useNavigate } from 'react-router-dom';


function SignInForm(): JSX.Element {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const dispatch = useAppDispatch()
    const users = useSelector((store: RootState) => store.user.user);
    const user = useSelector((store: RootState) => store.user.user);
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
        // console.log(user);
            // const serverCheck: AxiosResponse<{message: string, user: User}> = await axios.post(`/api/sign/in`, form)
            // if (serverCheck.data.message === 'success') {
                dispatch(authLogin({...form})).catch(console.log)
                navigate('/')
            // } else {
                // setTitle(serverCheck.data.message)
                // getModal()
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
                    <h5>Пожалуйста введите данные для авторизации</h5>
                    <div className="space" />
                <nav className="no-space">
                    <div className="max field label border round">
                        <input type='email' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                        <label>e-mail</label>
                    </div>
                </nav>
                <nav>
                    <div className="max field label border round">
                        <input type='password'value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                        <label>Пароль</label>
                    </div>
                </nav>
                <nav>
                    <button className="max large round" onClick={() => getUser(user)}>Sign-in</button>
                </nav>
                </div>
            </main>
    );
}

export default SignInForm;