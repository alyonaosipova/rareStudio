import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Components/Main/Main';
import useTheme from '../Components/Main/Thema';
import RegistrationPage from '../Components/Auth/RegistrationPage';
import LoginPage from '../Components/Auth/LoginPage';
import MainPage from '../Components/Main/MainPage';
import ServicesList from '../Components/Services/ServicesList';
import Info from '../Components/Info/Info';
import AuthPage from '../Components/Auth/AuthPage';
import ProfileUser from '../Components/Profile/ProfileUser';
import { RootState, useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { checkFetch } from '../Components/Auth/apiAuth';
import { authCheck } from '../Components/Auth/AuthSlice';
import Contacts from '../Components/Info/Contacts';

function App(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const user = useSelector((store: RootState) => store.user.user);

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Main toggleTheme={toggleTheme} theme={theme} />}>
          <Route index element={<MainPage />} />
          <Route path="authorization" element={<AuthPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="services" element={<ServicesList />} />
          <Route path="info" element={<Info />} />
          <Route path="profileUser" element={<ProfileUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
